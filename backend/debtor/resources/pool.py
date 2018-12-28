from flask_restful import (Resource, fields, marshal_with, marshal_with_field, reqparse)

from flask_login import current_user, login_required
from sqlalchemy import or_
from debtor.core.models import User, Debt, Pool 

from debtor import db

id_field = {
    "id": fields.Integer
}

resource_fields = {
    "id": fields.Integer,
    "associated_debts": fields.List(fields.Nested(id_field)),
    "owner": fields.Nested(id_field)
}

parser = reqparse.RequestParser()
parser.add_argument("users", action='append')
parser.add_argument("owner", type=int)
parser.add_argument("amount", type=int)
parser.add_argument("description", type=str)

class Pools(Resource):
    """
    The Pools resource allows groups of debts to be created
    together and manipulated as `pools`. 
    """
    method_decorators=[login_required]

    @marshal_with(resource_fields)
    def get(self, id):
        """
        Return a pool of debts
        """
        return Pool.query.filter_by(id=id) \
            .first_or_404()

    @marshal_with(resource_fields)
    def put(self, id):
        # TODO: Implement put

        pool = Pool.query.filter_by(id=id) \
            .first_or_404()

        return pool
    
    def delete(self, id):
        pool = Pool.query.filter_by(id=id) \
            .first_or_404()

        db.session.delete(pool)
        db.session.commit()

        return {'status': 'success'}

class PoolsList(Resource):
    """
    Returns a list of pools 
    """
    method_decorators=[login_required]

    @marshal_with_field(fields.List(fields.Nested(resource_fields)))
    def get(self):
        # Generate a phat query
        return Pool.query.join(Debt).filter(
            or_(Debt.debtor == current_user, Pool.owner == current_user)
        )

    # TODO: Fix this mess
    @marshal_with(resource_fields)  
    def post(self):
        # Get required attributes from http request
        args = parser.parse_args()
        amount = args["amount"]
        owner = args["owner"]
        description = (args["description"] if args["description"] else f"Pooled debt for {current_user.name}")

        new_debts = []
        # Args
        for user_id in args["users"]:
            debt = Debt(
                amount,
                description,
                User.query.get(user_id), # Error 500 if returns none
                current_user             # Need to verify user exists
            )
            db.session.add(debt)
            new_debts.append(debt)

        # Create the pool with the newly created debts    
        pool = Pool(
            current_user,
            *new_debts # Expand the debts using the `*` operator
        )
        db.session.commit()
        return pool
            
