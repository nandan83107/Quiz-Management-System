from question import Question
from quiz import Quiz
from student import Student
from file_handler import FileHandler

quiz=Quiz()

questions=FileHandler.load_questions()

for question in questions:
    quiz.add_question(question)

while True:
    print("\n===== Quiz Management System =====")
    print("1. Start Quiz")
    print("2. View Results")
    print("3. LeaderBoard")
    print("4. Add Question")
    print("5. View Question")
    print("6. Exit")

    choice=input("Enter Choice:")

    if choice=='1':
        name=input("Enter Your Name:")
        student=Student(name)
        quiz.start_quiz(student)
        FileHandler.save_result(student)

    elif choice=='2':
        FileHandler.view_result()

    elif choice=='3':
        FileHandler.leaderboard()

    elif choice=='4':
        question_id=int(input("Enter Question ID: "))

        if quiz.question_exists(question_id):
            print("Question ID already Exists")
            continue
        question_txt=input("Enter Question: ")
        answer=input("Enter Answer: ")

        question=Question(
            question_id,
            question_txt,
            answer
        )

        quiz.add_question(question)

        FileHandler.save_question(question)

        print("Question Addded successfully")

    elif choice=='5':
        print("Thank You ")
        break

    elif choice=='6':
        quiz.view_questions()

    else:
        print("Enter a valid Input")