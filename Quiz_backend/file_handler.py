from question import Question
class FileHandler:

    @staticmethod
    def save_result(name,score):
        with open ('results.txt','a') as file:

            file.write(
                f"{name},{score}\n"
            )

    @staticmethod
    def view_result():
        try:
            with open('results.txt','r') as file:
                for line in file:
                    print(line.strip())

        except FileNotFoundError:
            print("No Results Found")

    @staticmethod
    def leaderboard():
        results=[]

        try:
            with open("results.txt",'r') as file:
                for line in file:
                    name,score=line.strip().split(",")
                    results.append(
                        (name,int(score))
                    )

            results.sort(
                key=lambda x: x[1],
                reverse=True
            )

            print("\nLeaderBoard")

            for name,score in results:
                print(f"{name}:{score}")

        except FileNotFoundError:
            print("No Results Found")

    @staticmethod
    def load_questions():

        questions=[]
        try:
            with open("question.txt","r") as file:
                for line in file:
                    data=line.strip().split(",")

                    question=Question(
                        int (data[0 ]),
                        data[1],
                        data[2  ]
                    )

                    questions.append(question)

        except FileNotFoundError:
            print("Question file is not found")

        return questions
    
    @staticmethod
    def save_question(question):
        with open("question.txt",'a') as file:
            file.write(
                f"{question.question_id},{question.question_txt},{question.question.answer}\n"
            )