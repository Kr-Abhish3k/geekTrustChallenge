import React from "react";
import PropTypes from "prop-types";
const Checkbox = (props) => {
  const { name, id, value, handleChange, label } = props;
  return (
    <div className="checkboxWrapper">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={value}
        onChange={handleChange}
      />
      <label className="boldText" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.bool,
  label: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Checkbox;
