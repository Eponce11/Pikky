
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.env import DATABASE


class Post:
    def __init__(self, data):
        self.id = data['id']
        self.caption = data['caption']
        self.image = data['image']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']
        self.user_id = data['user_id']

    @classmethod
    def getAllUserPosts(cls, data):
        query = "SELECT * FROM posts WHERE user_id = %(user_id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            postsList = []
            for post in result:
                serializedPost = Post.serialize(post)
                postsList.append(serializedPost)
            return postsList
        return []

    @classmethod
    def getOnePost(cls, data):
        query = "SELECT * FROM posts WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if result:
            serializedPost = Post.serialize(result[0])
            return serializedPost
        return False


    @classmethod
    def createPost(cls, data):
        query = "INSERT INTO posts (caption, image, user_id) VALUES (%(caption)s, %(image)s, %(user_id)s);"
        post_id = connectToMySQL(DATABASE).query_db(query, data)
        return post_id

    @staticmethod
    def serialize(data):
        return {
            'id': data['id'],
            'caption': data['caption'],
            'image': data['image'],
            'created_at': data['created_at'],
            'updated_at': data['updated_at'],
            'user_id': data['user_id']
        }
    
    @staticmethod
    def createPostValidator(formData):
        errors = {}

        if len(formData['image']) < 20:
            errors['image'] = 'Image is required'
        
        if formData['user_id'] < 1:
            errors['user_id'] = 'Invalid User'
        
        return errors
