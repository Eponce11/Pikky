
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.env import DATABASE


class Post:
    def __init__(self, data):
        self.id = data['id']
        self.caption = data['caption']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def getAllUserPosts(cls, data):
        query = "SELECT * FROM posts WHERE user_id = %(user_id)s"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            postsList = []
            for post in result:
                serializedPost = Post.serialize(post)
                postsList.append(serializedPost)
            return postsList
        return []
    
    @staticmethod
    def serialize(data):
        return {
            'id': data['id'],
            'caption': data['caption'],
            'created_at': data['created_at'],
            'updated_at': data['updated_at'],
            'user_id': data['user_id']
        }
