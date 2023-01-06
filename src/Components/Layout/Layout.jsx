import React, { Component } from 'react';
import logo from '../../Assets/logo-jiminny.png';
import Messages from '../Messages/Messages';
import Waveforms from '../Waveform/Waveforms';
import { Grid, Jumbotron } from 'react-bootstrap';

class Layout extends Component {
	render() {	

	return (
		<Grid>
			<Jumbotron>
				<img className="logo" src={logo} alt="Jiminy logo"/>
				<h2>Waveform Visualizer  <small>a react/redux implementation</small></h2>
			</Jumbotron>
			
			<Waveforms />
			<Messages />
		</Grid>
		);
	}
}

export default Layout;