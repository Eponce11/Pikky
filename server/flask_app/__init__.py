
from flask import Flask
from flask_app.config.env import APP_SECRET
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = APP_SECRET

CORS(app, origins=["http://127.0.0.1:3000", "http://localhoost:3000"])
