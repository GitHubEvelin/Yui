from flask import Flask, render_template, request, jsonify
from chat import get_response

app = Flask(__name__)

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
    # Código para mostrar la página 'respiracion.html' o realizar otras acciones
    return render_template('respiracion.html')

@app.route('/cuentos')
def cuentos():
    # Código para mostrar la página 'cuentos.html' o realizar otras acciones
    return render_template('cuentos.html')

@app.route('/meditacion')
def meditacion():
    # Código para mostrar la página 'meditacion.html' o realizar otras acciones
    return render_template('meditacion.html')

@app.route('/chatbot')
def chatbot():
    # Código para mostrar la página 'base.html' o realizar otras acciones
    return render_template('base.html')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
