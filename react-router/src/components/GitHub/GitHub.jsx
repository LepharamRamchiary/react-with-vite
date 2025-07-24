import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {

    // one way to fetch data using useEffect
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/LepharamRamchiary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("GitHub Followers:", data.followers);
  //         setData(data);
  //       });
  //   }, []);


    // another way to fetch data using useLoaderData
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl flex flex-col items-center gap-3">
      GitHub Fllowers: {data?.followers}
      <img src={data?.avatar_url} alt="Git picture" width={300} />
      <p>Pubilc repo: {data?.public_repos}</p>
    </div>
  );
}

export default GitHub;
