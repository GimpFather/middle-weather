import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import API from "../../variables/api";

import CardWrapper from "../Card/CardWrapper";

const Hero = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (event) => {
		if (event.key === "Enter") {
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
		// <div className={(typeof weather.main != 'undefined')
		// ? ((weather.main.temp > 16)
		//     ? 'hero-background_cr--night__sun'
		//     : 'hero-background_cr--night__snow')
		// : 'hero-background_cr--theme'}>
		<div className="hero-background_cr--night__snow">
			<CardWrapper></CardWrapper>
		</div>
	);
};

const ResetButton = ({ icon }) => {
	return (
		<div>
			<div className="hero-icon group">{icon}</div>
		</div>
	);
};

export default Hero;
