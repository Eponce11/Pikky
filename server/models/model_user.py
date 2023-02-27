
from server.config.mysqlconnection import connectToMySQL
import re
from init import bcrypt, DATABASE

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.firstName = data['first_name']
        self.lastName = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']

