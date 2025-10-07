# Example Configurations

This directory contains example configurations for various use cases.

## Example 1: Basic Setup with Met.no

```yaml
# configuration.yaml
# Met.no is usually configured automatically by Home Assistant
# Just make sure you have the default weather integration enabled
```

Configuration in UI:
- **Location Name**: Home
- **Weather Entity**: weather.home
- **Display Duration**: 180 seconds
- **Auto Start**: Enabled

## Example 2: Pirate Weather Setup

First, install Pirate Weather integration and get your API key from https://pirateweather.net

```yaml
# configuration.yaml
weather:
  - platform: pirateweather
    api_key: YOUR_API_KEY_HERE
    latitude: 40.7128
    longitude: -74.0060
    mode: daily
```

Configuration in UI:
- **Location Name**: New York City
- **Weather Entity**: weather.pirateweather
- **Display Duration**: 180 seconds
- **Auto Start**: Enabled

## Example 3: Multiple Locations

Configure multiple instances for different locations:

Instance 1 - Home:
- **Location Name**: Home
- **Weather Entity**: weather.home
- **Display Duration**: 180 seconds

Instance 2 - Office:
- **Location Name**: Office  
- **Weather Entity**: weather.office
- **Display Duration**: 180 seconds

Instance 3 - Vacation Home:
- **Location Name**: Lake House
- **Weather Entity**: weather.lake_house
- **Display Duration**: 180 seconds

## Example 4: OpenWeatherMap

```yaml
# configuration.yaml
weather:
  - platform: openweathermap
    api_key: YOUR_API_KEY_HERE
    mode: daily
```

Configuration in UI:
- **Location Name**: My Location
- **Weather Entity**: weather.openweathermap
- **Display Duration**: 180 seconds
- **Auto Start**: Enabled

## Example 5: Kiosk Mode (Fullscreen Display)

For a dedicated weather display on Raspberry Pi or tablet:

1. Install Local on the 10s as usual
2. Configure with your preferred settings
3. Set up browser to auto-start in kiosk mode

### Raspberry Pi Kiosk Setup

```bash
# Install Chromium
sudo apt-get install chromium-browser unclutter

# Create autostart script
nano ~/.config/lxsession/LXDE-pi/autostart

# Add these lines:
@chromium-browser --kiosk --app=http://YOUR_HA_IP:8123/local-on-the-10s
@unclutter -idle 0
@xset s off
@xset -dpms
@xset s noblank
```

## Example 6: Dashboard Integration

Embed in a Home Assistant dashboard using an iframe card:

```yaml
# dashboard configuration
type: iframe
url: /local-on-the-10s
aspect_ratio: 16:9
```

Or use a webpage card:

```yaml
type: custom:webpage-card
url: /local-on-the-10s
aspect_ratio: 16:9
```

## Example 7: Automation to Open Display

Create an automation to open the display at specific times:

```yaml
# automations.yaml
- alias: "Show Weather at Morning"
  trigger:
    - platform: time
      at: "07:00:00"
  action:
    - service: browser_mod.navigate
      data:
        path: /local-on-the-10s
      target:
        device_id: bedroom_tablet
```

## Example 8: Custom Timing

To change how long each section displays, edit `www/index.html`:

Find this line:
```javascript
setInterval(rotateSection, 10000); // 10000 = 10 seconds
```

Change to your preference:
```javascript
setInterval(rotateSection, 15000); // 15 seconds per section
setInterval(rotateSection, 20000); // 20 seconds per section
setInterval(rotateSection, 30000); // 30 seconds per section
```

## Example 9: Multiple Weather Sources (Advanced)

You can set up different weather sources for comparison:

```yaml
# configuration.yaml
weather:
  - platform: met
    name: MetNo Weather
  
  - platform: pirateweather
    api_key: YOUR_API_KEY
    name: Pirate Weather
    
  - platform: openweathermap
    api_key: YOUR_API_KEY
    name: OpenWeather
```

Then create three separate Local on the 10s instances, each using a different entity.

## Example 10: International Setup

### European Location (Metric)
- Uses Met.no (default for most of Europe)
- Temperature in Celsius
- Wind in km/h
- Pressure in hPa

### US Location (Imperial)
```yaml
# configuration.yaml
weather:
  - platform: weather.gov
    name: NWS Weather
```
- Temperature in Fahrenheit
- Wind in mph
- Pressure in inHg

### Custom Unit Configuration
Most weather integrations respect Home Assistant's unit system:

```yaml
# configuration.yaml
homeassistant:
  unit_system: metric  # or imperial
```

## Tips for Best Results

1. **Use a reliable weather provider**: Met.no and Pirate Weather are highly recommended
2. **Stable internet connection**: Ensures consistent updates
3. **Dedicated display**: Best experience on a tablet or monitor
4. **Fullscreen mode**: Press F11 for immersive display
5. **Good resolution**: 1920x1080 or higher recommended
6. **Modern browser**: Chrome or Firefox for best performance

## Troubleshooting Common Setups

### Weather entity not found
Make sure your weather integration is properly configured and the entity exists in Developer Tools → States.

### Display not updating
Check that your weather provider is updating regularly. Some free tiers have rate limits.

### Wrong units showing
Check your Home Assistant unit system configuration and your weather provider's settings.

### Performance issues
Try reducing animation complexity or using a more powerful device for display.

## Need Help?

Check the [FAQ](../FAQ.md) or open an issue on GitHub!
