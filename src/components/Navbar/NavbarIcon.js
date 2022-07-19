const NavbarIcon = (props) => {
	return (
		<div className="navbar__icon">
			{props.icon}
			<span className="navbar__tooltip">{props.text}</span>
		</div>
	);
};
export default NavbarIcon;
