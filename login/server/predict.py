import sys
import json
import joblib
import numpy as np

# Load the trained model
model = joblib.load('model.joblib')

def predict(input_data):
    # Convert input_data dictionary values to a list and reshape for model input
    input_array = np.array([[
        float(input_data['airTemperature']),
        float(input_data['pressure']),
        float(input_data['torque']),
        float(input_data['rotationalSpeed']),
        float(input_data['toolWear'])
    ]])

    # Predict using the model
    prediction = model.predict(input_array)
    return prediction[0]

if __name__ == "__main__":
    # Load input data from command-line argument
    input_data = json.loads(sys.argv[1])
    result = predict(input_data)
    print(result)  # Output the prediction result
