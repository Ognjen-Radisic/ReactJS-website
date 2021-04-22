import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to="introduction"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						onClick={toggle}>
						Introduction
					</SidebarLink>
					<SidebarLink
						to="mywork"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						onClick={toggle}>
						My Work
					</SidebarLink>
					<SidebarLink
						to="conclusion"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						onClick={toggle}>
						Conclusion
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to="/signin">Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
