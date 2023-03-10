
from flask import json, request
from flask_app import app, bcrypt
from flask_app.models.model_user import User



@app.route('/api/user/create', methods=['POST'])
def createUser():

    data = json.loads(request.data)

    errors = User.createUserValidator(data)

    if not len(errors) == 0:
        response = app.response_class(
            response = json.dumps(errors),
            status = 400,
            mimetype = 'application/json'
        )
        return response

    hash_pw = bcrypt.generate_password_hash(data['password'])

    data['password'] = hash_pw
    
    # id = User.createUser(data)

    response = app.response_class(
        response = json.dumps({'Msg': 'Success'}),
        status = 200,
        mimetype = 'application/json'
    )

    return response

@app.route('/api/user/login', methods=['POST'])
def login():
    data = json.loads(request.data)

    error = User.loginUserValidator(data)

    if error:
        response = app.response_class(
            response = json.dumps(error),
            status = 400,
            mimetype = 'application/json'
        )
        return response
    
    response = app.response_class(
        response = json.dumps({ 'Msg': 'Success' }),
        status = 200,
        mimetype = 'application/json'
    )

    return response

@app.route('/api/user/getOne', methods=['POST'])
def getOneUserByUsername():
    data = json.loads(request.data)

    user = User.getByUsername(data)

    if not user:
        response = app.response_class(
            response = json.dumps("User not found"),
            status = 400,
            mimetype = 'application/json'
        )
        return response

    response = app.response_class(
        response = json.dumps({ 'username': user.username }),
        status = 200,
        mimetype = 'application/json'
    )

    return response
