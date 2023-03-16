
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE = os.getenv("DATABASE")
APP_SECRET = os.getenv("APP_SECRET")
JWT_SECRET = os.getenv("JWT_SECRET")
HOST = os.getenv("HOST")
USER = os.getenv("USER")
PASSWORD = os.getenv("PASSWORD")