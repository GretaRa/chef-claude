import chefClaudeLogo from "/src/assets/chef-claude-icon.png";

export default function Header() {
	return (
		<header id="header">
			<div id="logo">
				<img id="logo-img" src={chefClaudeLogo} />
				<span id="logo-text">Chef Claude</span>
			</div>
		</header>
	);
}
