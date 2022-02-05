from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import table

db = SQLAlchemy()

class Favorite(db.Model):
    __tablename__="favorite"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey("user.id"))
    movie_id = db.Column(db.Integer,db.ForeignKey('movie.id'))

    def serialize(self):
        return{
            "id":self.id,
            "user_id":self.user_id,
            "movie_id":self.movie_id,

        }
    
class User(db.Model):
    __tablename__='user'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(500), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    favorites = db.relationship("Favorite")
 
    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username":self.username,
            "email": self.email,
            "favorites":self.favorites,
            # do not serialize the password, its a security breach
        }    


class Movie(db.Model):
    __tablename__='movie'
    id = db.Column(db.Integer, primary_key=True)
    original_language = db.Column(db.String(120), nullable=False)
    original_title = db.Column(db.String(120), unique=True, nullable=False)
    release_date = db.Column(db.String(120), nullable=False)
    title = db.Column(db.String(120), unique=True, nullable=False)
    vote_average = db.Column(db.Integer)
    vote_count = db.Column(db.Integer)
    favorites = db.relationship("Favorite")

    def serialize(self):
        return {
            "id":self.id,
            "original_language":self.original_language,
            "original_title":self.original_title,
            "release_date":self.release_date,
            "title":self.title,
            "vote_average":self.vote_average,
            "vote_count":self.vote_count,
            "favorites":self.favorites,

             }













