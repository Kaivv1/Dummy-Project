/* eslint-disable react/prop-types */

const LeftArrow = (props) => {
  return (
    <div onClick={props.onClick}>
      <span>&#8592;</span>
    </div>
  );
};

export default LeftArrow;
