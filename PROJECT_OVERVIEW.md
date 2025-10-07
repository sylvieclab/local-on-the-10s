# Local on the 10s - Project Overview

## What is Local on the 10s?

Local on the 10s is a Home Assistant custom integration that creates a nostalgic weather display inspired by the classic local weather forecast segments from the mid-2000s. It provides a beautiful, animated weather display that shows current conditions and forecasts in an aesthetically pleasing format reminiscent of that era.

## Key Features

### 🎨 Visual Design
- **2004-Era Aesthetic**: Gradient backgrounds, smooth animations, and classic typography
- **Animated Clouds**: Floating cloud animations that create depth and movement
- **Clean Layout**: Easy-to-read information with proper visual hierarchy
- **Responsive Design**: Works on desktop, tablet, and mobile displays

### 🌍 International Support
- **Any Location**: Works anywhere in the world
- **Multiple Weather Providers**: Compatible with Met.no, Pirate Weather, OpenWeatherMap, and more
- **Unit Support**: Automatically uses metric or imperial units based on your weather provider
- **Language Ready**: Built with internationalization support

### 📊 Weather Information
- **Current Conditions**: Temperature, weather condition, humidity, wind speed, pressure
- **5-Day Forecast**: Daily high/low temperatures with weather icons
- **Weather Icons**: Emoji-based icons for various weather conditions
- **Real-Time Updates**: Automatic refresh every 5 minutes

### 🏠 Home Assistant Integration
- **Sidebar Panel**: Easy access from Home Assistant sidebar
- **Config Flow**: Simple configuration through the UI
- **Entity Support**: Works with any Home Assistant weather entity
- **No Dependencies**: Pure Python and JavaScript, no external libraries needed

## How It Works

### Architecture

```
┌─────────────────────────────────────────────────────┐
│                  Home Assistant                      │
│  ┌────────────────────────────────────────────────┐ │
│  │     Weather Integration (Met.no, etc.)        │ │
│  └──────────────────┬─────────────────────────────┘ │
│                     │                                │
│  ┌──────────────────▼─────────────────────────────┐ │
│  │    Local on the 10s Custom Component          │ │
│  │  - Registers panel                             │ │
│  │  - Serves frontend files                       │ │
│  │  - Handles configuration                       │ │
│  └──────────────────┬─────────────────────────────┘ │
│                     │                                │
│  ┌──────────────────▼─────────────────────────────┐ │
│  │         Frontend (www/index.html)             │ │
│  │  - Fetches weather data via HA API            │ │
│  │  - Renders beautiful display                   │ │
│  │  - Animates transitions                        │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Data Flow

1. **Weather Provider** → Collects weather data
2. **Home Assistant** → Processes and stores data in weather entity
3. **Local on the 10s Backend** → Registers panel and serves files
4. **Frontend** → Fetches data via Home Assistant API
5. **Display** → Shows beautiful, animated weather information

## Technical Stack

### Backend (Python)
- **Home Assistant Integration Framework**: Custom component structure
- **Config Flow**: UI-based configuration
- **Panel Registration**: Sidebar integration
- **Static File Serving**: Serves frontend assets

### Frontend (HTML/CSS/JavaScript)
- **Vanilla JavaScript**: No build process or frameworks required
- **CSS3 Animations**: Smooth cloud movements and transitions
- **Responsive CSS**: Flexbox and Grid layouts
- **Home Assistant API**: Direct API calls for weather data

## Project Structure Explained

```
custom_components/local_on_the_10s/
│
├── __init__.py                 # Main integration initialization
│   - Registers component with Home Assistant
│   - Sets up panel in sidebar
│   - Handles component lifecycle
│
├── config_flow.py              # Configuration UI
│   - Creates configuration dialog
│   - Validates user input
│   - Manages options flow
│
├── const.py                    # Constants
│   - Domain name
│   - Configuration keys
│
├── manifest.json               # Integration metadata
│   - Version, dependencies
│   - Home Assistant compatibility
│
├── translations/               # UI translations
│   └── en.json                - English text for config UI
│
└── www/                        # Frontend files
    └── index.html             - Complete weather display
        - HTML structure
        - CSS styling and animations
        - JavaScript for data fetching and display
