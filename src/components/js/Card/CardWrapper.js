import { useState } from "react";
import API from "../../../variables/api";
import CardBlock from "./CardBlock";

import MAIN_DESC from "../../../variables/desc-data";

const CardWrapper = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (evt) => {
		if (evt.key === "Enter") {
			fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
				.then((result) => result.json())
				.then((result) => {
					setWeather(result);
					setQuery("");
					console.log(result);
				});
		}
	};
	return (
		<div className="card-wrapper">
			<div className="card-wrapper__column">
				{typeof weather.main === "undefined" ? (
					<div>
						<input
							onChange={(e) => setQuery(e.target.value)}
							value={query}
							onKeyPress={search}
							type="text"
							placeholder="Type your city..."
							className="card-block card-block__input-text"
						></input>
						<CardBlock text={MAIN_DESC.sectionOne}></CardBlock>
						<CardBlock text={MAIN_DESC.sectionTwo}></CardBlock>
						<CardBlock text={MAIN_DESC.sectionThree}></CardBlock>
					</div>
				) : (
					""
				)}
				{typeof weather.main != "undefined" ? (
					<div className="card-block__grid-wrapper">
						<p className="card-block text-3xl">
							{weather.name}, {weather.sys.country}
						</p>
						<div className="card-block__grid-two">
							<p className="card-block">
								Today is very "{weather.weather[0].main}y" day.
							</p>
							<p className="card-block">
								You can expcept around {Math.round(weather.main.temp)}&#176;C.
							</p>
						</div>
						<p className="card-block">
							You should take some heavy armor - around 18AC. Shield is also a
							good idea, against windy snowflakes.
						</p>
						<p className="card-block">The author of the art is: Heather Hood</p>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default CardWrapper;
