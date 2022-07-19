import DAYS from "./dumy_data/days";
import MONTHS from "./dumy_data/months";

const DateBuilder = (props) => {
	let day = DAYS[props.getDay()];
	let date = props.getDay();
	let month = MONTHS[props.getMonth()];
	let year = props.getFullYear();

	return `${day} ${date} ${month} ${year}`;
};

export default DateBuilder;
