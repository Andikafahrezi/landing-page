/* eslint-disable react/prop-types */

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <p className=" text-black lg:text-xs hp:text-base  mb-2">{props.para}</p>
      </div>

      <div className=" flex flex-row justify-center">
        <img className=" rounded-2xl w-2/4" src={props.img} alt="img" />
      </div>
      <h4 className=" text-black font-bold text-center mt-3">{props.position}</h4>
    </div>
  );
};

export default ReviewCard;
