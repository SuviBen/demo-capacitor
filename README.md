# Demo Capacitor App

A modern mobile web application built with Angular and Capacitor, demonstrating various mobile capabilities including camera access, geolocation, and offline-first functionality.

![Demo App Screenshot](screenshot.png)

## 🚀 Features

- 📸 **Camera Integration**
  - Take photos using device camera
  - Image preview and editing capabilities
  - Proper permission handling
  - Cross-platform support (Android/iOS)

- 📍 **Geolocation**
  - Get current device location
  - Real-time coordinates display
  - High-accuracy positioning
  - Permission management

- 🌐 **Offline-First Architecture**
  - Service Worker implementation
  - Cached API responses
  - Automatic offline/online detection
  - Periodic data refresh (20s intervals)
  - Seamless offline experience

- 🎯 **Chuck Norris Jokes API**
  - Real-time joke fetching
  - Offline caching
  - Automatic refresh mechanism
  - Error handling

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (`npm install -g @angular/cli`)
- Capacitor CLI (`npm install -g @capacitor/cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/demo-capacitor.git
cd demo-capacitor
```

2. Install dependencies:
```bash
npm install
```

3. Build the application:
```bash
npm run build
```

4. Add platforms:
```bash
# For Android
npx cap add android

# For iOS (macOS only)
npx cap add ios
```

5. Sync the project:
```bash
npx cap sync
```

## 💻 Development

### Running in Development Mode

```bash
# Start the development server
ng serve

# The app will be available at http://localhost:4200
```

### Running on Mobile Devices

```bash
# For Android
npx cap run android

# For iOS (macOS only)
npx cap run ios
```

### Building for Production

```bash
# Create a production build
npm run build

# Sync the build with Capacitor
npx cap sync
```

## 📁 Project Structure

```
demo-capacitor/
├── src/
│   ├── app/
│   │   ├── app.component.ts    # Main component with camera and location logic
│   │   ├── app.config.ts       # Angular configuration
│   │   └── app.routes.ts       # Application routes
│   └── assets/                 # Static assets
├── capacitor.config.ts         # Capacitor configuration
└── ngsw-config.json           # Service Worker configuration
```

## ⚙️ Configuration

### Camera Permissions
Camera permissions are configured in `capacitor.config.ts`:
```typescript
plugins: {
  Camera: {
    permissions: ['camera']
  }
}
```

### Service Worker
Offline caching is configured in `ngsw-config.json`:
```json
{
  "dataGroups": [
    {
      "name": "chuck-norris-jokes",
      "urls": ["https://api.chucknorris.io/jokes/random"],
      "cacheConfig": {
        "maxAge": "20s",
        "maxSize": 1,
        "strategy": "performance",
        "timeout": "1s"
      }
    }
  ]
}
```

## 🔧 Troubleshooting

### Common Issues

1. **Camera not working**
   - Ensure camera permissions are granted in device settings
   - Check if the app has proper permissions in `capacitor.config.ts`
   - Rebuild and sync the project: `npm run build && npx cap sync`

2. **Offline mode not working**
   - Clear browser cache and service worker
   - Ensure `ngsw-config.json` is properly configured
   - Check if the service worker is registered in the browser

3. **Build errors**
   - Clear node_modules: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`
   - Rebuild the project: `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Follow Angular style guide
- Use TypeScript strict mode
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation when needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Angular](https://angular.io/) - The web framework
- [Capacitor](https://capacitorjs.com/) - Cross-platform native runtime
- [Chuck Norris API](https://api.chucknorris.io/) - For providing the jokes API

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/yourusername/demo-capacitor/issues) page
2. Create a new issue if your problem isn't already listed
3. Provide detailed information about your problem

---

Made with ❤️ by Benito.
