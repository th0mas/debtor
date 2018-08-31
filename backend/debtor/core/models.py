from datetime import datetime

from debtor import db, bcrypt
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


class Debt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time_created = db.Column(db.DateTime, default=datetime.utcnow())

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
    
    paid = db.Column(db.Boolean)