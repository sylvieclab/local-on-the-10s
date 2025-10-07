# Screen Layout Reference

This document describes each screen layout in the Local on the 10s display, based on the authentic 2004-2005 style.

## Screen Rotation Sequence

The display automatically rotates through these screens:

1. **Current Conditions** (default: 10 seconds)
2. **The Week Ahead** (7-day forecast)
3. **Local Forecast** (text forecast)
4. **Regional Conditions** (map placeholder)

## Screen 1: Current Conditions

```
┌─────────────────────────────────────────────────────────┐
│         [Animated clouds in background]                 │
│                                                          │
│              current conditions                          │
│                                                          │
│  ╔════════════════════════════════════════════════╗     │
│  ║           [YOUR LOCATION NAME]                 ║     │
│  ╚════════════════════════════════════════════════╝     │
│  ╔════════════════════════════════════════════════╗     │
│  ║                                                ║     │
│  ║   ☀️                    HUMIDITY    69%        ║     │
│  ║                                                ║     │
│  ║  Sunny                  DEW POINT  65°        ║     │
│  ║                                                ║     │
│  ║   76°                   PRESSURE   30.02 inHg ║     │
│  ║                                                ║     │
│  ║                         VISIBILITY 10 miles   ║     │
│  ║                                                ║     │
│  ║                         WIND       SE 7       ║     │
│  ║                                                ║     │
│  ║                         GUSTS      None       ║     │
│  ╚════════════════════════════════════════════════╝     │
│                                                          │
│ CURRENTLY [Region] 76°        7:40    [LOGO]           │
└─────────────────────────────────────────────────────────┘
```

## Screen 2: The Week Ahead

```
┌─────────────────────────────────────────────────────────┐
│         [Animated clouds in background]                 │
│                                                          │
│               the week ahead                             │
│                                                          │
│  ╔════════════════════════════════════════════════╗     │
│  ║           [YOUR LOCATION NAME]                 ║     │
│  ╚════════════════════════════════════════════════╝     │
│  ╔════════════════════════════════════════════════╗     │
│  ║  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐    ║     │
│  ║  │ SAT │ │ SUN │ │ MON │ │ TUE │ │ WED │    ║     │
│  ║  │     │ │     │ │     │ │     │ │     │    ║     │
│  ║  │  ☀️ │ │ ⛈️  │ │ ⛈️  │ │ ⛅  │ │ ☀️ │    ║     │
│  ║  │     │ │     │ │     │ │     │ │     │    ║     │
│  ║  │Sunny│ │Storm│ │Storm│ │P.Cld│ │Sunny│    ║     │
│  ║  │     │ │     │ │     │ │     │ │     │    ║     │
│  ║  │  75 │ │  80 │ │  84 │ │  87 │ │  87 │    ║     │
│  ║  │  67 │ │  67 │ │  67 │ │  67 │ │  68 │    ║     │
│  ║  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘    ║     │
│  ╚════════════════════════════════════════════════╝     │
│                                                          │
│ CURRENTLY [Region] 76°        7:40    [LOGO]           │
└─────────────────────────────────────────────────────────┘
```

## Screen 3: Local Forecast

```
┌─────────────────────────────────────────────────────────┐
│         [Animated clouds in background]                 │
│                                                          │
│               local forecast                             │
│                                                          │
│  ╔════════════════════════════════════════════════╗     │
│  ║           [YOUR LOCATION NAME]                 ║     │
│  ╚════════════════════════════════════════════════╝     │
│  ╔════════════════════════════════════════════════╗     │
│  ║                                                ║     │
│  ║  Tonight                                       ║     │
│  ║  Scattered thunderstorms, especially during    ║     │
│  ║  the evening. Low 67. Winds E at 5 to 10     ║     │
│  ║  mph. Chance of rain 40%.                     ║     │
│  ║                                                ║     │
│  ║  Tomorrow                                      ║     │
│  ║  Partly cloudy with a chance of afternoon      ║     │
│  ║  thunderstorms. High 87. Low 68.              ║     │
│  ║                                                ║     │
│  ╚════════════════════════════════════════════════╝     │
│                                                          │
│ CURRENTLY [Region] 76°        7:40    [LOGO]           │
└─────────────────────────────────────────────────────────┘
```

## Screen 4: Regional Conditions

