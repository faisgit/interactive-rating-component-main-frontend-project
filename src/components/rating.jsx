import React from "react";
import { Link } from "react-router-dom";
export default function Rating(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-[#252D37] w-80 md:w-96 flex flex-col  px-5 md:px-8 py-5 rounded-2xl">
        <div className="w-10 h-10 bg-[#161e29] flex items-center justify-center rounded-full mb-4 ">
          <svg
            width="17"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-[#161e29]"
          >
            <path
              d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
              fill="#FC7614"
            />
          </svg>
        </div>
        <div>
          <h1 className="font-semibold text-white text-2xl mb-5">
            How did we do ?
          </h1>
          <p className=" text-sm text-[#7C8798] mb-5 ">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className=" flex gap-2 md:gap-4 mb-5">
          <button
            className=" bg-[#161e29] px-5 py-3 font-bold text-[#7C8798] rounded-full hover:bg-[#FB7413] hover:text-white duration-700"
            onClick={() => props.setRating(1)}
          >
            1
          </button>
          <button
            className=" bg-[#161e29] px-5 py-3 font-bold text-[#7C8798] rounded-full hover:bg-[#FB7413] hover:text-white duration-700"
            onClick={() => props.setRating(2)}
          >
            2
          </button>
          <button
            className=" bg-[#161e29] px-5 py-3 font-bold text-[#7C8798] rounded-full hover:bg-[#FB7413] hover:text-white duration-700"
            onClick={() => props.setRating(3)}
          >
            3
          </button>
          <button
            className=" bg-[#161e29] px-5 py-3 font-bold text-[#7C8798] rounded-full hover:bg-[#FB7413] hover:text-white duration-700"
            onClick={() => props.setRating(4)}
          >
            4
          </button>
          <button
            className=" bg-[#161e29] px-5 py-3 font-bold text-[#7C8798] rounded-full hover:bg-[#FB7413] hover:text-white duration-700"
            onClick={() => props.setRating(5)}
          >
            5
          </button>
        </div>
        <div className="flex justify-center">
          <Link
            to={props.rating === null ? "/" : "/review"}
            className="text-[#FB7413] bg-white px-28 md:px-32 py-3 rounded-full font-semibold  hover:bg-[#FB7413] hover:text-white duration-700 "
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
