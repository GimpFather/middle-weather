const NavbarIcon = (props) => {
	return (
		<a href={props.link}>
			<div className="navbar__icon">
				{props.icon}
				<span className="navbar__tooltip">{props.text}</span>
			</div>
		</a>
	);
};
export default NavbarIcon;
