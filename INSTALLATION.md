# Installation Guide for Local on the 10s

## Prerequisites

- Home Assistant 2023.1.0 or newer
- A configured weather integration (Met.no, Pirate Weather, OpenWeatherMap, etc.)

## Method 1: Manual Installation

### Step 1: Download the Integration

1. Download or clone this repository
2. Locate the `custom_components/local_on_the_10s` folder

### Step 2: Copy to Home Assistant

1. Copy the entire `local_on_the_10s` folder to your Home Assistant's `custom_components` directory
   - The path should be: `<config_dir>/custom_components/local_on_the_10s/`
   - If the `custom_components` folder doesn't exist, create it in your Home Assistant configuration directory

Your directory structure should look like:
```
config/
├── custom_components/
│   └── local_on_the_10s/
│       ├── __init__.py
│       ├── config_flow.py
│       ├── const.py
│       ├── manifest.json
│       ├── translations/
│       │   └── en.json
│       └── www/
│           └── index.html
```

### Step 3: Restart Home Assistant

1. Go to **Settings** → **System** → **Restart**
2. Wait for Home Assistant to fully restart

### Step 4: Add the Integration

1. Go to **Settings** → **Devices & Services**
2. Click **+ Add Integration** (bottom right)
3. Search for "Local on the 10s"
4. Click on it to start configuration

### Step 5: Configure

1. **Location Name**: Enter a name for your location (e.g., "Home", "Office")
2. **Weather Entity**: Select your weather entity from the dropdown
   - This should be an entity like `weather.home`, `weather.forecast_home`, etc.
3. **Display Duration**: Set how long each screen should display (60-600 seconds)
   - Default is 180 seconds (3 minutes)
4. **Auto Start**: Enable if you want the display to start automatically

### Step 6: Access the Display

1. Look for **"Local on the 10s"** in your Home Assistant sidebar
2. Click it to open the weather display
3. The display will show:
   - Current conditions (temperature, humidity, wind, pressure)
   - 5-day forecast with high/low temperatures

## Method 2: HACS Installation

### Step 1: Add Custom Repository (First Time Only)

1. Open **HACS** in Home Assistant
2. Click on **Integrations**
3. Click the **three dots** (⋮) in the top right corner
4. Select **Custom repositories**
5. Add the repository URL: `https://github.com/yourusername/local-on-the-10s`
6. Select **Integration** as the category
7. Click **Add**

### Step 2: Install via HACS

1. In HACS, go to **Integrations**
2. Click **+ Explore & Download Repositories**
3. Search for "Local on the 10s"
4. Click on it and then click **Download**
5. Restart Home Assistant
6. Follow Steps 4-6 from the Manual Installation method above

## Verifying Installation

After installation, you should see:

1. A new panel in the sidebar called "Local on the 10s"
2. The integration listed under **Settings** → **Devices & Services**
3. Weather data displaying with smooth animations

## Troubleshooting

### Integration Not Appearing

- **Check file location**: Ensure files are in `config/custom_components/local_on_the_10s/`
- **Check permissions**: Ensure Home Assistant can read the files
- **Check logs**: Go to **Settings** → **System** → **Logs** and search for "local_on_the_10s"
- **Restart again**: Sometimes a second restart helps

### Weather Data Not Loading

1. **Verify weather entity**:
   - Go to **Developer Tools** → **States**
   - Search for your weather entity (e.g., `weather.home`)
   - Ensure it has data and is updating

2. **Check entity selection**:
   - Go to **Settings** → **Devices & Services**
   - Find "Local on the 10s" and click **Configure**
   - Verify the correct weather entity is selected

3. **Browser console**:
   - Open the display page
   - Press F12 to open browser developer tools
   - Check the Console tab for errors

### Display Issues

- **Clear cache**: Press Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)
- **Try different browser**: Test in Chrome, Firefox, or Edge
- **Check responsive mode**: Some displays work better in fullscreen

### Panel Not in Sidebar

1. Click your **profile** (bottom left)
2. Scroll down to **"Local on the 10s"**
3. Make sure it's **enabled** (toggle should be on)

## Using with Different Weather Providers

### Met.no (Default)

Already installed by default in Home Assistant:
- Entity: `weather.home` or `weather.forecast_home`

### Pirate Weather

1. Install Pirate Weather integration from HACS
2. Get API key from [pirateweather.net](https://pirateweather.net)
3. Configure with your coordinates
4. Select `weather.pirateweather` as your entity

### OpenWeatherMap

1. Install OpenWeatherMap integration
2. Get API key from [openweathermap.org](https://openweathermap.org)
3. Configure with your location
4. Select your OpenWeatherMap entity

## Advanced Configuration

### Fullscreen Display

To use as a dedicated weather display:

1. Open the display page
2. Press F11 for fullscreen mode
3. Consider using a tablet or dedicated screen

### Auto-start at Boot

Create an automation to open the display automatically:

```yaml
automation:
  - alias: "Auto-start Weather Display"
    trigger:
      - platform: homeassistant
        event: start
    action:
      - delay: '00:00:30'
      - service: browser_mod.navigate
        target:
          device_id: your_device_id
        data:
          path: /local-on-the-10s
```

### Custom Timing

The display rotates every 10 seconds by default. To customize, edit the `www/index.html` file and change:

```javascript
// Change this line (near the end of the file)
setInterval(rotateSection, 10000); // 10000 = 10 seconds
```

## Uninstallation

1. Go to **Settings** → **Devices & Services**
2. Find "Local on the 10s"
3. Click the three dots (⋮) and select **Delete**
4. Remove the `custom_components/local_on_the_10s` folder
5. Restart Home Assistant

## Need Help?

- Check the [GitHub Issues](https://github.com/yourusername/local-on-the-10s/issues)
- Review Home Assistant logs
- Ask in the Home Assistant Community forums
