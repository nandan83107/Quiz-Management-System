import { useState } from "react";
import API from "../api.js";

function AddQuestion() {

    const [question,setQuestion]=useState("");

    const [answer,setAnswer]=useState("");

    const addQuestion = async()=>{

        const response = await fetch(`${API}/add_question`,{

            method:"POST",

            headers:{

                "Content-Type":"application/json"

            },

            body:JSON.stringify({

                question,

                answer

            })

        });

        const data = await response.json();

        alert(data.message);

        setQuestion("");

        setAnswer("");

    }

    return(

        <div className="bg-white w-[700px] rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#4A6FA5] text-center mb-8">

                Add Question

            </h2>

            <input

                type="text"

                placeholder="Enter Question"

                value={question}

                onChange={(e)=>setQuestion(e.target.value)}

                className="w-full border rounded-lg p-3 mb-5"

            />

            <input

                type="text"

                placeholder="Enter Answer"

                value={answer}

                onChange={(e)=>setAnswer(e.target.value)}

                className="w-full border rounded-lg p-3 mb-5"

            />

            <button

                onClick={addQuestion}

                className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-bold"

            >

                Add Question

            </button>

        </div>

    );

}

export default AddQuestion;