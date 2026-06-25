class Question:

    def __init__(self,question_id,question_text,answer):

        self.question_id=question_id
        self.question_text=question_text
        self.answer=answer

    def display_question(self):

        print(f"Question ID: {self.question_id}")
        print(f"Question: {self.question_text}")