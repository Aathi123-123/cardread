AI Smart Card Organizer — Minimal Scaffold

This repository contains a starter Expo React Native app that implements the core architecture and a working scan → verify → save flow with mock OCR/AI services and a local SQLite store.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Start Expo:

```bash
npm start
```

3. Use the Expo Go app or run on an emulator.

What this scaffold includes
- Basic navigation and screens: Home, Scan, Verify, Cards list
- Camera/gallery capture (uses Expo ImagePicker)
- Mock OCR and AI extraction services (replaceable)
- Local SQLite storage via `expo-sqlite`

Next steps
- Integrate on-device OCR (Tesseract / MLKit / Vision)
- Integrate a production AI extraction/classification backend
- Improve camera UX (edge detection, auto-capture)
- Add encryption, biometric lock, and backup

Build APK (EAS)

1. Install EAS CLI (requires Node):

```bash
npm install -g eas-cli
```

2. Login and configure Expo account:

```bash
eas login
```

3. Configure credentials (you'll be prompted):

```bash
eas credentials
```

4. Start an APK build:

```bash
npm run eas:build
```

The build will run in the cloud and produce a downloadable APK. For fully offline or local native builds you can `eas build --local` with required native toolchains.

Notes:
- Update `app.json` `expo.android.package` to your app id (reverse-domain, e.g., `com.yourcompany.aismartcard`).
- You can change the `eas.json` profile name or settings to produce an AAB instead of an APK.
- If you need help configuring signing keys or automating credentials, I can walk through those steps.
