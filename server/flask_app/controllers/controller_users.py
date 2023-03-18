
from flask import json, request, jsonify
from flask_app import app, bcrypt, jwt
from flask_app.models.model_user import User
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, set_access_cookies, unset_jwt_cookies, jwt_required


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



@app.route('/api/user/createValidation', methods=['POST'])
def createUserValidation():
    data = json.loads(request.data)

    errors = User.createUserValidator(data)

    if not len(errors) == 0:
        response = app.response_class(
            response = json.dumps(errors),
            status = 400,
            mimetype = 'application/json'
        )
        return response

    response = json.dumps({'Msg': 'Success'})

    return response, 200





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
    
    response = jsonify({ 'msg': 'success' })

    accessToken = create_access_token(identity = data['email'])
    set_access_cookies(response, accessToken)

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

@app.route('/api/user/logout', methods=['POST'])
def logout():
    response = json.dumps({ "msg": "Logout Success" })
    unset_jwt_cookies(response)
    return response