const https = require('https');
const fs = require('fs');
const url = 'https://storage.googleapis.com/eas-workflows-production/logs/2d8a53b9-968e-4d36-be94-02177b52f53d/848cab34-c1b2-412b-b478-042d8f665340/2026-08-16T14%3A26%3A34Z-a2543a36-fad3-4ed9-903c-c593e293810f.txt?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=www-production%40exponentjs.iam.gserviceaccount.com%2F20260816%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260816T142805Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=23e918cb7d73e0499957ec2877ee319996935a98e8c04c8a655263e6c661df4422d90b445af5ded044e359f035131e78b31f64dc995581ebd41ec0b2dbcb82a5575c0d575ba813e7c4e536ec6c22403884ae7cd60a0e350ee5bdfaffbbcf6563e8469ce8add75372b11381d105e82e11c3119a331606b5a87cb69058693620d5de6130d1bbe5c5e24b6fda556ba85be46c721967b71a01215b865032c408a37eec723fad45b41680ca9bc632ef018bb3a08b9faa8e23b7325de9f5a50e23c6e5b3f6e0117af8adb2698f876263b04d270d28efbb58fe93ec97db08a43289a4111e73c55ae8cf14cfccc04f8a60446d357276542d8edda61c2ee390836871d717';
fs.mkdirSync('eas-logs', { recursive: true });
const out = 'eas-logs\\run-gradlew-log.txt';
const file = fs.createWriteStream(out);
https.get(url, (res) => {
  res.pipe(file);
  file.on('finish', () => console.log('downloaded'));
}).on('error', (e) => { console.error(e); process.exit(1); });
