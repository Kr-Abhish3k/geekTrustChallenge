import React from "react";
import PropTypes from "prop-types";
const Input = (props) => {
  const { name, id, value, onChange, ...restProps } = props;
  return (
    <input
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      {...restProps}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;
