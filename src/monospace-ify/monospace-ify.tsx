import React from "react";

const monospaceify = (props: { value: string }) => {
    let index = 0;
    return (
        <div className="monospaceified">
            {props.value.split("").map((letter) => {
                index++;
                return (
                    <p key={index} className="letter">
                        {letter}
                    </p>
                );
            })}
        </div>
    );
};

export default monospaceify;
