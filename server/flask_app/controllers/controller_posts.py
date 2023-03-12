
from flask import json, request
from flask_app import app
from flask_app.models.model_post import Post


@app.route('/api/post/getAllUserPosts', methods=['POST'])
def getAllUserPosts():

    data = json.loads(request.data)
    
    allPosts = Post.getAllUserPosts(data)

    response = app.response_class(
        response = json.dumps(allPosts),
        status = 200,
        mimetype = 'application/json'
    )




    return response


