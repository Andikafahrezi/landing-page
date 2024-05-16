/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button className=" bg-white py-2 px-5 rounded-full mt-4 outline-gray-900 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-green-400 hover:text-white transition-all">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
