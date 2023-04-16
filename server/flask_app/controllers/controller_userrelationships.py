
from flask_app import app
from flask import json, request
from flask_app.models.model_userrelationship import UserRelationship



@app.route('/api/userRelationship/new', methods=['POST'])
def newUserRelationship():
    data = json.loads(request.data)
    print(data)
    id = UserRelationship.newRelationship(data)

    return {
        'Msg': "Followed"
    }

@app.route('/api/userRelationship/getFollowers', methods=['POST'])
def getUserFollowers():
    data = json.loads(request.data)
    
    userFollowers = UserRelationship.getOneUserFollowers(data)

    response = app.response_class(
        response = json.dumps(userFollowers),
        status = 200,
        mimetype = 'application/json'
    )

    return response

@app.route('/api/userRelationship/getFollowing', methods=['POST'])
def getUserfollowing():
    data = json.loads(request.data)
    
    userFollowing = UserRelationship.getOneUserFollowing(data)

    response = app.response_class(
        response = json.dumps(userFollowing),
        status = 200,
        mimetype = 'application/json'
    )
    
    return response