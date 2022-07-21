import { GiRing } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";
import { WiCloudy } from "react-icons/wi";
import { FaCriticalRole } from "react-icons/fa";

import LINKS from "../../../variables/links";
import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
	return (
		<div className="navbar__wrapper">
			<NavbarIcon
				text="LOTR Theme"
				icon={<GiRing size="48" />}
				link={LINKS.CRINGE_LINK_LOTR}
			></NavbarIcon>
			<NavbarIcon
				text="Critical Role Theme"
				icon={<FaCriticalRole size="40" />}
				link={LINKS.MIDDLEWEATHER}
			></NavbarIcon>
			<NavbarIcon
				text="Checkout my Github"
				icon={<VscCode size="48" />}
				link={LINKS.MY_GITHUB}
			></NavbarIcon>
			<NavbarIcon
				text="Weather API"
				icon={<WiCloudy size="50" />}
				link={LINKS.API}
			></NavbarIcon>
		</div>
	);
};

export default Navbar;
