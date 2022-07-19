import { useState } from "react";
import API from "../../variables/api";
import CardBlock from "./CardBlock";

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
						<CardBlock
							text="This site will check the weather, in a city that you will type! It's
				still in the development process, so there is a lot of things to do, but
				just you wait!"
						></CardBlock>
						<CardBlock
							text="The main goal is to build the application using React and
								Tailwind! <br />I just wanna do, a site that will show you the
								weather and some cool art, from your favorite game/show. For now
								- I can only show you weather stats, but believe me - I'm
								working on the next step!"
						></CardBlock>
						<CardBlock
							text='The source code of this application is on my GitHub: <br />
								<a className="underline" href="https://github.com/GimpFather">
									https://github.com/GimpFather
								</a>
								<br />'
						></CardBlock>
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

export default CardWrapper;
