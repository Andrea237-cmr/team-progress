from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

# Hugging Face model (you can change to another one later)
API_URL = "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta"

# No token needed for public models, but it’s slower. You can also create a free account later for better usage.
headers = {
    "Authorization": "Bearer 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"
}

system_prompt = "You are a friendly restaurant chatbot. Help users order food and answer questions politely."

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/chat', methods=["POST"])
def chat():
    user_input = request.json.get("message", "")

    full_prompt = f"{system_prompt}\nUser: {user_input}\nBot:"

    payload = {
        "inputs": full_prompt,
        "parameters": {"max_new_tokens": 100, "return_full_text": False}
    }

    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        result = response.json()

        print("🔎 Raw result from Hugging Face:", result)

        if isinstance(result, list) and "generated_text" in result[0]:
            bot_reply = result[0]["generated_text"]
        else:
            bot_reply = "Sorry, I couldn't process that."

        return jsonify({"response": bot_reply})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
