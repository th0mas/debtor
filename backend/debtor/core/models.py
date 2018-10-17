from datetime import datetime, timedelta
import os
import jwt
from debtor import db, bcrypt, app
from flask_login import UserMixin


class User(db.Model, UserMixin):
    """
    The primary user class.

    :param name: The name of the user
    :param email: The email of the user
    :param color: The color used throughout the users profile
    :param profile_img: URL to the profile image of the user
    :param password: Binary representation of a users password hash

    NOTES:
    Password is set by setters/getters.
    :type password: string
    Pass the new password string directly and it should get figured out.
    """
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(200), unique=True, nullable=False)

    color = db.Column(db.String(20))
    profile_img = db.Column(db.String(200))

    _password = db.Column(db.LargeBinary())

    debts = db.relationship('Debt', backref="debtor", lazy=True,
                            foreign_keys='Debt.debtor_id')
    owed = db.relationship('Debt', backref="creditor", lazy=True,
                           foreign_keys='Debt.creditor_id')

    def __init__(self, name, email, password, color="default"):
        self.name = name
        self.email = email
        self.color = color

        self.password = password

    @property
    def password(self) -> bytes:
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
        in the database.

        Returns a True/False value depending on if passwords are correct
        """
        return bcrypt.check_password_hash(self.password, password)
    
    def create_jwt(self):
        payload = {
            'exp': datetime.utcnow() + timedelta(days=1, seconds=5),
            'iat': datetime.utcnow(),
            'user': self.id
        }
        return jwt.encode(
            payload,
            app.secret_key,
            algorithm='HS256'
        )

    @staticmethod  
    def decode_auth_token(auth_token):
        try:
            payload = jwt.decode(auth_token, app.secret_key)
            is_blacklisted_token = BlacklistToken.verify_token_blacklist(auth_token)
            if is_blacklisted_token:
                return 'Token blacklisted. Please log in again.'
            else:
                return User.query.get(payload['user'])
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

class BlacklistToken(db.Model):
    """
    As we are using JSON web tokens for authentication,
    we need a way to revoke tokens and blacklist them , for example
    on user logout or security breach. We'll just keep track of them here.
    """
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    blacklisted_on = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __init__(self, token):
        self.token = token
    
    @staticmethod
    def verify_token_blacklist(token: bytes) -> bool:
        result = BlacklistToken.query.filter_by(token=str(token)).first()
        if result:
            return True
        else:
            return False


class Debt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time_created = db.Column(db.DateTime, default=datetime.utcnow)
    # Amount of debt in pence.
    # By storing as an integer it removes the possibility of float inacuracies.
    # It also makes representation more consistent and allows for simpler logic
    # that doesnt have to account for small differences between a float and
    # money.
    # e.g. £1.50 vs float(1.5).
    amount = db.Column(db.Integer)

    # Debtor, the person who OWES the money
    debtor_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                          nullable=False)

    creditor_id = db.Column(db.Integer, db.ForeignKey('user.id'),
                            nullable=False)

    description = db.Column(db.String(200))
    
    paid = db.Column(db.Boolean, default=False)

    def __init__(self, amount, description, debtor, creditor):
        self.amount = amount
        self.description = description
        self.debtor = debtor
        self.creditor = creditor
