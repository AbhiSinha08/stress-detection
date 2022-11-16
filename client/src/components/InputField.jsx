import { useState } from "react";

function InputField(props) {
    return ( <div className="mx-8 my-4">
        <label htmlFor={props.name}>{props.name}: </label>
        <input type="number" value={props.inputs[props.name]} placeholder={props.name}
        className={`text-indigo-900 py-1 px-2 rounded-md ml-2 ${props.small ? "w-28" : "w-48"}`}
        onChange={(e) => {
            props.setInputs((prev) => (
                {
                    ...prev,
                    [props.name]: Number(e.target.value)
                }
            ))
        }} />
    </div> );
}

export default InputField;