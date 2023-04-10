
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.env import DATABASE

class UserRelationship:
    def __init__(self, data):
        self.id = data['id']
        self.follower = data['follower']
        self.following = data['following']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']

    @classmethod
    def newRelationship(cls, data):
        query = "INSERT INTO userrelationships (follower, following) VALUES (%(follower)s, %(following)s);"
        relationship_id = connectToMySQL(DATABASE).query_db(query, data)
        return relationship_id
