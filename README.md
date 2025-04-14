# Demo Capacitor App

A modern mobile web application built with Angular and Capacitor, demonstrating various mobile capabilities including camera access, geolocation, and offline-first functionality.

## Features

- 📸 Camera Integration
  - Take photos using device camera
  - Image preview and editing capabilities
  - Proper permission handling

- 📍 Geolocation
  - Get current device location
  - Real-time coordinates display

- 🌐 Offline-First Architecture
  - Service Worker implementation
  - Cached API responses
  - Automatic offline/online detection
  - Periodic data refresh (20s intervals)

- 🎯 Chuck Norris Jokes API
  - Real-time joke fetching
  - Offline caching
  - Automatic refresh mechanism

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI
- Capacitor CLI

## Installation

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
npx cap add android
npx cap add ios
```

## Development

To run the application in development mode:

```bash
ng serve
```

To run on a mobile device:

```bash
npx cap run android
# or
npx cap run ios
```

## Project Structure

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

## Configuration

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Angular](https://angular.io/)
- [Capacitor](https://capacitorjs.com/)
- [Chuck Norris API](https://api.chucknorris.io/)
