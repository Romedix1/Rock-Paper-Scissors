import React from "react";
import { Link } from "react-router-dom";

export default function mainScreen() {
    return (
        <section className="pt-12">
            <h1 className="text-4xl text-center text-white font-semibold">Select mode</h1>

            <div className="flex justify-center">
                <div className="w-7/12 mt-12">
                    <Link to="/classic">
                        <button className="w-full py-2 bg-white rounded-lg tracking-[.25em] text-lg duration-300 hover:bg-HeaderOutline">Classic</button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-7/12 mt-12">
                    <Link to="/extended">
                        <button className="w-full py-2 bg-white rounded-lg tracking-[.25em] text-lg duration-300 hover:bg-HeaderOutline">Extended</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
