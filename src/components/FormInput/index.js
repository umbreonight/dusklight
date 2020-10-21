import React from "react";

const FormInput = (props) => {

  let {className="", type, name, id, value, onChange, placeholder, required, label, helper, link, target} = props;

  return (
    <div className={"input " + className}>
      <input
        type={type}
        name={name}
        id={id}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required ? true : false}
      ></input>
      {!!label && <label htmlFor={id}>{label}</label>}
      {!!helper && <span className="helper">{helper}</span>}
      {!!link && <span className="helper"><a href={target} target="_blank">{link}</a></span>}
    </div>
  );
};

export default FormInput;
