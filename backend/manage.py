from debtor import app, db
from debtor.core.models import User  # noqa


@app.cli.command('create_db')
def create_db():
    db.create_all()
    print("DB Created")


@app.cli.command('drop_db')
def drop_db():
    db.drop_all()
    print("oof")