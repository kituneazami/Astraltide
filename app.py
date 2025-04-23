from flask import Flask, render_template

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


def _static_url(path):
    return app.url_for('static', filename=path)

app.jinja_env.filters['url'] = _static_url

@app.route("/")
def index():
    return render_template('index.html')
