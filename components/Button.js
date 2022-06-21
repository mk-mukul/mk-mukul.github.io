import React from "react";

const Button = ({ name }) => {
    return (
        <>
            <div className=" bg-textSecondary">
                <div className=" cursor-pointer border-[1px] bg-bgPrimary py-3 px-5 border-textSecondary text-textSecondary font-fira rounded text-sm hover:opacity-95 transition-all">
                    {name}
                </div>
            </div>
        </>
    );
};

export default Button;
