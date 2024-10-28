import React, { useEffect, useState } from "react";

type MobileRulesProps = {
    setDisplayRules: any;
    displayRules: boolean;
    gameMode: string;
};

export default function MobileRules({ gameMode, setDisplayRules, displayRules }: MobileRulesProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        return () => setIsVisible(false);
    }, []);

    const closeRules = () => {
        setIsVisible(false);
        setTimeout(() => setDisplayRules(false), 300);
    };

    return (
        <article id="rules--container" className={`absolute bg-white h-full pt-6 w-full grid place-items-center ${isVisible ? "slide-in" : "slide-out"}`}>
            <h2 className="uppercase text-4xl text-DarkText">Rules</h2>
            {gameMode === "classic" ? (<img src="./images/image-rules.svg" className="scale-[80%]" />) : (<img src="./images/image-rules-bonus.svg" className="scale-[80%]" />)}

            <svg onClick={closeRules} xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/>
            </svg>
        </article>
    );
}
