import React, { useState, useEffect } from 'react';
import UserDashboard from './UserDashboard';
import Profile  from './Profile';
import FindInvestor from './FindInvestor';
import FindMentor from './FindMentor'; 

const UserDetails = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/userdata", {
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

        const data = await response.json();

        console.log(data);

        if (data.data === "token expired") {
          alert("Session Expired. Please Login Again.");
          window.localStorage.clear();
          window.location.href = "/login";
        } else {
          setUserData(data.data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <UserDashboard userData={userData} />
      <Profile userData={userData}/>
      <FindInvestor userData={userData}/>
      <FindMentor/>
    </>
  );
}

export default UserDetails;