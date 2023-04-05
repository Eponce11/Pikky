
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.env import DATABASE


class Comment:
    def __init__(self,  data):
        self.id = data['id']
        self.text = data['text']
        self.user_id = data['user_id']
        self.post_id = data['post_id']
        self.createdAt = data['created_at']
        self.updatedAt = data['updated_at']

    @classmethod
    def newComment(cls, data):
        query = "INSERT INTO comments (text, user_id, post_id) VALUES (%(text)s, %(user_id)s, %(post_id)s);"
        comment_id = connectToMySQL(DATABASE).query_db(query, data)
        return comment_id

    @staticmethod
    def newCommentValidator(formData):
        errors = {}

        if len(formData['text']) < 1:
            errors['text'] = 'Text Required'
        
        if formData['user_id'] < 1:
            errors['user_id'] = 'Invalid User'
        
        if fromData['post_id'] < 1:
            errors['post_id'] = 'Invalid Post'

        return errors