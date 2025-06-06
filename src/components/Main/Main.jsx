import { useContext } from "react";
import "./Main.css";

import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  handleCardClick,
  clothingItems,
  isWeatherDataLoaded,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard
        weatherData={weatherData}
        isWeatherDataLoaded={isWeatherDataLoaded}
      />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {isWeatherDataLoaded
            ? `${
                currentTemperatureUnit === "F"
                  ? weatherData.temp.F
                  : weatherData.temp.C
              } ° ${currentTemperatureUnit}`
            : "Loading..."}{" "}
          / You may want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
