import random
class Quiz:
    def __init__(self):
        self.questions=[]

    def add_question(self,question):
        self.questions.append(question)

    def view_questions(self):

        if len(self.questions)==0:
            print("No Question Found")
            return

        for question in self.questions:

            print("-"*30)

            print(
                f"ID : {question.question_id}"
            )
            print(
                f"Question :{question.question_text}"
            )

            print(
                f"Answer : {question.answer}"
            )

    def start_quiz(self,student):

        random_questions=random.sample(
            self.questions,
            len(self.questions)
        )

        for question in random_questions:
            print("\n"+question.question_text)

            user_answer=input("Your Answer: ")

            if user_answer.lower() ==question.answer.lower():

                print("Correct")
                student.score+=1

            else:
                print("wrong")

        print("\nFinal Score: ",student.score)

    def question_exists(self,question_id):
        for question in self.questions:

            if question.question_id==question_id:
                return True
            
        return False
    
    def total_question(self):
        return len(self.questions)