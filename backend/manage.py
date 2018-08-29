from flask_script import Manager

from debtor import app

manager = Manager(app)

@manager.command # Never ever do this in production
def run():
    app.run(debug=True, host="0.0.0.0")


if __name__ == "__main__":
    manager.run()