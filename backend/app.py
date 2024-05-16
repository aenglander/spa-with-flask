from http import HTTPStatus

from flask import Flask, Blueprint

api = Blueprint('api', __name__)


@api.get('/status-codes')
def status_codes():
    return {item.name: item.value for item in HTTPStatus}


app = Flask(__name__)


@app.get("/", defaults={"path": ""})
@app.get("/<path:path>")
def frontend(path):
    return app.send_static_file('index.html')


app.register_blueprint(api, url_prefix='/api')
