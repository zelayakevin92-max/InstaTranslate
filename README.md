# InstaTranslate 📱🌍

A real-time camera translation app designed for people who face language barriers in everyday life — travelers, immigrants, tourists, refugees, and non-native speakers.

**Point your camera. Translate anything. Instantly.**

## 🌟 Features

- 📷 **Live Camera Translation** - Real-time text detection and translation
- 🎥 **Video Mode** - Record videos with live translation overlays
- 📄 **Document Mode** - Auto-detect and translate full documents
- 🎯 **Object Recognition** - Identify and translate object labels
- 💬 **Conversation Mode** - Two-way live audio translation for real conversations
- 📚 **Translation History** - Auto-saved translations with search and star functionality
- 🔊 **Text-to-Speech** - Hear translations read aloud with adjustable speed (0.5x - 1.5x)
- 🌐 **18+ Languages** - English, Spanish, French, Chinese, Arabic, Portuguese, German, Japanese, Korean, Russian, Hindi, Italian, Turkish, Polish, Vietnamese, Thai, Ukrainian, Dutch
- 📴 **Offline Support** - Download language packs for offline translation
- ♿ **Accessibility First** - Full screen reader support, high contrast, large touch targets, one-handed operation

## 🛠️ Tech Stack

- **Framework**: React Native 0.73+ with TypeScript
- **State Management**: Zustand
- **Navigation**: React Navigation
- **Camera**: react-native-vision-camera v4
- **OCR**: Google ML Kit Text Recognition
- **Translation**: Google Cloud Translation API v2 / DeepL API
- **TTS**: Native platform TTS with Google Cloud TTS upgrade option
- **Object Detection**: Google ML Kit Object Detection & Labeling
- **Local Storage**: MMKV (settings), Realm (history with thumbnails)
- **Testing**: Jest, Detox
- **Build**: Expo with EAS

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- iOS: Xcode 14+
- Android: Android Studio with SDK 31+
- Git

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/zelayakevin92-max/InstaTranslate.git
cd InstaTranslate
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment
```bash
cp .env.example .env
```
Then edit `.env` and add your API keys:
- Google Cloud Translation API Key
- DeepL API Key (optional)
- Google Cloud TTS API Key (optional)

### 4. Start Development Server
```bash
# For Expo development
npm start

# For iOS simulator
npm run ios

# For Android emulator
npm run android

# For web (preview only)
npm run web
```

## 📁 Project Structure

```
src/
├── screens/              # Main app screens (Camera, History, Settings, Conversation)
├── components/           # Reusable UI components
├── services/             # API services (translation, OCR, TTS, etc.)
├── hooks/                # Custom React hooks
├── state/                # Zustand state management stores
├── navigation/           # React Navigation setup
├── types/                # TypeScript type definitions
├── utils/                # Utility functions and helpers
├── assets/               # Images, icons, fonts
└── App.tsx               # Root component
```

## 🎯 Current Roadmap

### Phase 1 (MVP)
- [x] Project setup with React Native + TypeScript
- [ ] Core App Structure (#1)
- [ ] Onboarding & Language Selection (#2)
- [ ] Native Camera Module (#3)
- [ ] Live OCR & Translation (#4)
- [ ] Translation Result Panel (#6)

### Phase 2
- [ ] Object Recognition (#5)
- [ ] Text-to-Speech (#7)
- [ ] Conversation Mode (#8)
- [ ] Translation History (#9)

### Phase 3
- [ ] Settings & Permissions (#10)
- [ ] Design System (#11)
- [ ] Offline Language Packs
- [ ] Testing & QA (#12)

## 📱 Supported Platforms

- **iOS**: 13.0+
- **Android**: 8.0+ (API 26+)
- Dark mode only (accessibility-first design)

## 🎨 Design System

**Color Palette** (Dark Mode Only)
- Primary: `#E8622A` (Warm Orange)
- Background: `#0A0A0A` (Near-Black)
- Surface: `#1E1E1E` (Dark Gray)
- Text Primary: `#F5F5F5` (Light Gray)
- Text Secondary: `#AAAAAA` (Medium Gray)
- Success: `#1D9E75` (Green)
- Warning: `#EF9F27` (Amber)
- Danger: `#E24B4A` (Red)

**Accessibility Standards**
- WCAG AA contrast compliance
- Min tap target: 48x48dp
- Font size: 11sp minimum
- Full VoiceOver (iOS) & TalkBack (Android) support
- One-handed operation throughout

## 📖 API Documentation

### Environment Variables

```env
# Translation APIs
GOOGLE_CLOUD_TRANSLATION_API_KEY=xxx
DEEPL_API_KEY=xxx

# TTS
GOOGLE_CLOUD_TTS_API_KEY=xxx

# Configuration
ML_KIT_ENABLE_OFFLINE_MODELS=true
ENVIRONMENT=development
DEBUG=true
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests (Detox)
npm run detox:ios
npm run detox:android

# Lint code
npm run lint

# Type check
npm run type-check
```

## 📦 Building for Production

### iOS
```bash
npm run build:ios
# Follow EAS build prompts
```

### Android
```bash
npm run build:android
# Follow EAS build prompts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -am 'Add my feature'`
4. Push to branch: `git push origin feature/my-feature`
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👥 Authors

- **Kevin Zelaya** - Initial project and development

## 🆘 Support

For issues and feature requests, please use [GitHub Issues](https://github.com/zelayakevin92-max/InstaTranslate/issues).

## 🎯 App Store Metadata

**Short Description (80 chars)**
> Point your camera. Translate anything. Instantly.

**Full Description**
> InstaTranslate breaks language barriers in real time. Point your camera at any text — signs, menus, forms, labels, handwriting — and see the translation in your language instantly. Use Conversation Mode for live two-way translation between any two people. Translate full documents in one tap. Hear every translation spoken aloud. Works in 18 languages. Save everything for later. No subscription required.

**Keywords**
> translate, camera translator, live translation, travel, language barrier, OCR, document translate, conversation translator, instant translate, offline translate

**Category**: Travel / Education  
**Age Rating**: 4+ (iOS) / Everyone (Android)

---

Made with ❤️ for breaking language barriers