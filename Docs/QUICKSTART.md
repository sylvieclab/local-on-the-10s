# Quick Start Guide

Get Local on the 10s running in 5 minutes!

## Step 1: Install (Choose One Method)

### Option A: Manual Installation
```bash
# Copy files to Home Assistant
cp -r custom_components/local_on_the_10s /config/custom_components/
```

### Option B: HACS Installation
1. Open HACS → Integrations
2. Click ⋮ → Custom repositories
3. Add: `https://github.com/yourusername/local-on-the-10s`
4. Search and install "Local on the 10s"

## Step 2: Restart Home Assistant

Go to **Settings** → **System** → **Restart**

## Step 3: Add Integration

1. **Settings** → **Devices & Services**
2. Click **+ Add Integration**
3. Search for "Local on the 10s"
4. Click to configure

## Step 4: Configure

### Required:
- **Location Name**: "Home" (or your preference)
- **Weather Entity**: Select from dropdown (e.g., `weather.home`)

### Optional:
- **Display Duration**: 180 seconds (default)
- **Auto Start**: Enabled (recommended)

Click **Submit**

## Step 5: View Display

Look for **"Local on the 10s"** in your sidebar → Click it!

You should see:
- ☀️ Animated clouds floating across a blue sky
- 🌡️ Current temperature and conditions
- 📊 5-day forecast (rotates every 10 seconds)

## Troubleshooting

### Not seeing the integration?
- Verify files are in `/config/custom_components/local_on_the_10s/`
- Check Home Assistant logs
- Try restarting again

### No weather data?
- Confirm your weather entity is working (Developer Tools → States)
- Try a different weather entity
- Check browser console (F12)

### Panel not in sidebar?
- Click your profile (bottom left)
- Scroll to "Local on the 10s"
- Enable the toggle

## Next Steps

- 📺 Use fullscreen mode (F11) for a dedicated display
- 🎨 Customize timing in `www/index.html`
- 🌐 Try different weather providers
- 📱 Access from tablet or phone

## Need More Help?

See [INSTALLATION.md](INSTALLATION.md) for detailed instructions.

## Enjoy!

Your nostalgic weather display is ready! 🌤️
