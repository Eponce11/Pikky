
from flask import Flask
from flask_app.config.env import APP_SECRET, JWT_SECRET
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = APP_SECRET

app.config["JWT_SECRET_KEY"] = JWT_SECRET
app.config["JWT_TOKEN_LOCATION"] = ["headers", "cookies", "json"]
app.config["JWT_COOKIE_SECURE"] = False
jwt = JWTManager(app)


CORS(app, origins=["http://127.0.0.1:3000", "http://localhost:3000"])
