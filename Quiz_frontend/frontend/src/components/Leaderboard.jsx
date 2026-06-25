import { useEffect, useState } from "react";
import API from "../api.js";

function Leaderboard() {

    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {

        loadLeaderboard();

    }, []);

    const loadLeaderboard = async () => {

        const response = await fetch(`${API}/leaderboard`);

        const data = await response.json();

        setLeaderboard(data);

    };

    return (

        <div className="bg-white w-[700px] rounded-xl shadow-lg p-8">

            <h2 className="text-3xl font-bold text-[#4A6FA5] text-center mb-8">

                🏆 Leaderboard

            </h2>

            {

                leaderboard.length === 0 ?

                (

                    <p className="text-center">

                        No Results Found

                    </p>

                )

                :

                leaderboard.map((player,index)=>(

                    <div

                        key={index}

                        className="flex justify-between border-b py-3"

                    >

                        <span>

                            {index+1}. {player.name}

                        </span>

                        <span>

                            {player.score}

                        </span>

                    </div>

                ))

            }

        </div>

    );

}

export default Leaderboard;