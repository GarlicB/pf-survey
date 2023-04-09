import axios from "axios";
import dummyData from "./Dummy.json"; // 로컬 더미 데이터를 import 합니다.

const baseURL = "http://localhost:3001/api";

export const getSurvey = async (surveyId) => {
  const response = await axios.get(`${baseURL}/surveys/${surveyId}`);
  return response.data;
};

export const getAllSurveys = async () => {
  try {
    const res = await axios.get(`${baseURL}/surveys`);
    return res.data;
  } catch (error) {
    console.log("Error occurred while fetching data:", error);
    console.log("Trying to load dummy data...");
    // 로컬 더미 데이터를 가져와 surveys 상태를 설정합니다.
    return dummyData.surveys;
  }
};
export const getSurveyById = async (id) => {
  const res = await axios.get(`${baseURL}/surveys/${id}`);
  return res.data;
};

export const createSurvey = async (surveyData) => {
  const res = await axios.post(`${baseURL}/surveys`, surveyData);
  return res.data;
};

export const deleteSurvey = async (id) => {
  const res = await axios.delete(`${baseURL}/surveys/${id}`);
  return res.data;
};

export const submitResponse = async (surveyId, response) => {
  const res = await axios.post(
    `${baseURL}/surveys/${surveyId}/responses`,
    response
  );
  return res.data;
};
