
from flask_app import app
from flask_app.controllers import controller_routes, controller_users, controller_posts, controller_likes, controller_userrelationships


if __name__=="__main__":
    app.run(debug=True)