```
┌─────────────────────────────────────────────────────────┐
│         [Animated clouds in background]                 │
│                                                          │
│            regional conditions                           │
│                                                          │
│  ╔════════════════════════════════════════════════╗     │
│  ║           [YOUR LOCATION NAME]                 ║     │
│  ╚════════════════════════════════════════════════╝     │
│  ╔════════════════════════════════════════════════╗     │
│  ║                                                ║     │
│  ║        [Future: Regional weather map]          ║     │
│  ║                                                ║     │
│  ║     Could show nearby cities with temps        ║     │
│  ║                                                ║     │
│  ╚════════════════════════════════════════════════╝     │
│                                                          │
│ CURRENTLY [Region] 76°        7:40    [LOGO]           │
└─────────────────────────────────────────────────────────┘
```

## Configuration Impact on Display

| Configuration Field | Where It Appears | Example |
|-------------------|------------------|---------|
| **Display Name** | Green header bar on ALL screens | ATLANTA METRO |
| **Region Name** | Footer bar only | Atlanta Int'l |
| **Weather Entity** | All weather data | weather.home |
| **Display Duration** | Time on each screen | 10 seconds |

## Color Scheme

### Background Gradient
- Top: `#2b5898` (darker blue)
- Middle: `#5a8bc4` (medium blue)  
- Bottom: `#87b5dd` (lighter blue)
- Clouds: White with 15-20% opacity, floating left-to-right

### Location Header Bar (Green)
- Gradient: `#7fb842` (light green) to `#6a9c38` (darker green)
- Text: White, bold, UPPERCASE
- Example: "ATLANTA METRO", "NEW YORK CITY", "LONDON"

### Data Panels (Blue)
- Background: `rgba(30, 80, 150, 0.85)` (semi-transparent blue)
- Border: `rgba(255, 255, 255, 0.3)` (subtle white border)
- Box shadow: `0 6px 12px rgba(0, 0, 0, 0.4)`

### Footer Bar
- Background: `rgba(0, 0, 0, 0.7)` (dark semi-transparent)
- Text: White
- Logo area: Blue `#0066cc`

### Temperature Colors
- High temps: `#ffeb3b` (bright yellow)
- Low temps: `#b3e5fc` (light blue)
- Current temp: White

## Typography Reference

### Font Stack
```css
font-family: Arial, Helvetica, sans-serif;
```

### Font Sizes
- **Section headers**: 42px (lowercase, e.g., "current conditions")
- **Location header**: 28px (UPPERCASE, bold)
- **Large temperature**: 100px (bold)
- **Weather icons**: 56-80px
- **Forecast temps**: 32px (bold)
- **Detail labels**: 24px (normal)
- **Detail values**: 24px (bold)
- **Footer text**: 20-22px
- **Time display**: 22px (bold)

### Text Styles
- Section headers: `text-transform: lowercase`
- Location header: `text-transform: uppercase; font-weight: bold`
- All text: `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7)` for readability

## Animation Details

### Cloud Animation
```css
animation: float 60-80s linear infinite;
/* Moves clouds from left (-200px) to right (100vw + 250px) */
```

### Screen Transitions
```css
animation: fadeIn 0.8s ease-in;
/* Smooth fade between screens */
```

### Timing
- Cloud speed: 60-80 seconds for complete pass
- Screen rotation: Configurable (default 10 seconds)
- Fade duration: 0.8 seconds
- Time update: Every 1 second
- Weather update: Every 5 minutes

## Layout Grids

### Current Conditions Grid
```css
display: grid;
grid-template-columns: 1fr 2fr;
/* Left: Icon + temp, Right: Details in 2 columns */
```

