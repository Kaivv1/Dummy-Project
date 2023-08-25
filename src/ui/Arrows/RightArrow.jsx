/* eslint-disable react/prop-types */

const RightArrow = (props) => {
  return (
    <div onClick={props.onClick}>
      <span>&#8594;</span>
    </div>
  );
};

export default RightArrow;
