import React, { Component } from 'react';
import logo from '../../Assets/logo-jiminny.png';
import Messages from '../Messages/Messages';
import Waveforms from '../Waveform/Waveforms';
import { Grid, Jumbotron } from 'react-bootstrap';
import './layout.css';

class Layout extends Component {
	render() {	

	return (
		<Grid>
			<Jumbotron>
				<img className="logo" src={logo} alt=""/>
				<h2>Waveform Visualizer</h2>
			</Jumbotron>

			
			<Waveforms />
			<Messages />

		</Grid>
		);
	}
}

export default Layout;