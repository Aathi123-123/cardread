<div align="center">

# 🪪 AI Smart Card Organizer

### Minimal Scaffold — Scan → Verify → Save

A starter Expo React Native app with a working scan → verify → save flow, mock OCR/AI extraction services, and local SQLite storage.

![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![License](https://img.shields.io/badge/status-scaffold-orange?style=for-the-badge)

</div>

---

## 📖 Overview

This repository contains the core architecture for an AI-powered smart card organizer — think business cards, ID cards, or membership cards captured with your phone camera, automatically parsed, and saved to a local database.

The scaffold ships with **mock** OCR/AI services so you can run the full flow end-to-end immediately, then swap in production integrations when you're ready.

---

## ✨ What's Included

| Feature | Description |
|---|---|
| 🧭 **Navigation** | Home, Scan, Verify, and Cards list screens |
| 📷 **Capture** | Camera & gallery capture via `expo-image-picker` |
| 🤖 **Mock AI/OCR** | Drop-in replaceable extraction services |
| 💾 **Local Storage** | Persistent storage using `expo-sqlite` |

---

## 🚀 Quick Start

**1. Install dependencies**

```bash
npm install
```

**2. Start Expo**

```bash
npm start
```

**3. Run the app**

Scan the QR code with the **Expo Go** app, or launch it on an emulator/simulator.

---

## 🗺️ Roadmap / Next Steps

- [ ] Integrate on-device OCR (Tesseract / ML Kit / Vision)
- [ ] Connect a production AI extraction & classification backend
- [ ] Improve camera UX — edge detection & auto-capture
- [ ] Add encryption, biometric lock, and backup support

---

## 📦 Build an APK (EAS)

<details>
<summary><strong>Click to expand build instructions</strong></summary>

**1. Install the EAS CLI**

```bash
npm install -g eas-cli
```

**2. Log in to your Expo account**

```bash
eas login
```

**3. Configure credentials**

```bash
eas credentials
```

**4. Start the build**

```bash
npm run eas:build
```

Your APK will build in the cloud and be available as a download link once complete.

> 💡 For fully offline / local native builds, use `eas build --local` (requires the relevant native toolchains installed).

</details>

---

## ⚙️ Configuration Notes

> [!IMPORTANT]
> Update the Android package identifier in `app.json` before building:
> ```json
> "expo": {
>   "android": {
>     "package": "com.yourcompany.aismartcard"
>   }
> }
> ```

- Rename or duplicate the profile in `eas.json` to switch between **APK** and **AAB** build outputs.
- Need help with signing keys or credential automation? Just ask — happy to walk through it.

---

<div align="center">

Made with 🃏 + 🧠 · Expo React Native Scaffold

</div>
