from flask_restful import Resource, fields, marshal_with, reqparse
from debtor.core.models import User
from debtor import db

resource_fields = {
    "id": fields.Integer,
    "name": fields.String,
    "email": fields.String,
    "color": fields.String,
    "profile_img": fields.String,
    "debts": fields.List(fields.String)  # TODO: Add Debt
}

parser = reqparse.RequestParser()
parser.add_argument("name", type=str)
parser.add_argument("email", type=str)
parser.add_argument("color", type=str)
parser.add_argument("profile_img", type=str)
parser.add_argument("password", type=str)


class Users(Resource):
    """
    Endpoint for /user/:id
    """
    @marshal_with(resource_fields)
    def get(self, id):
        return User.query.filter_by(id=id) \
            .first_or_404()

    @marshal_with(resource_fields)
    def put(self, id):
        args = parser.parse_args()
        user = User.query.filter_by(id=id) \
            .first_or_404()

        updated_fields = (arg for arg in args if args[arg])

        for field in updated_fields:
            setattr(user, field, args[field])
        db.session.add(user)
        db.session.commit()

        return user

    def delete(self, id):
        user = User.query.filter_by(id=id) \
            .first_or_404()
        user.delete()

        db.session.add(user)
        db.session.commit()

        return user


class UsersList(Resource):
    """
    Endpoint for /users
    """
    @marshal_with(resource_fields)
    def post(self):
        args = parser.parse_args()

        user = User(
            args['name'],
            args['email'],
            args['password'],
            args['color']
        )

        db.session.add(user)
        db.session.commit()

        return user

    def get(self):
        return "I do work promise"
