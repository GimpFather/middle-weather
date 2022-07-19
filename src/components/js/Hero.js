import React, { useState } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const api = {
	key: "a831ed50bd45dd33921bc296f9ab759d",
	base: "https://api.openweathermap.org/data/2.5/",
};

const dateBuilder = (d) => {
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let day = days[d.getDay()];
	let date = d.getDay();
	let month = months[d.getMonth()];
	let year = d.getFullYear();

	return `${day} ${date} ${month} ${year}`;
};

const Hero = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (evt) => {
		if (evt.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
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
			<MainCard></MainCard>
		</div>
	);
};

const MainCard = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});

	const search = (evt) => {
		if (evt.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then((result) => result.json())
				.then((result) => {
					setWeather(result);
					setQuery("");
					console.log(result);
				});
		}
	};
	return (
		<div
			className="
        bg-gray-200 opacity-80
        w-2/5
        m-8 
        shadow-2xl border-2 rounded-xl border-gray-900
        text-center text-gray-900 "
		>
			<div className="m-4 flex flex-col justify-center">
				{typeof weather.main === "undefined" ? (
					<div className="opacity-100 font-Libre">
						<input
							onChange={(e) => setQuery(e.target.value)}
							value={query}
							onKeyPress={search}
							type="text"
							placeholder="Type your city..."
							className="card-block text-2xl"
						></input>
						<div>
							<p className="card-block font-Libre">
								This site will check the weather, in a city that you will type!
								It's still in the development process, so there is a lot of
								things to do, but just you wait!{" "}
							</p>
						</div>
						<div>
							<p className="card-block font-Libre">
								The main goal is to build the application using React and
								Tailwind! <br />I just wanna do, a site that will show you the
								weather and some cool art, from your favorite game/show. For now
								- I can only show you weather stats, but believe me - I'm
								working on the next step!
							</p>
						</div>
						<div>
							<p className="card-block font-Libre">
								The source code of this application is on my GitHub: <br />
								<a className="underline" href="https://github.com/GimpFather">
									https://github.com/GimpFather
								</a>
								<br />
							</p>
						</div>
					</div>
				) : (
					""
				)}
				{typeof weather.main != "undefined" ? (
					<div className="grid justify-items-center">
						<p className="card-block text-3xl">
							{weather.name}, {weather.sys.country}
						</p>
						<div className="flex flex-row justify-items-stretch">
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

const ResetButton = ({ icon }) => {
	return (
		<div>
			<div className="hero-icon group">{icon}</div>
		</div>
	);
};

export default Hero;
