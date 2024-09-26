const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const { proxy } = require('rtsp-relay')(app);

app.ws('/api/stream', (ws, req) => {
	const maskedUrl = new String(req.query.url);
	const unmaskedURL = maskedUrl?.replace(/\/question/g, '?')?.replace(/\/and/g, '&');
	proxy({
		verbose: true,
		transport: 'tcp',
		url: unmaskedURL,
		additionalFlags: ['-q', '1'],
	})(ws, req);
});

app.listen(4000, () => console.log('Server started on port 4000'));
