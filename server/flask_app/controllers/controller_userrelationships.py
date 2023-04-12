
from flask_app import app
from flask import json, request
from flask_app.models.model_userrelationship import UserRelationship



@app.route('/api/userRelationship/new', methods=['POST'])
def newUserRelationship():
    data = json.loads(request.data)
    userRelationship = UserRelationship.newRelationship(data)

    return {
        'Msg': "Followed"
    }