### Forecast Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
/* Responsive grid, 5-7 cards depending on screen size */
```

### Detail Grid (Current Conditions)
```css
display: grid;
grid-template-columns: 1fr 1fr;
/* 2 columns of label-value pairs */
```

## Weather Icon Mapping

Emoji icons used for cross-platform compatibility:

| Condition | Icon | Unicode |
|-----------|------|---------|
| Sunny | ☀️ | U+2600 |
| Clear Night | 🌙 | U+1F319 |
| Partly Cloudy | ⛅ | U+26C5 |
| Cloudy | ☁️ | U+2601 |
| Rainy | 🌦️ | U+1F326 |
| Pouring | 🌧️ | U+1F327 |
| Snowy | ❄️ | U+2744 |
| Snowy-Rainy | 🌨️ | U+1F328 |
| Thunderstorm | ⛈️ | U+26C8 |
| Lightning | ⚡ | U+26A1 |
| Fog | 🌫️ | U+1F32B |
| Windy | 💨 | U+1F4A8 |
| Hail | 🧊 | U+1F9CA |

## Responsive Breakpoints

### Desktop/TV (1920px+)
- Full layout with all elements
- Maximum panel width: 900px
- Large text sizes maintained
- 5-7 forecast cards

### Tablet (768px - 1919px)
- Adjusted panel width: 100% with padding
- Slightly smaller text
- 4-5 forecast cards
- Maintains grid layouts

### Mobile (< 768px)
- Stacked layouts where needed
- Reduced padding
- 2-3 forecast cards
- Simplified details grid
- Still readable and functional

## Footer Bar Layout

```
┌─────────────────────────────────────────────────────────┐
│ CURRENTLY [Location] XX°    HH:MM    [LOCAL WEATHER]   │
└─────────────────────────────────────────────────────────┘
```

Components:
- **Left**: "CURRENTLY [Region or Display Name] [Temp]°"
- **Center**: Time in 12-hour format with AM/PM
- **Right**: Logo box with "LOCAL WEATHER" or custom text

## Dynamic Content Updates

### On Initial Load
1. Fetch configuration from Home Assistant API
2. Update all location headers with Display Name
3. Update footer with Region Name (or Display Name if blank)
4. Fetch weather data from configured entity
5. Render all screens
6. Start rotation timer

### Every Second
- Update time display in footer

### Every 5 Minutes
- Fetch latest weather data
- Update all screens with new data
- Maintain current rotation position

### Every X Seconds (Configurable)
- Rotate to next screen with fade animation
- Loop back to first screen after last

## Data Sources

### From Home Assistant Weather Entity
- `state`: Current condition (e.g., "sunny", "rainy")
- `temperature`: Current temperature
- `humidity`: Humidity percentage
- `pressure`: Atmospheric pressure
- `wind_speed`: Wind speed
- `wind_bearing`: Wind direction (e.g., "SE", "NW")
- `wind_gust_speed`: Gust speed (optional)
- `visibility`: Visibility distance (optional)
- `dew_point`: Dew point temperature (optional)
- `forecast`: Array of forecast objects with:
  - `datetime`: ISO date string
  - `condition`: Weather condition
  - `temperature`: High temperature
  - `templow`: Low temperature

### From Configuration
- `display_name`: Main location name for headers
- `region_name`: Optional subtitle for footer
- `display_duration`: Seconds per screen
- `weather_entity`: Entity ID to fetch data from

## Screen Dimensions

### Optimal Viewing
- **Minimum**: 1024x768
- **Recommended**: 1920x1080 or higher
- **Aspect Ratio**: 16:9 preferred
- **Orientation**: Landscape

### Panel Constraints
- **Maximum width**: 900px (centered)
- **Padding**: 30-60px on all sides
- **Content area**: Responsive within constraints

## Accessibility Features

### Text Readability
- High contrast white text on blue background
- Text shadows for enhanced readability
- Large font sizes for easy viewing from distance
- Clear visual hierarchy

### Color Considerations
- High/low temperatures use distinct colors
- Icons supplement text information
- No reliance on color alone for information

## Customization Points

Users can customize via Home Assistant UI:
- ✅ Display Name (location shown on screen)
- ✅ Region Name (optional footer location)
- ✅ Weather Entity (data source)
- ✅ Display Duration (time per screen)
- ✅ Show Radar (enable/disable radar screen)

Developers can customize via code:
- Cloud animation speeds
- Color schemes
- Font sizes
- Grid layouts
- Section order
- Additional screens

---

## Quick Reference

**Want to change your location name?**
1. Go to Settings → Devices & Services in Home Assistant
2. Find "Local on the 10s"
3. Click Configure
4. Update Display Name (e.g., "NEW YORK CITY")
5. Optionally update Region Name (e.g., "Central Park")
6. Save and refresh the display page

**See also**:
- [LOCATION_GUIDE.md](LOCATION_GUIDE.md) - Detailed location configuration
- [INSTALLATION.md](INSTALLATION.md) - Installation instructions
- [FAQ.md](FAQ.md) - Common questions and troubleshooting
