import random
import json


import torch

from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
from spellchecker import SpellChecker
from unidecode import unidecode

spell = SpellChecker()

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Yui"

def get_response(msg):

    print("Received message:", msg)
    corrected_msg = " ".join([spell.correction(word) for word in msg.split()])
    msg = corrected_msg
    msg = unidecode(msg)
    sentence = tokenize(msg.lower())
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                response = random.choice(intent['responses'])
                # Normalizar la respuesta antes de enviarla al usuario
                normalized_response = unidecode(response)
                return normalized_response
    
    return "Recuerda que puede que no te de la respuesta que esperas, ya que soy un robot entrenado y a veces me desconfiguro"

if __name__ == "__main__":
    print("Hola Humano! (Escribe 'Salir' para cerrar)")
    while True:
        # sentence = "do you use credit cards?"
        sentence = input("Humano: ")
        if sentence == "Salir":
            break

        resp = get_response(sentence)
        print(resp)

