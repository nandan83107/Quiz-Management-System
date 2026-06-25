import { useEffect, useState } from "react";
import API from "../api.js";

function ViewQuestions() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        loadQuestions();

    }, []);

    const loadQuestions = async () => {

        const response = await fetch(`${API}/questions`);

        const data = await response.json();

        setQuestions(data);

    };

    return (

        <div className="bg-white w-[700px] rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#4A6FA5] text-center mb-8">

                📚 All Questions

            </h2>

            {

                questions.length === 0 ?

                (

                    <p className="text-center">

                        No Questions Found

                    </p>

                )

                :

                questions.map((question)=>(

                    <div

                        key={question.id}

                        className="border rounded-lg p-4 mb-4"

                    >

                        <h3 className="font-semibold text-lg">

                            {question.id}. {question.question}

                        </h3>

                    </div>

                ))

            }

        </div>

    );

}

export default ViewQuestions;