import axios from 'axios';
import { useEffect } from 'react';
import JSMpeg from '@cycjimmy/jsmpeg-player';

const App = () => {
	useEffect(() => {
		let canvas = document.getElementById('video-canvas');
		let url = 'ws://localhost:4001';
		new JSMpeg.Player(url, { canvas: canvas });
	}, []);

	const rtspurl = 'rtsp://admin:Dsspl@123@103.97.243.100:554/1/1'; //enter the rtsp url here

	const httpRequest = (url) => {
		axios.get(`http://127.0.0.1:4000/stream?rtsp=${url}`);
	};

	const startRTSPFeed = () => {
		httpRequest(rtspurl);
	};

	const stopRTSPFeed = () => {
		httpRequest('stop');
	};

	return (
		<div>
			<div>
				<canvas id='video-canvas' height={500} width={800}></canvas>
			</div>
			<div>
				<button onClick={startRTSPFeed}>Start RTSP Feed</button>
				<button onClick={stopRTSPFeed}> Stop RTSP Feed</button>
			</div>
		</div>
	);
};

export default App;