```

## Configuration Options

### Required Settings
- **Location Name**: Display name for your location
- **Weather Entity**: Which weather entity to use for data

### Optional Settings
- **Display Duration**: How long to show each section (60-600 seconds)
- **Auto Start**: Whether to start automatically on page load

## Display Sequence

The display automatically rotates through different views:

1. **Current Conditions** (10 seconds)
   - Large temperature display
   - Current weather condition with icon
   - Grid of additional details (humidity, wind, pressure)

2. **5-Day Forecast** (10 seconds)
   - Five cards showing upcoming days
   - Day name, weather icon
   - High and low temperatures
   - Weather condition text

## Weather Provider Compatibility

### Tested Providers
- ✅ **Met.no (Meteorologisk Institutt)** - Norwegian Meteorological Institute
- ✅ **Pirate Weather** - Dark Sky alternative with global coverage

### Should Work With
- OpenWeatherMap
- AccuWeather  
- Weather.gov (US only)
- Any Home Assistant weather integration that follows the standard entity format

## Use Cases

### Home Display
- Dedicated weather display on a tablet or monitor
- Always-on information for your household
- Great for entryway or kitchen displays

### Dashboard Integration
- Embed in Home Assistant dashboards
- Part of a comprehensive home control interface
- Quick weather reference

### Dedicated Weather Station
- Kiosk mode on a Raspberry Pi
- Wall-mounted display
- Touchscreen information center

## Future Enhancements

### Planned Features
- **Background Music**: Smooth jazz audio (royalty-free)
- **Radar Integration**: Animated weather radar loops
- **Severe Weather Alerts**: Highlighted warnings for dangerous conditions
- **Multiple Locations**: Switch between different locations
- **Historical Data**: Show temperature trends and comparisons
- **Customization**: User-selectable themes and colors
- **Extended Forecast**: 7-day or 10-day forecasts
- **Hourly Forecast**: Detailed hour-by-hour predictions

### Technical Improvements
- Automated testing suite
- Performance optimizations
- Additional language translations
- Accessibility enhancements
- Offline mode support

## Why "Local on the 10s"?

The name is inspired by "Local on the 8s" from The Weather Channel, which showed local weather forecasts at :08, :18, :28, :38, :48, and :58 past each hour. We chose "10s" to differentiate this fan project and avoid any trademark issues, while still paying homage to that nostalgic format.

## Technical Requirements

### Minimum Requirements
- Home Assistant 2023.1.0+
- A configured weather integration
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Recommended Setup
- Home Assistant 2024.1.0+
- Pirate Weather or Met.no integration
- Dedicated display device (tablet, monitor)
- Good network connection for weather updates

## Performance

- **Lightweight**: Minimal resource usage
- **Fast Loading**: No external dependencies to load
- **Efficient Updates**: Only fetches data every 5 minutes
- **Smooth Animations**: Hardware-accelerated CSS transitions

## Privacy & Security

- **No External Calls**: All data stays within your Home Assistant instance
- **No Tracking**: No analytics or telemetry
- **Local First**: Works entirely on your local network
- **Open Source**: All code is visible and auditable

## Support & Community

- **GitHub Issues**: Report bugs and request features
- **Home Assistant Forums**: Discuss with other users
- **Pull Requests**: Contributions welcome!

## Credits

This project is a fan creation inspired by The Weather Channel's iconic "Local on the 8s" segments. It is not affiliated with or endorsed by The Weather Channel.

Special thanks to:
- Home Assistant community
- Weather data providers (Met.no, Pirate Weather)
- All contributors and users

## License

MIT License - Free to use, modify, and distribute. See LICENSE file for details.
