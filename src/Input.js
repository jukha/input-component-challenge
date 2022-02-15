import React from "react";
import "./Input.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLock } from "react-icons/bi";

const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}) => {
  return (
    <div className="row">
      <p className="text">
        &#60;Input
        {helperText && ` helperText = "${helperText}"`}
        {value && ` value= "${value}"`}
        {size && ` size= "${size}"`}
        {error && " error"}
        {disabled && " disabled"}
        {startIcon && " startIcon"}
        {fullWidth && " fullWidth"}
        {multiline && " multiline"}
        {row && ` row= "${row}"`}
        /&#62;
      </p>
      <label
        className={`label 
        ${error ? "red" : ""}
        
      `}
        htmlFor="input"
      >
        Label
      </label>
      <div
        tabIndex={0}
        className={`input
        ${error && "red"}
        ${disabled && "disabled"}
        ${size && `${size}`}
        ${fullWidth && "full-width"}
        `}
      >
        {startIcon && <BsFillTelephoneFill className="icon" />}
        {!multiline && !row && (
          <input placeholder="Placeholder" value={value} disabled={disabled} />
        )}
        {multiline && row && (
          <textarea placeholder="Placeholder" rows={row}></textarea>
        )}

        {endIcon && <BiLock className="icon" />}
      </div>

      <span
        className={`span
              ${error && "red"}
              `}
      >
        {helperText}
      </span>
    </div>
  );
};

export default Input;
