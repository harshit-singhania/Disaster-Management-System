import sys
from PIL import Image
from transformers import ViTFeatureExtractor, ViTForImageClassification
from hugsvision.inference.VisionClassifierInference import VisionClassifierInference

path1 = "./out/MYKVASIRV2MODEL/10_2024-03-22-00-08-07/feature_extractor/"
path2 = "./out/MYKVASIRV2MODEL/10_2024-03-22-00-08-07/model/"


def predict_image(image):
    feature_extractor = ViTFeatureExtractor.from_pretrained(path1)
    model = ViTForImageClassification.from_pretrained(path2)
    classifier = VisionClassifierInference(feature_extractor=feature_extractor, model=model)
    label = classifier.predict(img_path=image)
    print("Predicted class:", label)
    return label  # Return label directly, not as jsonify

if __name__ == "__main__":
    image_path = sys.argv[1]  # Receive the path from command-line arguments
    predict_image(image_path)