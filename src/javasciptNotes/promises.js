import React, { useState, useEffect } from "react";

const PromiseComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pr = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          name: "Upali",
          lastName: "Khanduri",
        };
        let status = false; // Change this to `false` to trigger rejection

        if (status) {
          resolve(data);
        } else {
          reject(new Error("This is an error"));
        }
      }, 3000);
    });

    pr.then((result) => setData(result)).catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h2>Promises</h2>
      {data ? (
        <p>
          Name: {data.name} {data.lastName}
        </p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PromiseComponent;
