from flask import Flask, render_template, request, jsonify, redirect, url_for, flash
from models.ModelUser import ModelUser
from datetime import datetime  # Importa el módulo datetime
from flask_login import current_user, LoginManager, login_user, logout_user, login_required
from flask_mysqldb import MySQL
from config import config
import logging
from models.entities.User import User


from chat import get_response


app = Flask(__name__)
db = MySQL(app)

# Configura MySQL con el nivel de depuración deseado
app.config['MYSQL_DATABASE_DEBUG'] = True  # Activa el modo de depuración


app.config['SECRET_KEY'] = 'B!1w8NAt1T^%kvhUI*S^'
app.logger.setLevel(logging.DEBUG) 

# Crea una instancia de LoginManager y configúrala en tu aplicación
login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(id):
    return ModelUser.get_by_id(db, id)

@app.get("/")
def index_get():
    return render_template("base.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

@app.route('/tecnicas')
def tecnicas():
    # Código para mostrar la página 'tecnicas.html' o realizar otras acciones
    return render_template('tecnicas.html')

@app.route('/diario')
def diario():
    # Código para mostrar la página 'diario.html' o realizar otras acciones
    return render_template('diario.html')

@app.route('/respiracion')
def respiracion():
    # Código para mostrar la página 'diario.html' o realizar otras acciones
    return render_template('respiracion.html')

@app.route('/cuentos')
def cuentos():
    # Código para mostrar la página 'diario.html' o realizar otras acciones
    return render_template('cuentos.html')

@app.route('/meditacion')
def meditacion():
    # Código para mostrar la página de meditación o realizar otras acciones
    return render_template('meditacion.html')  # Reemplaza 'meditacion.html' con el nombre de tu plantilla

@app.route('/chatbot')
def chatbot():
    return render_template('base.html')  


if __name__ == "__main__":
    app.run(debug=True, port=5001)  
