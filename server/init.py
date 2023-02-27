
from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt

app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])

bcrypt = Bcrypt(app)
DATABASE = ""