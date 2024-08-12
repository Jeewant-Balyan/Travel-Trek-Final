import React, { useEffect, useState } from "react";
import "./Style.css";
import { weatherOfCity } from "../../pages/TourDetails.jsx";

const Demo = () => {
  // usestate ma here city is initial value and setCity is updated value
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState(weatherOfCity);

  useEffect(() => {
    const fetchApi = async () => {
      // note: The api after appid may differ according to your gmail and verification and here I have deleted my appid to push to github as this key is sensitive.
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b24c8c43ed28e5c42d4dd1e05e03db39`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData" style={{ marginBottom: "20px" }}>
          <input
            type="search"
            className="inputFeild"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            placeholder="Enter city name..."
        style={{
          padding: "10px",
          borderRadius: "25px",
          border: "2px solid black",
          width: "80%",
          maxWidth: "300px",}}
          ></input>
        </div>

        {/* using terminatory operator */}

        {!city ? (
          <p className="nodata">No data found. Try after 30 seconds.</p>
        ) : (
          <>
            <div className="info">
              <h2 className="location"><i className="fas fa-street-view"></i>        {search}</h2>
              <h1 className="temp" style={{ fontSize: "1.5rem" }}>{city.temp} °Cel</h1>
              <h3 className="tempmin_max"
              style={{
                height:"100px"
                }}
              >
                Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel
              </h3>
            </div>
          </>
        )}

        <div className="wave -one" ></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      
    </>
  );
};

export default Demo;
