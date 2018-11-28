from flask_restful import Resource, reqparse
from flask_login import current_user, login_required
from flask import jsonify, request
import datetime
import jwt
from debtor import db
from debtor.core.models import User, BlacklistToken

# Create a Request Parser object to parse the incoming requests arguments
# We do this instead of accessing the arguments directly using the flask.request.args object
# to properly escape input and avoid RCE attacks
parser = reqparse.RequestParser()
parser.add_argument("email", type=str)
parser.add_argument("password", type=str)
parser.add_argument("token", type=str)


class Auth(Resource):
    """
    The Auth resource manages the authentication of users in tandem with Flask-Login which provides
    the `current_user` object.

    We are using JSON Web Tokens to manage user authentication - provided by debtor.core.models.User,
    """
    def post(self):
        """ 
        Used when a user initially logs in.
        Requires the `email` and `password` arguments and use these to verify the user and then
        provide them with a login token. - Otherwise returns an error
        """
        args = parser.parse_args()
        user = User.query.filter_by(email=args["email"]).first_or_404()

        if user.check_password_hash(args["password"]):
            return jsonify({"Authorization": user.create_jwt().decode()})

        else:
            return jsonify({"error": "username or password incorrect"})

    @login_required    
    def get(self):
        """
        Provides the client with an updated login token - required as tokens
        provided expire after one week
        """
        key = current_user.create_jwt()
        return jsonify({
            "Authorization": key.decode()
        })
    
    @login_required
    def delete(self):
        """
        In case a user logs out or there account is comprimised, we can blacklist tokens here
        so they can't be used.

        The blacklist is checked when the server first recieves the request
        """
        token = request.headers.get('Authorization')
        if token:
            token = token.replace('Bearer ', '', 1)
            bl_token = BlacklistToken(token)

            db.session.add(bl_token)
            db.session.commit()
        return "Logged out"