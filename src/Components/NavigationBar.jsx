import React from "react";

const Navigationbar = () => {
    return (
        <div className="Navigation">
            <div className="NameHolder">
                <h1>jamaria</h1>
            </div>
            <div className="LinkContainer">
                <a href="#AboutMe">About Me</a>
                <a href="#Projects">Projects</a>
                <a href="#ContactMe" className="Hire">
                    Hire Me
                </a>
            </div>
        </div>
    );
};

export default Navigationbar;
