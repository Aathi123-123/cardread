const fs = require('fs');
const zlib = require('zlib');
const path = 'eas-logs/run-gradlew-log.txt';
const buf = fs.readFileSync(path);
const outDec = 'eas-logs/run-gradlew-log.txt.dec';
let success = false;
try {
	const res = zlib.gunzipSync(buf);
	fs.writeFileSync(outDec, res);
	console.log('decompressed with gunzip');
	success = true;
} catch (e) {
	try {
		const res2 = zlib.inflateSync(buf);
		fs.writeFileSync(outDec, res2);
		console.log('decompressed with inflate');
		success = true;
	} catch (e2) {
		try {
			const res3 = zlib.brotliDecompressSync(buf);
			fs.writeFileSync(outDec, res3);
			console.log('decompressed with brotli');
			success = true;
		} catch (e3) {
			console.error('decompress failed', e3.message);
		}
	}
}
if (success) {
	const text = fs.readFileSync(outDec, 'utf8');
	console.log(text.slice(0,4000));
}
