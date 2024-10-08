import React from "react";

const RemoveButton = ({ handleRemoveClick, id }) => {
    return (
        <div>
            <button
                onClick={() => handleRemoveClick(id)}
                className="bg-red-600 w-[110px] font-bold px-3  text-white rounded-md py-1 hover:bg-red-700"
            >
                Remove
            </button>
        </div>
    );
};

export default RemoveButton;
