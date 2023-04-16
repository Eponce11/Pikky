
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.env import DATABASE

class UserRelationship:
    def __init__(self, data):
        self.id = data['id']
        self.follower_id = data['follower_id']
        self.following_id = data['following_id']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']

    @classmethod
    def newRelationship(cls, data):
        query = "INSERT INTO userrelationships (follower_id, following_id) VALUES (%(follower_id)s, %(following_id)s);"
        relationship_id = connectToMySQL(DATABASE).query_db(query, data)
        return relationship_id

    @classmethod
    def getOneUserFollowers(cls, data):
        query = "SELECT * FROM userrelationships WHERE following_id = %(following_id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            followersList = []
            for follower in result:
                serializedRelationship = UserRelationship.serialize(follower)
                followersList.append(serializedRelationship)
            return followersList
        return []
    
    @classmethod
    def getOneUserFollowing(cls, data):
        query = "SELECT * FROM userrelationships WHERE follower_id = %(follower_id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            followingList = []
            for following in result:
                serializedRelationship = UserRelationship.serialize(following)
                followingList.append(serializedRelationship)
            return followingList
        return []

    def serialize(data):
        return {
            'id': data['id'],
            'follower_id': data['follower_id'],
            'following_id': data['following_id'],
            'created_at': data['created_at'],
            'updated_at': data['updated_at']
        }