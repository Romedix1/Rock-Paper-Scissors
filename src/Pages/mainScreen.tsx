import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainScreen() {
    const navigate = useNavigate();

    return (
        <section className="pt-12 w-[320px] sm:w-[640px]">
            <h1 className="text-4xl text-center text-white font-semibold lg:text-6xl">Select mode</h1>

        <div className="sm:flex justify-center gap-12">
            <div className="flex justify-center">
                <div className="w-7/12 mt-12 sm:w-full">
                    <button onClick={() => navigate("/game", { state: { gameMode: "classic" } })} className="w-full py-2 sm:px-12 bg-white rounded-lg tracking-[.25em] text-lg duration-300 hover:bg-HeaderOutline lg:text-2xl">
                        Classic
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-7/12 mt-12 sm:w-full">
                    <button onClick={() => navigate("/game", { state: { gameMode: "extended" } })} className="w-full py-2 sm:px-12 bg-white rounded-lg tracking-[.25em] text-lg duration-300 hover:bg-HeaderOutline lg:text-2xl">
                        Extended
                    </button>
                </div>
            </div>
        </div>

        </section>
    );
}
