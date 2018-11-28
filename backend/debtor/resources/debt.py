from flask_restful import (Resource, fields, marshal_with, reqparse, 
                           marshal_with_field)
from sqlalchemy import desc
from flask_login import current_user, login_required
from debtor.core.models import User, Debt
from debtor import db

user_id = {
    "id": fields.Integer
}

resource_fields = {
    "id": fields.Integer,
    "time_created": fields.DateTime,
    "amount": fields.Integer,
    "description": fields.String,
    "debtor": fields.Nested(user_id),
    "creditor": fields.Nested(user_id),
    "paid": fields.Boolean
}

parser = reqparse.RequestParser()
parser.add_argument("amount", type=str)
parser.add_argument("debtor", type=dict)
parser.add_argument("creditor_id", type=int) # TODO: Fix this in FE
parser.add_argument("debtor_id", type=int)
parser.add_argument("creditor", type=dict)
parser.add_argument('description', type=str)
parser.add_argument("paid", type=bool)


class Debts(Resource):
    """
    The debt resource allows a client to add remove and update
    debts on the server. 

    Maps the Debt model to HTTP endpoints that can be used by the clients
    """

    # Only logged in users should be able to access this resource
    method_decorators=[login_required]

    @marshal_with(resource_fields)
    def get(self, id):
        """
        Retrieve a debt by its id
        """
        return Debt.query.filter_by(id=id) \
            .first_or_404()

    @marshal_with(resource_fields)
    def put(self, id):
        """
        Edit a debt using its ID

        We only want to change if its been paid or not,
        everything else is immutable
        """

        args = parser.parse_args()
        debt = Debt.query.filter_by(id=id) \
            .first_or_404()
        paid = args["paid"]

        # Only the person the debt is owed to should be able to change this
        if paid and current_user.id == args.get('creditor').get('id'):
            debt.paid = paid

        db.session.add(debt)
        db.session.commit()

        return debt

    # def delete(self, id):
    #     """Delete a debt by ID"""
    #     debt = Debt.query.filter_by(id=id) \
    #         .first_or_404()

    #     debt.delete()
    #     db.session.add(debt)
    #     db.session.commit()

    #     return debt


class DebtList(Resource):
    """
    Returns a list of debts and also allows the client to add debts
    """
    method_decorators=[login_required]

    @marshal_with_field(fields.List(fields.Nested(resource_fields)))
    def get(self):
        return Debt.query.order_by(desc(Debt.time_created)).all()

    @marshal_with(resource_fields)
    def post(self):
        args = parser.parse_args()
        debt = Debt(
            args["amount"],
            args["description"],
            User.query.get(args["debtor_id"]),
            User.query.get(args["creditor_id"])
        )

        db.session.add(debt)
        db.session.commit()

        return debt