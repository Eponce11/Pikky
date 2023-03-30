
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

@app.route('/api/post/create', methods=['POST'])
def createPost():
    data = json.loads(request.data)

    errors = Post.createPostValidator(data)

    if not len(errors) == 0:
        response = app.response_class(
            response = json.dumps(errors),
            status = 400,
            mimetype = 'application/json'
        )
        return response
    
    postId = Post.createPost(data)

    response = app.response_class(
        response = json.dumps(postId),
        status = 200,
        mimetype = 'application/json'
    )

    return response


@app.route('/api/post/getOne', methods=['POST'])
def getOne():
    data = json.loads(request.data)
    post = Post.getOnePost(data)

    response = app.response_class(
        response = json.dumps(post),
        status = 200,
        mimetype = 'application/json'
    )

    return post




