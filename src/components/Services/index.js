import React from "react";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServiceIconLink,
	ServicesH2,
	ServiceP,
	ButtonContainer,
	LiveButton,
	CodeButton,
} from "./ServicesElements";

const Services = () => {
	return (
		<>
			<ServicesContainer id="mywork">
				<ServicesH1>Some of my work</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServiceIconLink href="//pokemons-2020.netlify.app/">
							<ServicesIcon src={require("../../images/pikachu.svg").default} />
						</ServiceIconLink>
						<ServicesH2>Pokemon App</ServicesH2>
						<ButtonContainer>
							<ServiceIconLink href="//pokemons-2020.netlify.app/">
								<LiveButton>Live</LiveButton>
							</ServiceIconLink>
							<ServiceIconLink href="//github.com/Ognjen-Radisic/ReactJS-App-with-Pokemon-API">
								<CodeButton>Code</CodeButton>
							</ServiceIconLink>
						</ButtonContainer>
					</ServicesCard>
					<ServicesCard>
						<ServiceIconLink href="//color-generator-2020.netlify.app/">
							<ServicesIcon
								src={require("../../images/color-palette.svg").default}
							/>
						</ServiceIconLink>
						<ServicesH2>Color Shader</ServicesH2>
						<ButtonContainer>
							<ServiceIconLink href="//color-generator-2020.netlify.app/">
								<LiveButton>Live</LiveButton>
							</ServiceIconLink>
							<ServiceIconLink href="//github.com/Ognjen-Radisic/Color-shades-generator-ReactJS/">
								<CodeButton>Code</CodeButton>
							</ServiceIconLink>
						</ButtonContainer>
					</ServicesCard>
					<ServicesCard>
						<ServiceIconLink href="//cocktails-library-2020.netlify.app/">
							<ServicesIcon
								src={require("../../images/cocktail.svg").default}
							/>
						</ServiceIconLink>
						<ServicesH2>Cocktail App</ServicesH2>
						<ButtonContainer>
							<ServiceIconLink href="//cocktails-library-2020.netlify.app/">
								<LiveButton>Live</LiveButton>
							</ServiceIconLink>
							<ServiceIconLink href="//github.com/Ognjen-Radisic/Cocktails-API-ReactJS-router/">
								<CodeButton>Code</CodeButton>
							</ServiceIconLink>
						</ButtonContainer>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};

export default Services;
