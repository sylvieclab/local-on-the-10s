# Local on the 10s - Home Assistant Integration

A nostalgic recreation of The Weather Channel's "Local on the 8s" (rebranded here as "Local on the 10s") featuring authentic 2005 IntelliStar styling.

![Local on the 10s](https://img.shields.io/badge/Home%20Assistant-Custom%20Integration-blue)
![Version](https://img.shields.io/badge/version-0.1.0-green)

## Overview

This Home Assistant custom integration recreates the classic Weather Channel "Local on the 8s" experience from the 2004-2005 IntelliStar era. It displays local weather forecasts with authentic styling, period-accurate weather icons, and that signature lime green header bar.

## Features

### 🎨 Authentic 2005 IntelliStar Design
- Signature lime green location bar with beveled effects
- Retro blue gradient panels with drop shadows
- Period-accurate typography and spacing
- Textured overlays for that early LCD look
- Heavy use of gradients and 3D effects (Web 2.0 aesthetic)

### 🌤️ Weather Display Screens
1. **Current Conditions** - Real-time weather with detailed metrics
   - Temperature, humidity, dew point
   - Barometric pressure, visibility
   - Wind speed/direction and gusts
   - Authentic weather icon display

2. **The Week Ahead** - 7-day forecast grid
   - Daily high/low temperatures
   - Weather condition icons
   - Day name abbreviations

3. **Local Forecast** - Text-based detailed forecast
   - Tonight/This Evening forecast
   - Tomorrow's forecast
   - Natural language descriptions

4. **Regional Conditions** - Map placeholder
   - Future: Regional weather map integration

### ⚡ Authentic Weather Icons
- 100+ authentic Weather Channel icon PNGs from the 2005 era
- Automatic day/night icon variants
- Conditions include: Sunny, Cloudy, Rainy, Snowy, Foggy, Thunderstorms, and more

## Installation

### HACS (Recommended)
1. Open HACS in Home Assistant
2. Go to "Integrations"
3. Click the three dots in the top right
4. Select "Custom repositories"
5. Add repository URL: `https://github.com/sylvieclab/local-on-the-10s`
6. Category: Integration
7. Click "Install"
8. Restart Home Assistant

### Manual Installation
1. Copy the `custom_components/local_on_the_10s` folder to your `config/custom_components/` directory
2. Restart Home Assistant
3. Go to Configuration → Integrations
4. Click "+ Add Integration"
5. Search for "Local on the 10s"

## Configuration

### Setup
1. Add the integration via the UI
2. Configure your settings:
   - **Location Name**: Your city/area name
   - **Display Name**: What appears on the screen (e.g., "ROCKLAND")
   - **Region Name**: Optional footer display name
   - **Weather Entity**: Select your weather integration (e.g., Pirate Weather)
   - **Display Duration**: Seconds per screen (default: 10)

### Accessing the Panel
After configuration, access your Local on the 10s display:
- **Sidebar Menu**: Click "Local on the 10s" in the sidebar
- **Direct URL**: `http://your-ha-ip:8123/local_on_the_10s/display`

### Recommended Weather Integrations
- **Pirate Weather** (recommended) - Most complete forecast data
- **OpenWeatherMap** - Good alternative
- **Met.no** - Works well for European locations
- **National Weather Service** - US locations

## Screenshots

### Current Conditions
Displays current weather with authentic 2-column layout:
- Left: Weather icon and temperature
- Right: Detailed metrics grid

### The Week Ahead
7-day forecast with authentic card styling and weather icons.

### Local Forecast
Natural language forecast descriptions for tonight and tomorrow.

## Technical Details

### Data Sources
- Uses Home Assistant weather entities
- Fetches forecast via `weather.get_forecasts` service
- Updates every 5 minutes
- Screen rotation every 10 seconds (configurable)

### Styling
- **Colors**: 2005 IntelliStar palette (blues, lime green)
- **Fonts**: Arial/Helvetica with bold weights
- **Effects**: Multiple shadow layers, gradients, bevels
- **Layout**: CSS Grid for responsive design

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Optimized for full-screen display
- Works on tablets and desktop screens
- Recommended: 1920x1080 or 1280x720 resolution

## Customization

### Changing Display Duration
Edit the config through the integration settings or modify the `display_duration` value.

### Using Different Weather Entities
Any Home Assistant weather entity can be used. Configure through the integration UI.

### Icon Customization
Icons are stored in `custom_components/local_on_the_10s/assets/svg/`. You can replace them with your own while maintaining the same filenames.

## Troubleshooting

### No Weather Data Showing
- Verify your weather entity is configured correctly
- Check that the entity has forecast data available
- Look in Home Assistant logs for errors

### Icons Not Loading
- Ensure the `assets/svg/` folder was copied correctly
- Check file permissions
- Clear browser cache

### Display Issues
- Try a different browser
- Check browser console for errors
- Verify Home Assistant is accessible

## Roadmap

- [ ] Regional weather maps
- [ ] Multiple style themes (different eras)
- [ ] Almanac data (sunrise/sunset, moon phases)
- [ ] Background music support
- [ ] Extended forecast (10-day)
- [ ] Severe weather alerts integration
- [ ] Airport delays screen
- [ ] Multiple location support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Credits

- **Weather Icon Collection**: Authentic Weather Channel icons from 2004-2005 era
- **Inspiration**: The Weather Channel's IntelliStar system (2004-2015)
- **Home Assistant Community**: For the amazing platform

## License

MIT License - See LICENSE file for details

## Disclaimer

This is a fan project and is not affiliated with or endorsed by The Weather Channel or IBM. All Weather Channel trademarks and icons belong to their respective owners.

---

**Enjoy your nostalgic weather experience! ☀️🌧️❄️**
