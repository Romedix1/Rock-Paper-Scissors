import React, { useEffect, useState } from "react";
import MobileRules from "./mobileRules";
import { Link } from "react-router-dom";

export default function Classic() {
    const [score, setScore] = useState(0);
    const [displayRules, setDisplayRules] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [enemySelectedOption, setEnemySelectedOption] = useState("");
    const [selectedOptionStatus, setSelectedOptionStatus] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    const [result, setResult] = useState("");

    function increaseScore() {
        setScore(prev => prev + 1);
    }

    function selectOption(option: string) {
        setSelectedOption(option);
        setSelectedOptionStatus(true);
        setAnimationClass("scale-up");

        setTimeout(() => setAnimationClass(""), 500);
    }

    function playAgain() {
        setEnemySelectedOption("")
        setSelectedOption("");
        setSelectedOptionStatus(false);
        setResult("")
    }

    useEffect(() => {
        if (selectedOptionStatus) {
            setTimeout(() => {
                const randomOption = Math.floor(Math.random() * 3) + 1;
                let enemyOption = "";

                switch (randomOption) {
                    case 1:
                        enemyOption = "paper";
                        break;
                    case 2:
                        enemyOption = "scissors";
                        break;
                    case 3:
                        enemyOption = "rock";
                        break;
                    default:
                        break;
                }

                setEnemySelectedOption(enemyOption);
            }, 1500);
        }
    }, [selectedOptionStatus]);

    useEffect(() => {
        if (selectedOption && enemySelectedOption) {
            determineWinner(selectedOption, enemySelectedOption);
        }
    }, [enemySelectedOption]);

    function determineWinner(playerOption: string, enemyOption: string) {
        if (playerOption === enemyOption) {
            setResult("Draw");
        } else if (
            (playerOption === "rock" && enemyOption === "scissors") ||
            (playerOption === "scissors" && enemyOption === "paper") ||
            (playerOption === "paper" && enemyOption === "rock")
        ) {
            setResult("You win");
            increaseScore();
        } else {
            setResult("You lose");
        }
    }

    function generateOptionBox(option: string, interactive: boolean) {
        const handleClick = () => {
            if (interactive) {
                selectOption(option);
            }
        };

        switch (option) {
            case "paper":
                return (
                    <article onClick={() => handleClick()} id="game-board--paper-container" className={`rounded-full px-4 py-3 ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-4 py-3">
                            <img src="images/icon-paper.svg" alt="paper" />
                        </div>
                    </article>
                );
            case "scissors":
                return (
                    <article onClick={() => handleClick()} id="game-board--scissors-container" className={`rounded-full px-4 py-4 ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-4 py-3">
                            <img src="images/icon-scissors.svg" alt="scissors" />
                        </div>
                    </article>
                );
            case "rock":
                return (
                    <article onClick={() => handleClick()} id="game-board--rock-container" className={`rounded-full px-4 py-4 ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-5 py-5">
                            <img src="images/icon-rock.svg" alt="rock" />
                        </div>
                    </article>
                );
            default:
                return null;
        }
    }

    return (
        <section className="grid justify-items-center">
            {!selectedOptionStatus ? (
                <>
                    <div className="border-2 border-HeaderOutline flex py-3 px-4 w-10/12 place-items-center flex justify-between rounded-xl mt-8">
                        <div className="w-5/12">
                            <img src="images/logo.svg" alt="logo" />
                        </div>
                        <div className="bg-white py-2 text-center w-4/12 rounded-lg">
                            <h2 className="text-ScoreText uppercase">Score</h2>
                            <p className="text-3xl text-HeaderOutline">{score}</p>
                        </div>
                    </div>

                    <section id="game-board--container_classic" className="w-10/12 mt-20">
                        <div className="flex justify-between">
                            {generateOptionBox("paper", true)}
                            {generateOptionBox("scissors", true)}
                        </div>

                        <div className="flex justify-center mt-6">
                            {generateOptionBox("rock", true)}
                        </div>
                    </section>
                </>
            ) : (
                <section className="grid justify-items-center w-full">
                    <div className="border-2 border-HeaderOutline flex py-3 px-4 w-10/12 place-items-center flex justify-between rounded-xl mt-8">
                        <div className="w-5/12">
                            <img src="images/logo.svg" alt="logo" />
                        </div>
                        <div className="bg-white py-2 text-center w-4/12 rounded-lg">
                            <h2 className="text-ScoreText uppercase">Score</h2>
                            <p className="text-3xl text-HeaderOutline">{score}</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-12 w-full px-6">
                        {generateOptionBox(selectedOption, false)}
                        {generateOptionBox(enemySelectedOption, false)}
                    </div>

                    <div className="flex justify-between w-full text-white mt-6">
                        <p className="uppercase ml-10 text-lg">You picked</p>
                        <p className="uppercase mr-4 text-lg">The house picked</p>
                    </div>

                    <div className="w-full place-content-center grid">
                        <h3 className="text-6xl uppercase text-white mt-12 text-center">{result}</h3>
                        {result!=="" && <button onClick={() => playAgain()} className="bg-white py-2 uppercase text-xl rounded-xl mt-8">Play again</button>}
                    </div>
                </section>
            )}

            <button className="border-2 border-HeaderOutline text-white uppercase rounded-xl text-2xl px-12 py-2 mt-12" onClick={() => setDisplayRules(true)}>Rules</button>
            <Link to="/">
                <button className="border-2 border-HeaderOutline text-white uppercase rounded-xl text-2xl px-12 py-2 mt-4">Back to home</button>
            </Link>
            {displayRules && <MobileRules setDisplayRules={setDisplayRules} displayRules={displayRules} gameMode="classic" />}
        </section>
    );
}
