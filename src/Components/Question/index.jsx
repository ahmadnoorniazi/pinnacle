import React from "react";
import { useForm } from "react-hook-form";
import { Radio, Input } from "antd";

import "./index.css";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

const Question = ({
  questionTitle,
  type,
  name,
  errors,
  options,
  handleChange,
  value,
  ...props
}) => {
  if (type === "text") {
    return (
      <div className="question-main">
        <h5 className="question-title">{questionTitle}</h5>
        <div>
          <input
            value={value}
            onChange={handleChange}
            {...props}
            placeholder="Type here"
          />
          {errors?.firstName?.type === "required" && (
            <p className="error-text">This field is required</p>
          )}
        </div>
      </div>
    );
  }
  if (type === "radio") {
    return (
      <div className="question-main">
        <h5 className="question-title">{questionTitle}</h5>
        <div>
          <Radio.Group onChange={handleChange} value={value}>
            {options.map((item) => (
              <Radio style={radioStyle} value={item.value}>
                {item.label}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      </div>
    );
  }
};

export default Question;
