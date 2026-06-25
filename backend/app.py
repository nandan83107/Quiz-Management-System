from flask import Flask, jsonify,request
from flask_cors import CORS
from file_handler import FileHandler

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():

    return "Quiz API Running"
@app.route("/questions")
def get_questions():

    questions = FileHandler.load_questions()

    data = []

    for q in questions:

        data.append({
            "id": q.question_id,
            "question": q.question_text
        })

    return jsonify(data)

@app.route("/submit", methods=["POST"])
def submit_quiz():

    user_data = request.json
    print(request.json)

    name = user_data["name"]
    user_answers = user_data["answers"]

    questions = FileHandler.load_questions()

    score = 0

    for question in questions:

        user_answer = user_answers.get(
            str(question.question_id),
            ""
        )

        if user_answer.lower() == question.answer.lower():

            score += 1

    FileHandler.save_result(
        name,
        score
    )

    return jsonify({
        "score": score,
        "total": len(questions)
    })

@app.route("/leaderboard")
def leaderboard():

    results = []

    try:
        with open("results.txt", "r") as file:

            for line in file:

                name, score = line.strip().split(",")

                results.append({
                    "name": name,
                    "score": int(score)
                })

    except FileNotFoundError:
        pass

    results.sort(
        key=lambda x: x["score"],
        reverse=True
    )

    return jsonify(results)

@app.route("/add_question", methods=["POST"])
def add_question():

    data = request.json

    question_text = data["question"]
    answer = data["answer"]

    questions = FileHandler.load_questions()

    new_id = len(questions) + 1

    with open("question.txt", "a") as file:

        file.write(
            f"\n{new_id},{question_text},{answer}"
        )

    return jsonify({
        "message": "Question Added Successfully"
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)