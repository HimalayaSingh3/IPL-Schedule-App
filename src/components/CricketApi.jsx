import React, { useEffect, useState } from "react";
import axios from "axios";

const CricketApi = () => {
  const [iplMatches, setIplMatches] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-cricbuzz-cricket-api.p.rapidapi.com/cricket-schedule-league",
      headers: {
        "x-rapidapi-key": "f5120e5f09msh92004fdd6cbeb2ap12d4e7jsnb9e6023dc776",
        "x-rapidapi-host": "free-cricbuzz-cricket-api.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const schedule = response.data.response?.schedules || [];

        const extractedMatches = [];

        schedule.forEach((day) => {
          day.matchList.forEach((series) => {
            if (
              series.seriesName?.toLowerCase().includes("indian premier league")
            ) {
              series.seriesList.forEach((match) => {
                extractedMatches.push({
                  date: day.date,
                  matchName: match.matchName,
                  venue: match.venue,
                  time: match.startDate,
                  team: match.matchTitle,
                });
              });
            }
          });
        });

        setIplMatches(extractedMatches);
      } catch (error) {
        console.error("Error fetching IPL matches:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6  font-sans bg-gray-800 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        🏏 Upcoming IPL Matches 2025
      </h2>
      {iplMatches.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {iplMatches.map((match, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-gray-600 mb-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full inline-block">
                📅 <span className="font-medium">{match.date}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1 bg-green-100 text-green-800 p-3 rounded-xl ">
                🏏 <span className="font-medium">{match.team}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1 bg-yellow-100 text-yellow-800 p-4 rounded-xl">
                📍 <span className="font-medium">{match.venue}</span>
              </p>
              <p className="text-sm text-gray-600 bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                🕒 <span className="font-medium">{match.time}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No upcoming IPL matches found.
        </p>
      )}
    </div>
  );
};

export default CricketApi;
