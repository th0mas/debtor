# NOTE: Throughouht this project I am going to be using typed python.
# This has NO runtime effect and is purely for ease of development so can
# be safely ignored.
#
# This will be in the format of:
# var: type = "value"

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_migrate import Migrate
import os
import jwt

# Create the base Flask object using local namespace.
app: Flask = Flask(__name__)
app.secret_key = os.environ.get("FLASK_APP_SECRET_KEY")

# Initialize the Database.
# This creates a database object that is used to declare models 
# and open a connection to the database with each http(s) connection
app.config["SQLALCHEMY_DATABASE_URI"]: str = os.environ.get("DATABASE_URL")
db: SQLAlchemy = SQLAlchemy(app)
migrate: Migrate = Migrate(app, db)

# Initialize hashing function
bcrypt: Bcrypt = Bcrypt(app)

# Initialize authentication.
# This creates and registers a function that authenticates API 
# requests from the frontend
login_manager: LoginManager = LoginManager()
login_manager.init_app(app)


# Initialize and register the API blueprint.
# This holds all the routes required for the REST api
# I'm using a blueprint in case I need to add another API version
# later or want to add other modules to the app.
from .core.routes import api_v1_blueprint  # noqa
app.register_blueprint(api_v1_blueprint)

# We then make sure we set CORS correctly using flask-cors
# to allow our api to be accessed
cors = CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000", "https://debtor.tomhaines.xyz"]}})

# User Loader declaration
from .core.models import User  # noqa
@login_manager.request_loader
def load_user_from_request(request):
    token = request.headers.get('Authorization')
    if token:
        token = token.replace('Bearer ', '', 1)
        result = User.decode_auth_token(token)
        if isinstance(result, User):
            return result
        else:
            return None
    # finally, return None if both methods did not login the user
    return None
