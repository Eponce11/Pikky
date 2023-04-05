
from flask import json, request
from flask_app import app
from flask_app.models.model_like import Like

@app.route('/api/like/newLike', methods=['POST'])
def newLike():
    data = json.loads(request.data)
    if not data['user_id']:
        return { 'error': 'Invalid User' }
    
    potentialLike = Like.getOneLike(data)

    if potentialLike:
        Like.removeLike(data)
        return { 'msg': 'Removed Like' }

    like_id = Like.newLike(data)

    return { 'msg': 'Liked'}