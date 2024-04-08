import flask
import os
from tempfile import NamedTemporaryFile
from flask import Flask, request, jsonify
from flask_cors import CORS 
from predictyolo import detect_person_count

app = Flask(__name__)
CORS(app, origins="*")  # Allow access from React dev server 

@app.route('/personCount', methods=['POST'])
def count_person():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image = request.files['image']
    
    # Save the image temporarily
    with NamedTemporaryFile(delete=False) as temp_image:
        temp_image_path = temp_image.name
        image.save(temp_image_path)
    
    count = detect_person_count(temp_image_path)
    print("total humans are :",count)
    os.unlink(temp_image_path)  # Remove temporary image after detection
    
    return jsonify({'count': count})

if __name__ == '__main__':
    app.run( port=9001, debug=True)