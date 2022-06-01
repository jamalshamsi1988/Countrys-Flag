import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [Countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const Countries = await response.json();
    setCountries(Countries);
    console.log(Countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="grid">
        {Countries.map((country) => {
          const { numericCode, name, population, region, capital, flag } =
            country;
          return (
            <article id={numericCode}>
              <div>
                <img src={flag} alt={name} />
                <article className="details">
                  <h3> {name} </h3>
                  <h4>
                    Population: <span>{population}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    capital: <span>{capital}</span>
                  </h4>
                </article>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
