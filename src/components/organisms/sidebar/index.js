import React from "react";
import Checkbox from "../../molecules/checkbox";
import PropTypes from "prop-types";

const filterData = [
  {
    type: "Color",
    data: [
      { itemText: "Red", value: "red" },
      { itemText: "Blue", value: "blue" },
      { itemText: "Green", value: "breen" },
    ],
  },
  {
    type: "Gender",
    data: [
      { itemText: "Male", value: "male" },
      { itemText: "Female", value: "female" },
    ],
  },
  {
    type: "Price",
    data: [
      { itemText: "0-Rs.250", value: "0-250" },
      { itemText: "Rs.251-450", value: "251-450" },
      { itemText: "above Rs.450", value: ">450" },
    ],
  },
  {
    type: "Type",
    data: [
      { itemText: "Polo", value: "polo" },
      { itemText: "Hoodie", value: "hoodie" },
      { itemText: "Basic", value: "basic" },
    ],
  },
];
const FilterOptions = ({ options }) => {
  return (
    <div className="flexColumn flexStartAlign">
      {options.map((option) => (
        <Checkbox
          classes={""}
          key={option.value}
          name={option.itemText}
          label={option.itemText}
          id={option.value}
          value={false}
          handleChange={() => {}}
        />
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <div className="sidebar filterContainer">
        <div className="filters">
          {filterData.map((filter) => {
            return (
              <div key={filter.type} className="filterSection">
                <p className="filterLabel boldText">{filter.type}</p>
                <FilterOptions options={filter.data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

FilterOptions.propTypes = {
  options: PropTypes.array,
};
export default Sidebar;
