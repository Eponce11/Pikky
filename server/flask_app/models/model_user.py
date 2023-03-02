
from server.config.mysqlconnection import connectToMySQL
import re
from init import bcrypt, DATABASE

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.firstName = data['first_name']
        self.lastName = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']

    @classmethod
    def createUser(cls, data):
        query = "INSERT INTO users (username, first_name, last_name, email, password) VALUES (%(username)s, %(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        user_id = connectToMySQL(DATABASE).query_db(query, data)
        return user_id


