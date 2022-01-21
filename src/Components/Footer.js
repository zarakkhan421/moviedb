import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/moviedb.png";
const FooterSection = styled.footer`
	height: 20rem;
	background-color: lightgray;
	margin: 0 auto;
	display: flex;
	align-items: center;

	.left-section {
		.logo {
			img {
				width: 50px;
				height: 50px;
				object-fit: cover;
			}
		}
	}
`;
const Footer = () => {
	return (
		<FooterSection>
			<div className="left-section">
				<div className="logo">
					<img alt="moviedb logo" src={Logo} />
				</div>
				<div>
					<span>Movie DB App</span>
				</div>
			</div>
		</FooterSection>
	);
};

export default Footer;
