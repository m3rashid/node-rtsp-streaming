const cors = require('cors');
const express = require('express');
const rtspStream = require('node-rtsp-stream');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

stream = null;

app.get('/getStream', (req, res) => {
	const rstpUrl = req.query.rstpUrl;
	if (stream) {
		stream.stop();
	}
	stream = new rtspStream({
		streamUrl: rstpUrl,
		wsPort: 8000,
	});
	res.send('Stream started');

	// stream = new rtspStream({
	//     streamUrl: rstpUrl,
	//     wsPort: 8000

	// });
	res.send('Stream started');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

//@desc     Camera Authentication
// var ip_address = "103.97.243.100" //NOTE: replace it with your camera IP address

// //@desc     Camera username and password
// var username = "admin";
// var password = "Dsspl@123";

// //@desc     A channel of camera stream
// stream = new rtspStream({
//     streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address + ':554/1/1',
//     wsPort: 9999
// });

// rtsp://admin:Dsspl@123@103.97.243.100:554/1/1
