# NOTE: Throughouht this project I am going to be using typed python.
# This has NO runtime effect and is purely for ease of development so can
# be safely ignored.
# 
# This will be in the format of:
# var: type = "value"

from flask import Flask
from flask_restful import Api

# Create the base Flask object using local namespace.
app: Flask = Flask(__name__)

# Initialize API Object.
# This will be used to create a restful API that allows my JS Frontend to effectively
# communicate with the server. I am using `flask_restful` here as it includes
# useful shortcuts and abstractions that make it easier to develop a working API.
rest_api: Api = Api(app)

# Register API Routes
from .api.image import Image