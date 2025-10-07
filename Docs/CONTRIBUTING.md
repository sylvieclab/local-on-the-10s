# Contributing to Local on the 10s

Thank you for your interest in contributing to Local on the 10s! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

When reporting bugs, include:
- Home Assistant version
- Local on the 10s version
- Weather provider being used
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser console logs (if applicable)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

#### Pull Request Guidelines

- Follow the existing code style
- Update documentation as needed
- Add or update tests if applicable
- Ensure all tests pass
- Write clear commit messages
- Reference related issues

## Development Setup

### Prerequisites

- Home Assistant (2023.1.0 or newer)
- Python 3.11+
- Git
- A text editor (VS Code recommended)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/local-on-the-10s.git
cd local-on-the-10s
```

2. Create a symbolic link to your Home Assistant custom_components folder:
```bash
# Linux/Mac
ln -s $(pwd)/custom_components/local_on_the_10s ~/.homeassistant/custom_components/local_on_the_10s

# Windows (as Administrator)
mklink /D "%USERPROFILE%\.homeassistant\custom_components\local_on_the_10s" "%CD%\custom_components\local_on_the_10s"
```

3. Restart Home Assistant

4. Make changes to the code

5. Test your changes:
   - Restart Home Assistant after Python changes
   - Refresh browser (Ctrl+F5) after HTML/CSS/JS changes

## Project Structure

```
local-on-the-10s/
├── custom_components/
│   └── local_on_the_10s/
│       ├── __init__.py          # Main integration setup
│       ├── config_flow.py       # Configuration UI
│       ├── const.py             # Constants
│       ├── manifest.json        # Integration metadata
│       ├── translations/        # UI translations
│       │   └── en.json
│       └── www/                 # Frontend files
│           └── index.html       # Main display page
├── README.md
├── INSTALLATION.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── .gitignore
```

## Coding Standards

### Python

- Follow PEP 8 style guide
- Use type hints
- Write docstrings for functions and classes
- Keep functions focused and small
- Use meaningful variable names

Example:
```python
async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Local on the 10s from a config entry.
    
    Args:
        hass: Home Assistant instance
        entry: Config entry for this integration
        
    Returns:
        True if setup was successful
    """
    # Implementation
```

### JavaScript

- Use modern ES6+ syntax
- Keep functions small and focused
- Add comments for complex logic
- Use meaningful variable names
- Handle errors gracefully

Example:
```javascript
/**
 * Fetch weather data from Home Assistant API
 * @returns {Promise<void>}
 */
async function fetchWeather() {
    try {
        // Implementation
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}
```

### CSS

- Use meaningful class names
- Keep selectors simple
- Organize by component
- Add comments for complex styles
- Support responsive design

## Testing

### Manual Testing

1. Install the integration in a test Home Assistant instance
2. Configure with different weather providers
3. Test all configuration options
4. Verify display on different browsers
5. Check responsive design on mobile/tablet
6. Test error handling (invalid entities, network issues)

### Automated Testing

Currently, the project doesn't have automated tests. Contributions to add testing are welcome!

## Documentation

When contributing, please update relevant documentation:

- README.md - Overview and quick start
- INSTALLATION.md - Installation instructions
- CHANGELOG.md - Version history
- Code comments - Inline documentation

## Release Process

1. Update version in `manifest.json`
2. Update CHANGELOG.md
3. Create a git tag: `git tag -a v0.1.0 -m "Release v0.1.0"`
4. Push tag: `git push origin v0.1.0`
5. Create GitHub release with changelog

## Questions?

Feel free to open an issue with the "question" label or reach out to the maintainers.

## Recognition

Contributors will be recognized in the README and release notes. Thank you for making Local on the 10s better!
