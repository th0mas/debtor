from flask_restful import Resource, fields, marshal_with, reqparse, marshal_with_field
from sqlalchemy import desc
from debtor.core.models import User, Debt
from debtor import db

from . import user

resource_fields = {
    "id": fields.Integer,
    "time_created": fields.DateTime,
    "amount": fields.Integer,
    "debtor": fields.Nested(user.resource_fields),
    "creditor": fields.Nested(user.resource_fields),
    "paid": fields.Boolean
}

parser = reqparse.RequestParser()
parser.add_argument("amount", type=str)
parser.add_argument("debtor_id", type=int)
parser.add_argument("creditor_id", type=int)
parser.add_argument("paid", type=bool)


class Debts(Resource):
    @marshal_with(resource_fields)
    def get(self, id):
        return Debt.query.filter_by(id=id) \
            .first_or_404()

    @marshal_with(resource_fields)
    def put(self, id):
        """
        We only want to change if its been paid or not,
        everything else is immutable
        """

        args = parser.parse_args()
        debt = Debt.query.filter_by(id=id) \
            .first_or_404()
        paid = args["paid"]
        if paid:
            debt.paid = paid

        db.session.add(debt)
        db.session.commit()

        return debt

    def delete(self, id):
        debt = Debt.query.filter_by(id=id) \
            .first_or_404()

        debt.delete()
        db.session.add(debt)
        db.session.commit()

        return debt


class DebtList(Resource):
    @marshal_with_field(fields.List(fields.Nested(resource_fields)))
    def get(self):
        return Debt.query.order_by(desc(Debt.time_created)).all()

    @marshal_with(resource_fields)
    def post(self):
        args = parser.parse_args()
        debt = Debt(
            args["amount"],
            User.query.get(args["debtor_id"]),
            User.query.get(args["creditor_id"])
        )

        db.session.add(debt)
        db.session.commit()

        return debt