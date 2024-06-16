/* eslint-disable react/prop-types */

const Heading = (props) => {
  return (
    <div>
      <h3 className=" text-4xl font-semibold mt-10">
        {props.title1} <span className=" text-brightGreen">{props.title2}</span>
      </h3>
    </div>
  );
};

export default Heading;
