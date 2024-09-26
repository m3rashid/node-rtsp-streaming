const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());

const { proxy } = require('rtsp-relay')(app);

const handler = (url) => {
	return proxy({
		additionalFlags: ['-q', '1'],
		url: url,
		transport: 'tcp',
		verbose: true,
	});
};

app.ws('/api/stream', (ws, req) => {
	const maskedURL = req.query.url;
	const unmaskedURL = maskedURL?.replace(/\/question/g, '?')?.replace(/\/and/g, '&');
	handler(unmaskedURL)(ws, req);
});

app.listen(2000);
