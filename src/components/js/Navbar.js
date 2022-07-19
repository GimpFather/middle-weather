import { GiRing } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";
import { WiCloudy } from "react-icons/wi";
import { FaCriticalRole } from "react-icons/fa";
import { FaDiceD20 } from "react-icons/fa";
import { getSuggestedQuery } from "@testing-library/react";

const Navbar = () => {
	return (
		<div
			className="fixed top-0 left-0 px-6
        w-screen h-16 
        flex flex-row
        bg-gray-900 text-white shadow-lg"
		>
			<NavbarIcon text="LOTR Theme" icon={<GiRing size="48" />}></NavbarIcon>
			<NavbarIcon
				text="Critical Role Theme"
				icon={<FaCriticalRole size="40" />}
			></NavbarIcon>
			<span className="ml-auto"></span>
			{/* <SearchLocation></SearchLocation> */}
			<span className="mr-auto"></span>
			<NavbarIcon
				text="Checkout my Github"
				icon={<VscCode size="48" />}
			></NavbarIcon>
			<NavbarIcon text="Weather API" icon={<WiCloudy size="50" />}></NavbarIcon>
		</div>
	);
};

const NavbarIcon = ({ icon, text = "" }) => (
	<div className="navbar-icon group">
		{icon}
		<span className="navbar-tooltip group-hover:scale-100">{text}</span>
	</div>
);

const SearchLocation = () => {
	return (
		<div className="">
			<input
				// onChange={e => setQuery(e.target.value)}
				// value={query}
				// onKeyPress={search}
				type="text"
				placeholder="Search for your city..."
				className="
                text-gray-900 bg-gray-300 w-auto h-auto text-center text-Libre
                rounded-xl shadow-xl 
                p-3 m-2"
			></input>
		</div>
	);
};

export default Navbar;
