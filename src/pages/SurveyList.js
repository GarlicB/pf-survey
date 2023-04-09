import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../helpers/AuthProvider";
import { getAllSurveys } from "../helpers/API";
import SurveyCard from "../components/Layout/SurveyCard";

function SurveyList() {
  const { currentUser } = useContext(AuthContext);
  const [surveys, setSurveys] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSurveys() {
      try {
        const surveyData = await getAllSurveys(currentUser);
        setSurveys(surveyData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchSurveys();
  }, [currentUser]);

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-medium m-5 text-gray-700">Survey List</h2>
        {error && <div className="text-red-600">{error}</div>}
        <div className="flex flex-wrap justify-center">
          {surveys.map((survey, i) => (
            <SurveyCard
              key={`s+${i}`}
              title={survey.title}
              description={survey.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SurveyList;
