
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import bcrypt
from flask_app.config.env import DATABASE
import re

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
        query = "INSERT INTO users (username, first_name, last_name, email, password) VALUES (%(username)s, %(firstName)s, %(lastName)s, %(email)s, %(password)s);"
        user_id = connectToMySQL(DATABASE).query_db(query, data)
        return user_id

    @classmethod
    def getByEmail(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return False
    
    @classmethod
    def getByUsername(cls, data):
        query = "SELECT * FROM users WHERE username = %(username)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            return cls(result[0])
        return False


    @staticmethod
    def createUserValidator(formData):
        errors = {}
        
        if len(formData['username']) < 2:
            errors['username'] = 'Username must be at least 2 characters'
        else:
            potentialUsername = User.getByUsername({ 'username': formData['username'] })
            if not potentialUsername == False:
                errors['username'] = 'Username In Use'
        
        if len(formData['firstName']) < 2:
            errors['firstName'] = 'First Name must be at least 2 characters'
        
        if len(formData['lastName']) < 2:
            errors['lastName'] = 'Last Name must be at least 2 characters'

        if not EMAIL_REGEX.match(formData['email']):
            errors['email'] = 'Invalid email address'
        else:
            potentialEmail = User.getByEmail({ 'email': formData['email'] })
            if not potentialEmail == False:
                errors['email'] = 'Email In Use'

        if len(formData['password']) < 8:
            errors['password'] = 'Password must be at least 8 characters'
        
        if not formData['password'] == formData['confirmPassword']:
            errors['confirmPassword'] = 'Must match password'
        
        return errors 