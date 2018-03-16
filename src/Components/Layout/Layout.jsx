import React, { Component } from 'react';
import logo from '../../Assets/logo-jiminny.png';
import { Grid, Jumbotron } from 'react-bootstrap';
import waveformData from '../../Store/dummy';
import Waveform from '../Waveform/Waveform';
import Messages from '../Messages/Messages';
import './layout.css';

class Layout extends Component {

	convertSecondsToPercents = (seconds, totalLength) => {
	// Formula for converting seconds into percentage from waveform length
	// seconds / length * 100
	return seconds / totalLength * 100;
	}

	showIndicator = (e) => {
		const rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;

		console.log(x);
	}

	render() {    
	const talkTimesLength = waveformData.talkTimes.user.length;
	const totalLength = waveformData.talkTimes.user[talkTimesLength - 1][1];

	return (
		<Grid>
			<Jumbotron>
				<img className="logo" src={logo} alt=""/>
				<h2>Waveform Visualizer</h2>
			</Jumbotron>

			<p>User</p>
			<div className="audio-holder" onMouseMove={this.showIndicator}>
				<div className="audio-mask"></div>
				{waveformData.talkTimes.user.map((talkTime, index) => (
					<Waveform
						key={index} 
						start={this.convertSecondsToPercents(talkTime[0], totalLength)} 
						end={this.convertSecondsToPercents(talkTime[1], totalLength)} 
						background={"#f23e57"} 
					/>
				))}
			</div>
			
			<p>Customer</p>
			<div className="audio-holder" onMouseMove={this.showIndicator}>
				{waveformData.talkTimes.customer.map((talkTime, index) => (
					<Waveform 
						key={index}
						start={this.convertSecondsToPercents(talkTime[0], totalLength)} 
						end={this.convertSecondsToPercents(talkTime[1], totalLength)} 
						background={"#02B875"}
					/>
				))}
			</div>

			<Messages />

		</Grid>
		);
	}
}

export default Layout;