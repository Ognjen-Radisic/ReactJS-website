import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterWrapper,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer id="footer">
			<FooterWrapper>
				{/* <FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Contact me</FooterLinkTitle>
							<FooterLink to="/signin">About me</FooterLink>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact me</FooterLinkTitle>
							<FooterLink to="/signin">About me</FooterLink>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Contact me</FooterLinkTitle>
							<FooterLink to="/signin">About me</FooterLink>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Contact me</FooterLinkTitle>
							<FooterLink to="/signin">About me</FooterLink>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer> */}
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							OgnjenRa
						</SocialLogo>
						<WebsiteRights>
							Gio © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="//www.youtube.com/watch?v=dQw4w9WgXcQ"
								target="_blank"
								aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href="//www.youtube.com/watch?v=dQw4w9WgXcQ"
								target="_blank"
								aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href="//www.youtube.com/watch?v=dQw4w9WgXcQ"
								target="_blank"
								aria-label="YouTube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href="//www.youtube.com/watch?v=dQw4w9WgXcQ"
								target="_blank"
								aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href="//www.youtube.com/watch?v=dQw4w9WgXcQ"
								target="_blank"
								aria-label="Linkedin">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
