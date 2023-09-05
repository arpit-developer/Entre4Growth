import React, { useEffect, useState } from "react";
import InvestorDashboardTable from './InvestorDashboardTable';
import FindStartups from "./FindStartups";
import "./InvestorDashboard.css";

export const InvestorDashboard = () => {
  const [pitchBusinessData, setPitchBusinessData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/investordata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const rawData = await response.json(); // Parse the response only once

        console.log(rawData);

        if (rawData.data === "token expired") {
          alert("Session Expired. Please Login Again.");
          window.localStorage.clear();
          window.location.href = "/investor-login";
        } else {
          setPitchBusinessData(rawData.data); // Store the parsed data in state
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);
  return (
      <>
        <InvestorDashboardTable pitchBusinessData={pitchBusinessData} />
        <FindStartups pitchBusinessData={pitchBusinessData} />
      </>
  );
};
