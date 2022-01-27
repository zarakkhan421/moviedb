import React from "react";
import styled from "styled-components";
const FooterSection = styled.footer`
	height: 20rem;
	background-color: ${({ theme }) => theme.colors.primary};
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	color: white;
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
					<h1>MDB</h1>
				</div>
				<div>
					<span>Movie DB React App that consumes TMDP Api</span>
				</div>
			</div>
		</FooterSection>
	);
};

export default Footer;
