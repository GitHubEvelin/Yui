from werkzeug.security import check_password_hash


from flask_login import UserMixin


class User(UserMixin):
    def __init__(self, id, username, password=None, administrator=True) -> None:
        self.id = id
        self.username = username
        self.password = password
        self.administrator = administrator

    @classmethod
    def check_password(cls, hashed_password, password):
        return check_password_hash(hashed_password, password)
    

    def is_admin(self):
        return self.administrator
    
