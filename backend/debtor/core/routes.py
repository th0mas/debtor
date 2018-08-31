from flask import Blueprint
from flask_restful import Api

from debtor.resources.user import Users, UsersList

api_v1_blueprint = Blueprint('api_v1', __name__, url_prefix='/api/v1')

api_v1 = Api(api_v1_blueprint)

api_v1.add_resource(UsersList, '/users/')
api_v1.add_resource(Users, '/users/<int:id>/')