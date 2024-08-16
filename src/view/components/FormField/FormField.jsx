import React from "react";
import style from "./FormField.module.css";

/*

HOW TO USE FORMFIELD COMPONENT

1. Import the FormField component in the file where you want to use it.
2. Give the FormField component a 'label' prop with the text you want to display as the label.
3. Give the FormField component a 'name' prop with the name of the input field.
4. Give the FormField component a 'placeholder' prop with the text you want to display as the placeholder.

Example:

<FormField label="First Name" name="firstName" placeholder="John" />
    
*/

const FormField = ({
  label = "Label",
  name = "Example",
  placeholder = "Placeholder",
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className={style.search}
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
