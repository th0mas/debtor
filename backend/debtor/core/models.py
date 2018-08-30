from debtor import db, bcrypt
from flask_login import UserMixin


class User(db.Model, UserMixin):
    uuid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)

    color = db.Column(db.String(20))
    profile_img = db.Column(db.String(200))

    _password = db.Column(db.LargeBinary())

    debts = []  # TODO: Not implemented

    def __init__(self, name, email, password, color="default"):
        self.name = name
        self.email = email
        self.color = color

        self.password = password

    @property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = self.create_password_hash(password)

    def create_password_hash(self, password) -> bytes:
        """Creates a secure password hash using bcrypt"""
        return bcrypt.generate_password_hash(password)

    def check_password_hash(self, password) -> bool:
        """
        Checks the password entered against the hash
        in the database
        """
        return bcrypt.check_password_hash(self.password, password)
