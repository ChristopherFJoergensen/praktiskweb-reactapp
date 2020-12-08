import React from 'react';
import Logo from '../../Img/AIF_Logo.png';
import './Header.css';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
	function dropDown() {
		let container = document.getElementById("container");
		container.classList.toggle("dropdown__container")


		let arrow = document.getElementById("arrow");
		arrow.classList.toggle("rotate")
	}

	return (
		<div className="header__main">
			<Menu>
				<a className="menu-item" href="/">
					Hjem
				</a>
				<a className="menu-item" href="/Bestyrelsen">
					Bestyrelsen
				</a>
				<a className="menu-item" href="/Foraeldregruppen">
					Forældregruppen
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				
				<div className="dropdown">
					<p onClick={dropDown} className="hold">Hold </p>
					<p className="hold " id="arrow"> &#8594;</p>
					<div className="dropdown__container" id="container">
					<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				<a className="menu-item" href="/PraktiskInfo">
					Praktisk Info
				</a>
				</div>
				</div>
				{/*
				<a className="menu-item" href="/U13Drenge">
					U13 Drenge
				</a>
				<a className="menu-item" href="/U15Drenge">
					U15 Drenge
				</a>
				<a className="menu-item" href="/U15Piger">
					U15 Piger
				</a>
				<a className="menu-item" href="/U17Piger">
					U17 Piger
				</a>
				<a className="menu-item" href="/SeniorDamer-S2-S4">
					Senior Damer S2/S4
				</a>
				<a className="menu-item" href="/SeniorHerrer">
					Senior Herrer
				</a> */}
				<a className="menu-item" href="/Kampe-og-placering">
					Kampe og placering
				</a>
				<a className="menu-item" href="/Opslagstavlen">
					Opslagstavlen
				</a>
				<a className="menu-item" href="/Lokalhistorien-om-haandbold">
					Lokalhistorien om håndbold
				</a>
				<a className="menu-item" href="/Webmaster">
					Webmaster
				</a>
			</Menu>
			<section className="header__logo">
				<img src={Logo} alt="Logo af AIF Håndbold" />
			</section>
		</div>
	);
};

export default Header;
