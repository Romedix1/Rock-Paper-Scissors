import React, { useEffect, useState } from "react";
import Rules from "./rules";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Game() {
    const [score, setScore] = useState(0);
    const [displayRules, setDisplayRules] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [enemySelectedOption, setEnemySelectedOption] = useState("");
    const [selectedOptionStatus, setSelectedOptionStatus] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    const [result, setResult] = useState("");
    const location = useLocation();
    const { gameMode } = location.state || { gameMode: "classic" };
    console.log(gameMode)
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
                let enemyOption = "";

                if(gameMode === "classic") {
                    const randomOption = Math.floor(Math.random() * 3) + 1;

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
                } else if(gameMode === "extended") {
                    const randomOption = Math.floor(Math.random() * 5) + 1;

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
                        case 4:
                            enemyOption = "spock"
                            break;
                        case 5:
                            enemyOption = "lizard"
                            break;
                        default:
                            break;
                    }
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
        if(gameMode === "classic") {
            if (playerOption === enemyOption) {
                setResult("Draw");
            } else if(
                (playerOption === "rock" && enemyOption === "scissors") ||
                (playerOption === "scissors" && enemyOption === "paper") ||
                (playerOption === "paper" && enemyOption === "rock")
            ) {
                setResult("You win");
                increaseScore();
            } else {
                setResult("You lose");
            }  
        } else if(gameMode === "extended") {
            if (playerOption === enemyOption) {
                setResult("Draw");
            } else if (
                (playerOption === "rock" && (enemyOption === "scissors" || enemyOption === "lizard")) ||
                (playerOption === "scissors" && (enemyOption === "paper" || enemyOption === "lizard")) ||
                (playerOption === "paper" && (enemyOption === "rock" || enemyOption === "spock")) ||
                (playerOption === "lizard" && (enemyOption === "spock" || enemyOption === "paper")) ||
                (playerOption === "spock" && (enemyOption === "scissors" || enemyOption === "rock"))
            ) {
                setResult("You win");
                increaseScore();
            } else {
                setResult("You lose");
            }  
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
                    <article onClick={() => handleClick()} id="game-board--paper-container" className={`rounded-full px-[15px] py-[16px] lg:px-[25px] lg:py-[25px] cursor-pointer ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-[15px] py-[10px] lg:px-[27px] lg:py-[20px]">
                            <img src="images/icon-paper.svg" alt="paper" className="w-[45px] lg:w-[60px]"/>
                        </div>
                    </article>
                );
            case "scissors":
                return (
                    <article onClick={() => handleClick()} id="game-board--scissors-container" className={`rounded-full px-[15px] py-[16px] lg:px-[25px] lg:py-[25px] cursor-pointer ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-[15px] py-[10px] lg:px-[30px] lg:py-[23px]">
                            <img src="images/icon-scissors.svg" alt="paper" className="w-[45px] lg:w-[60px]"/>
                        </div>
                    </article>
                );
            case "rock":
                return (
                    <article onClick={() => handleClick()} id="game-board--rock-container" className={`rounded-full px-[15px] py-[16px] lg:px-[25px] lg:py-[25px] cursor-pointer ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-[15px] py-[15px] lg:px-[30px] lg:py-[30px]">
                            <img src="images/icon-rock.svg" alt="paper" className="w-[45px] lg:w-[60px]"/>
                        </div>
                    </article>
                );
            case "spock":
                return (
                    <article onClick={() => handleClick()} id="game-board--spock-container" className={`rounded-full px-[15px] py-[16px] lg:px-[25px] lg:py-[25px] cursor-pointer ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-[15px] py-[10px lg:px-[30px] lg:py-[20px]">
                            <img src="images/icon-spock.svg" alt="paper" className="w-[40px] lg:w-[60px]"/>
                        </div>
                    </article>
                );
            case "lizard":
                return (
                    <article onClick={() => handleClick()} id="game-board--lizard-container" className={`rounded-full px-[15px] py-[16px] lg:px-[25px] lg:py-[25px] cursor-pointer ${animationClass}`}>
                        <div className="game-board--inner-container bg-white rounded-full px-[15px] py-[17px] lg:px-[30px] lg:py-[30px]">
                            <img src="images/icon-lizard.svg" alt="paper" className="w-[45px] lg:w-[60px]"/>
                        </div>
                    </article>
                );
            default:
                return null;
        }
    }

    function generateBoard() {
        if(gameMode === "classic") {
            return (
                <>
                    <section id={`game-board--container_classic`} className="w-10/12 mt-20 sm:mt-32 sm:w-[310px] lg:w-[500px] lg:mt-24 lg:h-[400px]">
                        <div className="flex justify-between lg:relative lg:-top-8">
                            {generateOptionBox("paper", true)}
                            {generateOptionBox("scissors", true)}
                        </div>

                        <div className="flex justify-center mt-6 sm:mt-16 lg:mt-24">
                            {generateOptionBox("rock", true)}
                        </div>
                    </section>
                </>
            )
        } else if(gameMode==="extended") {
            return (
                <>
                    <section id={`game-board--container_extended`} className="w-10/12 mt-20 sm:mt-6 sm:w-[310px] lg:w-[450px] lg:mt-16 lg:h-[430px]">
                        <div className="flex justify-center relative top-12 sm:top-6 lg:-top-10">
                            {generateOptionBox("scissors", true)}
                        </div>

                        <div className="flex justify-between items-center mt-6 w-[300px] relative -left-4 sm:w-[350px] lg:w-[540px] lg:mt-0 lg:-top-16 lg:-left-10">
                            {generateOptionBox("spock", true)}
                            {generateOptionBox("paper", true)}
                        </div>

                        <div className="flex justify-between items-center mt-6 sm:relative sm:top-4 lg:-top-8">
                            {generateOptionBox("lizard", true)}
                            {generateOptionBox("rock", true)}
                        </div>
                    </section>
                </>
            )
        }
    }

    return (
        <section className="grid justify-items-center w-[320px] sm:w-[640px] lg:w-[800px]">
            {!selectedOptionStatus ? (
                <>
                    <div className="border-2 border-HeaderOutline flex py-3 px-4 w-10/12 place-items-center flex justify-between rounded-xl mt-8">
                        <div className="w-5/12">
                            <img src={gameMode==="classic" ? "images/logo.svg" : "images/logo-bonus.svg"} className="sm:w-6/12 lg:w-6/12" alt="logo" />
                        </div>
                        <div className="bg-white text-center w-4/12 rounded-lg h-full place-items-center grid">
                            <div>
                                <h2 className="text-ScoreText uppercase lg:text-3xl">Score</h2>
                                <p className="text-3xl text-HeaderOutline">{score}</p>
                            </div>
                        </div>
                    </div>
                    {generateBoard()}
                </>
            ) : (
                <section className="grid justify-items-center w-[320px] sm:w-[640px]">
                    <div className="border-2 border-HeaderOutline flex py-3 px-4 w-10/12 place-items-center flex justify-between rounded-xl mt-8">
                        <div className="w-5/12">
                            <img src={gameMode==="classic" ? "images/logo.svg" : "images/logo-bonus.svg"} alt="logo" className="sm:w-6/12" />
                        </div>
                        <div className="bg-white py-2 text-center w-4/12 rounded-lg">
                            <h2 className="text-ScoreText uppercase lg:text-3xl">Score</h2>
                            <p className="text-3xl text-HeaderOutline">{score}</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-12 w-full px-6 sm:w-7/12 sm:gap-24 lg:w-9/12">
                        {generateOptionBox(selectedOption, false)}
                        {generateOptionBox(enemySelectedOption, false)}
                    </div>

                    <div className="flex justify-between w-full text-white mt-6 sm:justify-center sm:gap-24 lg:gap-36">
                        <p className="uppercase ml-10 text-lg sm:text-xl">You picked</p>
                        <p className="uppercase mr-4 text-lg sm:text-xl">The house picked</p>
                    </div>

                    <div className="w-full place-content-center grid">
                        <h3 className="text-6xl uppercase text-white mt-12 text-center">{result}</h3>
                        {result!=="" && <button onClick={() => playAgain()} className="bg-white py-2 uppercase text-xl rounded-xl mt-8 duration-300 hover:bg-HeaderOutline lg:text-2xl">Play again</button>}
                    </div>
                </section>
            )}

            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:flex-row-reverse sm:mt-36 sm:gap-24 lg:mt-24 lg:gap-96 xl:mt-36">
                <button className="border-2 border-HeaderOutline text-white uppercase rounded-xl text-2xl px-12 py-2 mt-12 sm:mt-0 hover:text-ScoreText hover:bg-white duration-500" onClick={() => setDisplayRules(true)}>Rules</button>
                <Link to="/">
                    <button className="border-2 border-HeaderOutline text-white uppercase rounded-xl text-2xl px-12 py-2 mt-4 sm:mt-0 hover:text-ScoreText hover:bg-white duration-500">Back to home</button>
                </Link>
            </div>
            {displayRules && <Rules setDisplayRules={setDisplayRules} displayRules={displayRules} gameMode={gameMode} />}
        </section>
    );
}
