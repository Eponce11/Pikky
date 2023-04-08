
from flask import json, request
from flask_app import app
from flask_app.models.model_comment import Comment

@app.route('/api/comment/newComment', methods=['POST'])
def newComment():
    data = json.loads(request.data)

    

    return