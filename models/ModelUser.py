from .entities.User import User

class ModelUser():
    @classmethod
    def login(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = """SELECT id_usuario, nombre, contrasena, administrador FROM usuario 
                    WHERE nombre = '{}'""".format(user.username)
            cursor.execute(sql)
            row = cursor.fetchone()
            if row is not None:
                user_id, username, hashed_password, is_admin = row
                if User.check_password(hashed_password, user.password):
                    user = User(user_id, username, None, is_admin)
                    return user
            return None
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def get_by_id(cls, db, id):
        try:
            cursor = db.connection.cursor()
            sql = "SELECT id_usuario, nombre, administrador FROM usuario WHERE id_usuario = {}".format(id)
            cursor.execute(sql)
            row = cursor.fetchone()
            if row is not None:
                user_id, username, is_admin = row
                return User(user_id, username, None, is_admin)
            return None
        except Exception as ex:
            raise Exception(ex)

    @classmethod
    def get_all(cls, db):
        cursor = db.connection.cursor()
        cursor.execute("SELECT id_usuario, nombre, contrasena, administrador FROM usuario")
        users = []
        for row in cursor.fetchall():
            id, username, password, administrator = row
            user = User(id, username, password, administrator)
            users.append(user)
        cursor.close()
        return users

    @classmethod
    def create(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = """
                INSERT INTO usuario (nombre, contrasena, administrador)
                VALUES (%s, %s, %s)
            """
            cursor.execute(sql, (user.username, user.password, user.administrator))
            db.connection.commit()
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        finally:
            cursor.close()

    @classmethod
    def update(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = """
                UPDATE usuario
                SET nombre = %s, contrasena = %s, administrador = %s
                WHERE id_usuario = %s
            """
            cursor.execute(sql, (user.username, user.password, user.administrator, user.id))
            db.connection.commit()
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        finally:
            cursor.close()


    @classmethod
    def delete(cls, db, user):
        try:
            cursor = db.connection.cursor()
            sql = "DELETE FROM usuario WHERE id_usuario = %s"
            cursor.execute(sql, (user.id,))
            db.connection.commit()
        except Exception as ex:
            db.connection.rollback()
            raise Exception(ex)
        finally:
            cursor.close()