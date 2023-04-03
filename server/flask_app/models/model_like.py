
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.env import DATABASE

class Like:
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.post_id = data['post_id']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']
    
    @classmethod
    def newLike(cls, data):
        query = "INSERT INTO likes (user_id, post_id) VALUES (%(user_id)s, %(post_id)s);"
        like_id = connectToMySQL(DATABASE).query_db(query, data)
        return like_id
    
    @classmethod
    def getAllPostLikes(cls, data):
        query = "SELECT * FROM likes WHERE post_id = %(post_id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            likesList = []
            for like in result:
                likesList.append(cls(like))
            return likesList
        return []
        