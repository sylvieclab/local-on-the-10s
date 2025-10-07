# 🌤️ Local on the 10s

A nostalgic Home Assistant integration that recreates the classic 2004-2005 "Local on the 8s" weather display experience with **fully customizable location names** for anywhere in the world.

[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Integration-blue.svg)](https://www.home-assistant.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Authentic 2004-2005 Style Weather Display](https://img.shields.io/badge/Style-2004--2005-blue)

---

## ✨ Features

### 🌍 **Fully Customizable Locations**
- **Works Anywhere**: Any city, region, or country in the world
- **Custom Display Names**: Show "ATLANTA METRO", "NEW YORK CITY", "LONDON", "TOKYO", etc.
- **Optional Region Names**: Add subtitles like "Atlanta Int'l", "Central Park", "Heathrow"
- **Dynamic Configuration**: Change location names anytime through the UI

### 🎨 **Authentic 2004-2005 Aesthetic**
- Blue gradient background with floating clouds
- Green location header bars (just like the original!)
- Semi-transparent blue data panels
- Lowercase section headers ("current conditions", "the week ahead")
- Professional typography and layout
- Footer bar with current conditions and time

### 📺 **Multiple Display Screens**
1. **Current Conditions** - Detailed weather with temperature, humidity, dew point, pressure, visibility, wind, gusts
2. **The Week Ahead** - 7-day forecast grid with icons and high/low temperatures
3. **Local Forecast** - Text-based forecast for tonight and tomorrow
4. **Regional Conditions** - Placeholder for future map integration

### 🔧 **Easy Configuration**
- Simple Home Assistant UI setup
- Choose any weather entity (Met.no, Pirate Weather, OpenWeatherMap, etc.)
- Configurable display duration (5-30 seconds per screen)
- Auto-rotation between screens
- Multiple location support

### 🌐 **International Support**
- Works with **any** Home Assistant weather integration
- Supports **metric** and **imperial** units
- Compatible with weather providers worldwide
- Proper temperature formatting (°C or °F)

---

## 📸 Screenshots

Based on authentic 2004-2005 "Local on the 8s" style with:
- ✅ Blue gradient sky with animated clouds
- ✅ Green "ATLANTA METRO" style location headers
- ✅ Semi-transparent blue data panels
- ✅ Current conditions with detailed weather info
- ✅ 7-day forecast grid layout
- ✅ Text forecast panels
- ✅ Regional map section (placeholder)
- ✅ Footer bar with location, temp, and time

---

## 🚀 Quick Start

### Installation

**Option 1: HACS (Recommended)**
1. Open HACS → Integrations
2. Click ⋮ → Custom repositories
3. Add: `https://github.com/yourusername/local-on-the-10s`
4. Search and install "Local on the 10s"

**Option 2: Manual**
```bash
# Copy to your Home Assistant config directory
cp -r custom_components/local_on_the_10s /config/custom_components/
```

### Setup

1. **Restart Home Assistant**

2. **Add Integration**
   - Go to Settings → Devices & Services
   - Click "+ Add Integration"
   - Search for "Local on the 10s"

3. **Configure Your Location**
   - **Location Name**: `Home` (internal identifier)
   - **Display Name**: `ATLANTA METRO` (shown on screen - UPPERCASE!)
   - **Region Name**: `Atlanta Int'l` (optional, shown in footer)
   - **Weather Entity**: Select your weather integration
   - **Display Duration**: `10` seconds (default)

4. **View Your Display**
   - Look for "Local on the 10s" in your sidebar
   - Click to see your weather display!
   - Press F11 for fullscreen mode

---

## 🎯 Configuration Examples

### Major US City
```
Display Name: ATLANTA METRO
Region Name: Atlanta Int'l
```
**Result**: Headers show "ATLANTA METRO", footer shows "CURRENTLY Atlanta Int'l 76°"

### International City
```
Display Name: GREATER LONDON
Region Name: Heathrow
```
**Result**: Headers show "GREATER LONDON", footer shows "CURRENTLY Heathrow 12°C"

### Simple Setup
```
Display Name: SEATTLE
Region Name: (leave blank)
```
**Result**: Headers show "SEATTLE", footer shows "CURRENTLY SEATTLE 58°F"

**See [LOCATION_GUIDE.md](LOCATION_GUIDE.md) for more examples!**

---

## 📖 Documentation

### For Users
- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes
- **[INSTALLATION.md](INSTALLATION.md)** - Detailed installation guide
- **[LOCATION_GUIDE.md](LOCATION_GUIDE.md)** - How to configure location names ⭐
- **[SCREEN_LAYOUTS.md](SCREEN_LAYOUTS.md)** - Visual reference for each screen
- **[FAQ.md](FAQ.md)** - Common questions and troubleshooting
- **[EXAMPLES.md](examples/EXAMPLES.md)** - Configuration examples

### For Developers
- **[DEVELOPMENT.md](DEVELOPMENT.md)** - Developer guide
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
- **[PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - Technical architecture
- **[ROADMAP.md](ROADMAP.md)** - Planned features

---

## 🌤️ Weather Provider Support

Works with **any** Home Assistant weather integration:

| Provider | Status | Coverage | Notes |
|----------|--------|----------|-------|
| **Met.no** | ✅ Tested | Worldwide | Default in Home Assistant |
| **Pirate Weather** | ✅ Tested | Worldwide | Dark Sky replacement |
| **OpenWeatherMap** | ✅ Compatible | Worldwide | Popular choice |
| **AccuWeather** | ✅ Compatible | Worldwide | Detailed forecasts |
| **Weather.gov** | ✅ Compatible | USA only | Official NWS data |
| **Any other** | ✅ Should work | Varies | Any HA weather entity |

---

## 🎨 Features in Detail

### Dynamic Location Names
Configure your exact location name that appears on the display:
- Main location shown in **green header bars** on all screens
- Optional region/station name shown in **footer bar**
- Change anytime through Home Assistant UI
- Supports any language or location worldwide

### Authentic 2004-2005 Style
Carefully recreated based on original designs:
- Blue gradient background (darker at top, lighter at bottom)
- Animated floating clouds with proper timing
- Green location headers with gradient
- Semi-transparent blue data panels with borders
- Lowercase section headers
- Proper typography and spacing
- Footer bar with logo area

### Smart Screen Rotation
Automatically cycles through screens:
- Current conditions (detailed weather data)
- Week ahead (7-day forecast)
- Local forecast (text description)
- Regional conditions (map placeholder)
- Smooth fade transitions between screens
- Configurable timing (5-30 seconds)

### Comprehensive Weather Data
Shows all available data from your weather entity:
- Current temperature (large display)
- Weather condition with emoji icon
- Humidity and dew point
- Barometric pressure
- Visibility distance
- Wind speed, direction, and gusts
- 7-day high/low forecasts
- Descriptive text forecasts

---

## 💡 Use Cases

### Home Weather Display
- Dedicated tablet or monitor showing weather 24/7
- Perfect for kitchen, entryway, or bedroom
- Always-on information at a glance

### Kiosk Mode (Raspberry Pi)
- Set up a Raspberry Pi with auto-starting browser
- Fullscreen weather display
- Great for wall-mounted displays

### Dashboard Integration
- Embed in Home Assistant dashboards
- Use iframe or webpage cards
- Part of comprehensive home control interface

### Multiple Locations
- Configure separate instances for home, office, vacation house
- Each with custom location names
- Easy switching between locations

---

## 🔮 Roadmap

### Version 0.2.0 (Next)
- [ ] Actual radar imagery integration
- [ ] Severe weather alerts with highlighting
- [ ] Hourly forecast section
- [ ] Additional color themes
- [ ] Historical temperature comparison

### Version 0.3.0
- [ ] 3D cloud graphics
- [ ] Time-of-day background changes (dawn/day/dusk/night)
- [ ] Weather particle effects (rain, snow animation)
- [ ] Air quality and pollen data
- [ ] Additional language translations

### Version 1.0.0
- [ ] Mobile apps (iOS/Android)
- [ ] Multi-user configurations
- [ ] Smart home automation triggers
- [ ] Cloud sync across devices

**See [ROADMAP.md](ROADMAP.md) for complete list**

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

- 🐛 **Report Bugs** - Open an issue with details
- 💡 **Suggest Features** - Share your ideas
- 📝 **Improve Docs** - Help make documentation better
- 🌐 **Add Translations** - Support more languages
- 🔧 **Submit Code** - Pull requests welcome!

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## ⚙️ Technical Details

### Architecture
- **Backend**: Python Home Assistant custom component
- **Frontend**: Vanilla HTML/CSS/JavaScript (no build process!)
- **Data Source**: Home Assistant weather entities via API
- **Updates**: Real-time weather data every 5 minutes

### Requirements
- Home Assistant 2023.1.0 or newer
- A configured weather integration
- Modern web browser

### No Dependencies
- Pure Python and JavaScript
- No external libraries required
- No compilation or build process
- Works offline once data is loaded

---

## 📝 License

MIT License - See [LICENSE](LICENSE) file for details.

Free to use, modify, and distribute!

---

## 🙏 Credits

- **Inspired by**: The Weather Channel's "Local on the 8s" (2004-2005 era)
- **Built for**: The Home Assistant community
- **Weather data**: Met.no, Pirate Weather, and other providers
- **Not affiliated with**: The Weather Channel

This is a fan project created out of nostalgia and love for that classic weather display format!

---

## 📞 Support

Need help? Here's where to go:

- 📖 **Documentation** - Check the guides above
- 🐛 **Bug Reports** - [Open an issue](https://github.com/yourusername/local-on-the-10s/issues)
- 💬 **Questions** - See [FAQ.md](FAQ.md) or open an issue
- 🗣️ **Discussions** - Home Assistant Community forums

---

## ⭐ Show Your Support

If you like this project:
- ⭐ Star this repository
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🔧 Contribute code
- 📖 Improve documentation
- 🗣️ Tell others about it!

---

## 🌟 Status

**✅ Ready for Production Use**

This integration is complete and ready to install. All core features are implemented and tested.

Current Version: **0.1.0**

---

<div align="center">

**Made with ❤️ for the Home Assistant community**

*Bringing back the nostalgia of 2004-2005 weather displays*

</div>
