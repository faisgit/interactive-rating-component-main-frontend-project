import React from "react";
import Thankyou from "./thankyou";

export default function Review(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#252D37] w-80 md:w-96 flex flex-col items-center px-8 py-10 rounded-3xl ">
        <div className="mb-5">
          <Thankyou />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="bg-[#161e29] px-5 text-[#FB7413] rounded-full py-1 mb-5">
            You selected {props.rating} out of 5
          </p>
          <h4 className="text-2xl font-semibold text-white mb-5">Thank You!</h4>
          <p className="text-center text-sm text-[#7C8798] ">
            We appreciate you taking the time to give rating. If you ever need
            more support, don't hesitate to get in touch !
          </p>
        </div>
      </div>
    </div>
  );
}
