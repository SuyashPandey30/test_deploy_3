import React, { useEffect, useState } from "react"; // Import React and useState
import Axios from "axios";

function LandingPage() {
  const [data, setData] = useState([]); // Corrected useState syntax

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          return Promise.reject(); // Corrected the rejection
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListName = () => { // Added 'const' to define the function
    return data.map((val) => ( // Corrected function definition and mapping
      <p key={val.id}>{val.name}</p> // Added a 'key' prop for each list item
    ));
  };

  return (
    <div>
      <h1>Landing Page</h1>
      {ListName()}
    </div>
  );
}

export default LandingPage;
