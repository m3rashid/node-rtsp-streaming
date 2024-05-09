import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

const App = () => {
	const videoRef = useRef();

	useEffect(() => {
		const hls = new Hls({ debug: true, });
		if (Hls.isSupported()) {
			hls.log = true;
			hls.loadSource = '/stream/camera11/index.m3u8';
			hls.attachMedia(videoRef.current);
			hls.on(Hls.Events.ERROR, (err) => {
				console.log(err);
			});
		} else {
			console.log('load');
		}
	}, []);

	return (
		<video
			controls
			autoPlay
			width={640}
			height={480}
			ref={videoRef}
		/>
	);
};

export default App;
