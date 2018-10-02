from flask_restful import Resource, reqparse
from flask_login import current_user, login_required
from flask import jsonify, request
import datetime
import jwt
from debtor import db
from debtor.core.models import User, BlacklistToken

parser = reqparse.RequestParser()
parser.add_argument("email", type=str)
parser.add_argument("password", type=str)
parser.add_argument("token", type=str)


class Auth(Resource):
    def post(self):
        args = parser.parse_args()
        user = User.query.filter_by(email=args["email"]).first_or_404()

        if user.check_password_hash(args["password"]):
            return jsonify({"Authorization": user.create_jwt().decode()})

        else:
            return jsonify({"error": "username or password incorrect"})

    @login_required    
    def get(self):
        key = current_user.create_jwt()
        return jsonify({
            "Authorization": key.decode()
        })
    
    @login_required
    def delete(self):
        token = request.headers.get('Authorization')
        if token:
            token = token.replace('JWT ', '', 1)
            bl_token = BlacklistToken(token)

            db.session.add(bl_token)
            db.session.commit()
        return "Logged out"