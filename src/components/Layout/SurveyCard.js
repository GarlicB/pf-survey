import React from "react";

function SurveyCard(props) {
  const { title, description } = props;

  return (
    <div className="bg-indigo-100 rounded-lg shadow-lg overflow-hidden w-full mx-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 sm:mb-8 p-4 sm:p-6">
      <h2 className="text-lg font-bold mb-2 py-2 text-indigo-600">{title}</h2>
      <p className="text-gray-700 text-base px-4 pb-4">{description}</p>
      <div className="flex justify-center">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Take Survey
        </button>
      </div>
    </div>
  );
}

export default SurveyCard;
