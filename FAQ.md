# Frequently Asked Questions (FAQ)

## General Questions

### What is Local on the 10s?

Local on the 10s is a Home Assistant custom integration that displays weather information in a nostalgic format inspired by mid-2000s local weather forecasts. It features animated clouds, current conditions, and multi-day forecasts with a beautiful, retro aesthetic.

### Is this affiliated with The Weather Channel?

No. This is an independent fan project inspired by classic weather displays. It is not affiliated with, endorsed by, or connected to The Weather Channel in any way.

### Why is it called "Local on the 10s"?

The name pays homage to "Local on the 8s" while being different enough to avoid trademark issues. We chose "10s" as a friendly nod to the original while making it clear this is a separate, independent project.

### Is it free?

Yes! Local on the 10s is completely free and open source under the MIT License. You can use, modify, and distribute it freely.

## Installation & Setup

### What do I need to run this?

- Home Assistant (version 2023.1.0 or newer)
- A configured weather integration (Met.no, Pirate Weather, OpenWeatherMap, etc.)
- A modern web browser

### How do I install it?

See the [QUICKSTART.md](QUICKSTART.md) guide for a 5-minute installation, or [INSTALLATION.md](INSTALLATION.md) for detailed instructions.

### Does it work with HACS?

Yes! You can install it through HACS by adding it as a custom repository.

### Can I use it without Home Assistant?

No. This integration is specifically designed for Home Assistant and relies on its infrastructure for weather data and panel display.

## Weather Data

### Which weather providers are supported?

Local on the 10s works with **any** Home Assistant weather entity, including:
- Met.no (Norwegian Meteorological Institute)
- Pirate Weather
- OpenWeatherMap
- AccuWeather
- Weather.gov (US only)
- Any other Home Assistant weather integration

### Does it work internationally?

Yes! It works anywhere in the world with any weather provider that covers your location.

### Does it support metric and imperial units?

Yes. It automatically uses the units from your chosen weather entity. Most weather integrations let you configure your preferred units.

### How often does it update weather data?

The display fetches new weather data every 5 minutes automatically.

### Can I use multiple weather sources?

Currently, each instance of Local on the 10s uses one weather entity. However, you can configure multiple instances for different locations.

## Display & Appearance

### How do I make it fullscreen?

Press F11 on your keyboard to enter fullscreen mode. Press F11 again to exit.

### Can I customize the colors?

Currently, the color scheme is fixed to maintain the authentic 2004 aesthetic. Customizable themes are planned for a future release (see [ROADMAP.md](ROADMAP.md)).

### Why does the display rotate between views?

This mimics the classic weather display format where it would cycle through current conditions and forecasts. The rotation happens every 10 seconds by default.

### Can I change how long each view displays?

Yes, but it requires editing the code. In `www/index.html`, find this line near the end:

```javascript
setInterval(rotateSection, 10000); // 10000 = 10 seconds
```

Change `10000` to your desired duration in milliseconds (e.g., `15000` for 15 seconds).

### Can I add background music?

Not yet, but this feature is on the roadmap. We're looking for royalty-free smooth jazz tracks to include.

### Does it work on mobile?

Yes, the display is responsive and works on tablets and phones. However, it's optimized for larger displays like tablets or desktop monitors.

## Technical Questions

### What programming languages are used?

- **Backend**: Python (Home Assistant integration)
- **Frontend**: Vanilla HTML, CSS, and JavaScript (no frameworks or build process)

### Does it require internet access?

It needs internet to fetch weather data (unless your weather provider is local). The display itself can work on your local network once the data is loaded.

### Does it use a lot of resources?

No. The integration is very lightweight with minimal CPU and memory usage. The animations use hardware-accelerated CSS for smooth performance.

### Can I run it on a Raspberry Pi?

Yes! It works great on Raspberry Pi, especially as a dedicated weather display kiosk.

### Does it work offline?

The display requires weather data from Home Assistant, which typically needs internet access. However, it will continue to show the last fetched data if the connection is lost.

### Is my data private?

Yes. All data stays within your Home Assistant instance. There are no external API calls, tracking, or telemetry.

## Troubleshooting

### The integration doesn't appear after installation

1. Verify files are in `/config/custom_components/local_on_the_10s/`
2. Restart Home Assistant
3. Clear your browser cache (Ctrl+F5)
4. Check Home Assistant logs for errors

### Weather data isn't showing

1. Verify your weather entity is working:
   - Go to Developer Tools → States
   - Search for your weather entity (e.g., `weather.home`)
   - Check that it has data

2. Try selecting a different weather entity in the configuration

3. Open browser console (F12) and check for errors

### The panel isn't in my sidebar

1. Click your profile icon (bottom left of Home Assistant)
2. Scroll down to find "Local on the 10s"
3. Make sure the toggle is enabled

### Animations are choppy or slow

1. Try a different browser (Chrome usually performs best)
2. Close other tabs/applications
3. Check your device's CPU usage
4. Reduce animation complexity (would require code modification)

### The display looks wrong on my screen

1. Try refreshing with Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)
2. Ensure you're using a modern browser
3. Check that your browser window isn't zoomed in/out
4. Try a different screen resolution

## Advanced Usage

### Can I embed this in a dashboard?

Yes! You can use an iframe card or webpage card in your Home Assistant dashboard to embed the display.

### Can I trigger automations based on the display?

The display itself doesn't trigger automations, but you can create automations based on the same weather entity data.

### Can I customize the layout?

Yes, but it requires editing the HTML/CSS code. The display is fully customizable if you're comfortable with web development.

### Can I add radar imagery?

Not yet, but radar integration is planned for version 0.2.0 (see [ROADMAP.md](ROADMAP.md)).

### Can I show multiple locations?

Currently, each instance shows one location. You can configure multiple instances for different locations, though multi-location support in one display is planned for the future.

## Contributing

### How can I contribute?

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on how to contribute code, report bugs, or suggest features.

### Where do I report bugs?

Open an issue on GitHub with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your Home Assistant version
- Browser and OS information
- Any error messages or logs

### Can I suggest new features?

Absolutely! Open a GitHub issue with the "enhancement" label. Check [ROADMAP.md](ROADMAP.md) first to see if it's already planned.

### Where can I get help?

1. Check this FAQ
2. Read [INSTALLATION.md](INSTALLATION.md) and [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)
3. Search existing GitHub issues
4. Open a new issue if you can't find an answer
5. Ask in the Home Assistant community forums

## Future Plans

### What features are coming next?

Check out [ROADMAP.md](ROADMAP.md) for the complete list of planned features.

### When will version X.X.X be released?

We don't have fixed release dates. Features are released when they're ready and thoroughly tested.

### Will there be a standalone version?

Not currently planned. The integration is designed specifically for Home Assistant's ecosystem.

## Miscellaneous

### Can I use this commercially?

Yes, under the MIT License you can use it for commercial purposes. See [LICENSE](LICENSE) for details.

### Can I modify the code?

Yes! The MIT License allows you to modify and distribute the code. We welcome improvements!

### Who maintains this project?

This is a community-driven open source project. Contributors are listed in the GitHub repository.

### How can I support the project?

- ⭐ Star the repository on GitHub
- 🐛 Report bugs and issues
- 💡 Suggest features
- 🔧 Contribute code
- 📖 Improve documentation
- 🗣️ Tell others about it

---

## Still Have Questions?

If your question isn't answered here, feel free to:
- Open an issue on GitHub
- Ask in the Home Assistant community forums
- Check the project documentation

We're here to help! 🌤️
