# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-10-07

### Added
- **Authentic Weather Channel Icons**: Integrated 100+ authentic Weather Channel PNG icons from 2004-2005 era
- **Rotating Background Images**: Dynamic cloud sky backgrounds that change with each screen transition
- **2005 Broadcast Styling**: Added authentic broadcast graphics effects including:
  - CRT-style scan lines overlay for retro TV effect
  - Animated film grain texture simulating broadcast compression
  - Glossy gel effects on panels and headers with multiple gradient layers
  - Subtle blur filter (0.3px) for authentic CRT softness
  - Heavy beveled edges and inset shadows for 3D depth
  - Glass reflection overlays on data panels
- **Cyan Text Forecast Headers**: Period headers (Tonight/Tomorrow) now display in authentic cyan (#5fc4d4)
- **Enhanced Visual Authenticity**: Fine-tuned colors, gradients, shadows, and typography to match 2005 IntelliStar reference images
- **Background Image System**: Backgrounds directory with support for rotating sky imagery
- **Icon Fallback System**: Emoji fallback icons if PNG files fail to load

### Fixed
- **Icon Loading**: Registered assets directory with Home Assistant HTTP server at `/local_on_the_10s/assets/svg/`
- **JSON Parsing Error**: Fixed double parsing of `hassTokens` localStorage data
- **Asset Path Resolution**: Updated icon paths to use registered static paths instead of relative URLs

### Changed
- **Section Headers**: Reduced font size from 36px to 32px, lighter styling with subtle glow
- **Location Bar**: Enhanced with glossy highlight gradient and stronger yellow-green tone (#d8f050)
- **Data Panels**: Deeper blue gradients with increased opacity (0.88-0.94) and glass highlights
- **Text Labels**: Lighter blue color (#a8c8e8) with refined shadows
- **Forecast Cards**: Adjusted padding, borders, and condition text weight for better proportions
- **Typography**: Refined font sizes and weights across all elements
- **Background System**: Replaced static gradient with layered system (image → dark overlay → scan lines)

### Technical
- Added `StaticPathConfig` for backgrounds directory in `__init__.py`
- Implemented CSS custom properties for dynamic background switching
- Added `setBackgroundImage()` and `updateBackground()` JavaScript functions
- Enhanced CSS with multiple pseudo-elements for layered visual effects
- Improved z-index layering for proper stacking of background, overlays, and content

## [0.1.0] - 2025-10-07

### Added
- Initial release of Local on the 10s
- Home Assistant custom integration with config flow
- Beautiful 2004-era weather display aesthetic
- Animated cloud backgrounds
- Current conditions display with temperature, humidity, wind, and pressure
- 7-day forecast display with high/low temperatures
- Support for any Home Assistant weather entity
- International support (works worldwide)
- Met.no and Pirate Weather compatibility
- Automatic section rotation every 10 seconds
- Real-time clock display
- Weather icon mapping for various conditions
- Responsive design for different screen sizes
- Sidebar panel integration
- Configurable display duration
- Auto-start option
- English translations

### Technical Details
- Python backend for Home Assistant integration
- Vanilla HTML/CSS/JavaScript frontend (no build process)
- Uses Home Assistant API for weather data
- CSS animations for smooth transitions
- No external dependencies beyond Home Assistant

## [Unreleased]

### Planned Features
- Additional weather providers (OpenWeatherMap, AccuWeather, etc.)
- Customizable color themes and era selection (2000s, 2010s, etc.)
- Background music support (royalty-free smooth jazz)
- Radar/satellite imagery integration
- Multiple location support
- Historical weather data display
- Severe weather alerts with flash warnings
- Additional language translations
- Custom animation options
- Configurable rotation timing
- Fullscreen mode toggle
- Screen saver mode
- Mobile-responsive improvements
- Daypart forecast screen (8pm, Midnight, 6am, Noon)
- Outdoor activity forecast
- Almanac data (sunrise/sunset, moon phases)
- Extended 10-day forecast
