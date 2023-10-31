from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
from flask_mysqldb import MySQL
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from config import config
from models.ModelUser import ModelUser
from models.entities.User import User
from chat import get_response
from werkzeug.security import generate_password_hash, check_password_hash
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired
from wtforms import HiddenField, SubmitField


class DeleteUserForm(FlaskForm):
    csrf_token = HiddenField()  # Campo oculto para el token CSRF
    submit = SubmitField('Eliminar')  # Botón de enviar para eliminar el usuario

class AddUserForm(FlaskForm):
    username = StringField('Nombre de Usuario', validators=[DataRequired()])
    password = PasswordField('Contraseña', validators=[DataRequired()])
    administrator = BooleanField('Administrador')
    submit = SubmitField('Guardar')


class EditUserForm(FlaskForm):
    username = StringField('Nombre de Usuario', validators=[DataRequired()])
    password = PasswordField('Contraseña')
    administrator = BooleanField('Administrador')
    submit = SubmitField('Guardar Cambios')



app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = False

# Configuración de CSRF y base de datos (MySQL)
csrf = CSRFProtect()
db = MySQL(app)
login_manager_app = LoginManager(app)


# Configuración de la sesión de Flask-Login
@login_manager_app.user_loader
def load_user(id):
    return ModelUser.get_by_id(db, id)

# Rutas de autenticación
@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User(0, request.form['username'], request.form['password'])
        logged_user = ModelUser.login(db, user)
        if logged_user is not None:
            login_user(logged_user)
            if logged_user.administrator:
                return render_template('Home.html')  # Redirige a Home.html para administradores
            else:
                return redirect(url_for('chatbot'))  # Redirige a la pantalla del chatbot para usuarios normales
        else:
            flash("Usuario no encontrado o contraseña no válida...")
            return render_template('auth/login.html')
    else:
        return render_template('auth/login.html')


@app.route('/logout')
@login_required  # Requiere que el usuario esté autenticado para hacer logout
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route("/chatbot")
@login_required
def chatbot():
    return redirect("http://localhost:5001/", code=302)  # Cambia el puerto según corresponda

# Ruta para mostrar la lista de usuarios (READ)
@app.route('/admin/users')
@login_required
def admin_users():
    if current_user.administrator:
        # Obtén la lista de usuarios desde la base de datos
        users = ModelUser.get_all(db)
        form = DeleteUserForm() 
        return render_template('admin/users.html', users=users, form=form)
    else:
        return "Unauthorized", 401

@app.route('/admin/users/add', methods=['GET', 'POST'])
@login_required
def add_user():
    form = AddUserForm()
    if form.validate_on_submit():
        # Procesa el formulario y guarda el nuevo usuario
        username = form.username.data
        password = form.password.data
        administrator = form.administrator.data

        # Encripta la contraseña antes de guardarla en la base de datos
        hashed_password = generate_password_hash(password, method='sha256')

        # Crea un nuevo objeto User
        new_user = User(0, username, hashed_password, administrator)

        # Guarda el nuevo usuario en la base de datos utilizando el método create
        ModelUser.create(db, new_user)

        return redirect(url_for('admin_users'))
    return render_template('admin/add_user.html', form=form)

@app.route('/admin/users/edit/<int:user_id>', methods=['GET', 'POST'])
@login_required
def edit_user(user_id):
    if current_user.administrator:
        user = ModelUser.get_by_id(db, user_id)
        if user is None:
            return "Usuario no encontrado", 404

        form = EditUserForm(obj=user)  # Crea una instancia del formulario y carga los datos del usuario

        if form.validate_on_submit():
            # Actualiza los datos del usuario en la base de datos
            form.populate_obj(user)  # Actualiza los datos del objeto "user" con los datos del formulario
            
            # Comprueba si se está cambiando la contraseña
            if form.password.data:
                # Encripta la nueva contraseña antes de actualizarla
                hashed_password = generate_password_hash(form.password.data, method='sha256')
                user.password = hashed_password
                flash("Usuario actualizado con éxito. La contraseña se ha cambiado.")
            else:
                flash("Usuario actualizado con éxito. No se cambió la contraseña.")

            ModelUser.update(db, user)

            return redirect(url_for('admin_users'))

        return render_template('admin/edit_user.html', user=user, form=form)
    else:
        return "Unauthorized", 401
    
@app.route('/admin/users/delete/<int:user_id>', methods=['POST'])
@login_required
def delete_user(user_id):
    if current_user.administrator:
        user = ModelUser.get_by_id(db, user_id)
        if user is None:
            return "Usuario no encontrado", 404

        # Elimina el usuario de la base de datos
        ModelUser.delete(db, user)

        flash("Usuario eliminado con éxito")

        # Obtén la lista de usuarios actualizada después de eliminar el usuario
        users = ModelUser.get_all(db)

        # Crea una instancia de DeleteUserForm
        form = DeleteUserForm()

        return render_template('admin/users.html', users=users, form=form)
    else:
        return "Unauthorized", 401

def status_401(error):
    return redirect(url_for('login'))

def status_404(error):
    return "<h1>Página no encontrada</h1>", 404

if __name__ == '__main__':
    app.config.from_object(config['development'])
    csrf.init_app(app)
    app.register_error_handler(401, status_401)
    app.register_error_handler(404, status_404)
    app.run(debug=True)  