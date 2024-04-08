import flask
from flask import Flask, request, jsonify
from flask_cors import CORS 
from predict import predict_image

app = Flask(__name__)
CORS(app, origins="*")  # Allow access from React dev server 

@app.route('/classify', methods=['POST'])
def classify_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image = request.files['image']
    label = predict_image(image)
    print(label)
    return jsonify({'label': label})

if __name__ == '__main__':
    app.run( port=9000, debug=True)