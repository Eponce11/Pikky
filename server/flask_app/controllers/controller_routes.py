
from flask_app import app
from flask import json, request
from flask_app.models.model_post import Post
from flask_app.models.model_user import User

@app.route('/api/routes/getUserAndPosts', methods=['POST'])
def getUserInfoAndPosts():
    data = json.loads(request.data)
    user = User.getByUsername(data) 
    if not user:
        response = app.response_class(
            response = json.dumps("User not found"),
            status = 400,
            mimetype = 'application/json'
        )
        return response
    
    allPosts = Post.getAllUserPosts({ 'user_id': user.id })

    response = {
        'id': user.id,
        'username': user.username,
        'profilePicture': user.profilePicture,
        'posts': allPosts
    }
    
    return response, 200



