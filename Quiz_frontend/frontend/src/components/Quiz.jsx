import { useEffect, useState } from "react";
import API from "../api.js";

function Quiz() {

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [name, setName] = useState("");
    const [score, setScore] = useState(null);

    useEffect(() => {

        loadQuestions();

    }, []);

    const loadQuestions = async () => {

        const response = await fetch(`${API}/questions`);

        const data = await response.json();

        setQuestions(data);

    };

    const submitQuiz = async () => {

        const response = await fetch(`${API}/submit`, {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name,
                answers

            })

        });

        const data = await response.json();

        setScore(data);

    };

    return (

        <div className="bg-white w-[700px] rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#4A6FA5] mb-6 text-center">

                Take Quiz

            </h2>

            <input

                type="text"

                placeholder="Enter Your Name"

                className="w-full border rounded-lg p-3 mb-8"

                onChange={(e)=>setName(e.target.value)}

            />

            {

                questions.map((question)=>(

                    <div

                        key={question.id}

                        className="mb-6"

                    >

                        <h3 className="font-semibold text-lg mb-2">

                            {question.id}. {question.question}

                        </h3>

                        <input

                            type="text"

                            placeholder="Enter Answer"

                            className="w-full border rounded-lg p-3"

                            onChange={(e)=>

                                setAnswers({

                                    ...answers,

                                    [question.id]:e.target.value

                                })

                            }

                        />

                    </div>

                ))

            }

            <button

                onClick={submitQuiz}

                className="w-full bg-[#4A6FA5] hover:bg-[#385680] text-white rounded-lg p-3 font-bold"

            >

                Submit Quiz

            </button>

            {

                score &&

                <div className="mt-8 text-center">

                    <h2 className="text-3xl font-bold text-green-600">

                        Score : {score.score}/{score.total}

                    </h2>

                </div>

            }

        </div>

    );

}

export default Quiz;