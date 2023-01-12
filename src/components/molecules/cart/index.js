import React from "react";
import PropTypes from "prop-types";
import { MdShoppingCart } from "react-icons/md";

const Cart = ({ count = 0 }) => {
  return (
    <div className="positionRelative">
      <p className="poistionAbsolute badgePosition">
        <span className="numberCircle">{count}</span>
      </p>
      <MdShoppingCart size={"2em"} />
    </div>
  );
};

Cart.propTypes = {
  count: PropTypes.number,
};

export default Cart;
