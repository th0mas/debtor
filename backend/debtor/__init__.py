# NOTE: Throughouht this project I am going to be using typed python.
# This has NO runtime effect and is purely for ease of development so can
# be safely ignored.
# 
# This will be in the format of:
# var: type = "value"

from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_bcrypt import Bcrypt

# Create the base Flask object using local namespace.
app: Flask = Flask(__name__)

# Initialize API Object.
# This will be used to create a restful API that allows my JS Frontend to effectively
# communicate with the server. I am using `flask_restful` here as it includes
# useful shortcuts and abstractions that make it easier to develop a working API.
rest_api: Api = Api(app)

# Initialize the Database.
# This creates a database object that is used to declare models and open a connection
# to the database with each http(s) connection
app.config["SQLALCHEMY_DATABASE_URI"]: str = "sqlite:///devdb.db"
db: SQLAlchemy = SQLAlchemy(app)

# Initialize hashing function
bcrypt: Bcrypt = Bcrypt(app)

# Initialize authentication.
# This creates and registers a function that authenticates API requests from the frontend
login_manager: LoginManager = LoginManager()
login_manager.init_app(app)


# User Loader declaration
from .core.models import User


@login_manager.user_loader
def load_user(user_id):
    return User.get(user_id)
