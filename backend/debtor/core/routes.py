from flask import Blueprint
from flask_restful import Api

from debtor.resources.user import Users, UsersList
from debtor.resources.debt import Debts, DebtList
from debtor.resources.auth import Auth
from debtor.resources.pool import Pools, PoolsList

# Define the API route blueprint with the URL prefix of '/api/v1'
# This means all the API endpoints wull be attached to this url
api_v1_blueprint = Blueprint('api_v1', __name__, url_prefix='/api/v1')

# Create a flask_restful API object 
api_v1 = Api(api_v1_blueprint)

# Add the resources and attatch them to relative URLS
api_v1.add_resource(UsersList, '/users/')
api_v1.add_resource(Users, '/users/<int:id>/')

api_v1.add_resource(DebtList, '/debts/')
api_v1.add_resource(Debts, '/debts/<int:id>/')

api_v1.add_resource(PoolsList, '/pools/')
api_v1.add_resource(Pools, '/pools/<int:id>/')

api_v1.add_resource(Auth, '/auth/')