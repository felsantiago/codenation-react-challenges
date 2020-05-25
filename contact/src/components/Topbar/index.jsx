import React from 'react';

import { Container } from './styles';

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";

class Topbar extends React.Component {
	render() {
		return (
			<Container className="topbar" data-testid="topbar">
				<div>
					<a href="/">
						<LogoSvg alt="Logo Instagram" />
					</a>
				</div>
			</Container>
	);
	}
}

export default Topbar;
