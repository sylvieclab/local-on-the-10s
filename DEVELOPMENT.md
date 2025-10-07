# Development Guide

This guide is for developers who want to contribute to or modify Local on the 10s.

## Table of Contents
- [Development Environment Setup](#development-environment-setup)
- [Project Architecture](#project-architecture)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Debugging](#debugging)
- [Code Style](#code-style)
- [Common Development Tasks](#common-development-tasks)

## Development Environment Setup

### Prerequisites
- Home Assistant (2023.1.0+)
- Python 3.11+
- Git
- Code editor (VS Code recommended)
- Modern web browser with DevTools

### Initial Setup

1. **Fork and Clone**
```bash
git clone https://github.com/YOUR_USERNAME/local-on-the-10s.git
cd local-on-the-10s
```

2. **Create Development Link**

Linux/Mac:
```bash
ln -s $(pwd)/custom_components/local_on_the_10s ~/.homeassistant/custom_components/local_on_the_10s
```

Windows (PowerShell as Administrator):
```powershell
New-Item -ItemType SymbolicLink -Path "$env:USERPROFILE\.homeassistant\custom_components\local_on_the_10s" -Target "$PWD\custom_components\local_on_the_10s"
```

3. **Restart Home Assistant**

## Project Architecture

### Directory Structure
```
custom_components/local_on_the_10s/
├── __init__.py              # Integration initialization
├── config_flow.py           # Configuration UI
├── const.py                 # Constants
├── manifest.json            # Metadata
├── translations/
│   └── en.json             # UI translations
└── www/
    └── index.html          # Complete frontend (HTML+CSS+JS)
```

### Component Lifecycle

```python
# 1. Home Assistant loads custom_components
# 2. __init__.py::async_setup() is called
# 3. Integration registered with Home Assistant
# 4. async_setup_entry() called for each config entry
# 5. Panel registered and static files served
# 6. Frontend loads and fetches weather data
```

### Data Flow

```
Weather Provider (Met.no, etc.)
    ↓
Home Assistant Weather Entity
    ↓
Home Assistant API (/api/states)
    ↓
Frontend JavaScript (fetch)
    ↓
Display Rendering (HTML/CSS)
```

## Making Changes

### Backend Changes (Python)

Files: `__init__.py`, `config_flow.py`, `const.py`

After making changes:
1. Save the file
2. Restart Home Assistant
3. Check logs: Settings → System → Logs

**Common Tasks:**

Add new configuration option:
```python
# config_flow.py
data_schema = vol.Schema({
    # ... existing fields ...
    vol.Optional("new_option", default=True): cv.boolean,
})
```

### Frontend Changes (HTML/CSS/JavaScript)

File: `www/index.html`

After making changes:
1. Save the file
2. Hard refresh browser: Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac)
3. Check browser console (F12)

**Common Tasks:**

Change animation speed:
```css
/* Find the animation declaration */
animation: float 60s linear infinite;

/* Change duration */
animation: float 45s linear infinite;  /* Faster */
animation: float 90s linear infinite;  /* Slower */
```

Add new weather detail:
```javascript
// In updateDisplay() function
const currentHTML = `
    ...
    <div class="detail-item">
        <div class="detail-label">New Detail</div>
        <div class="detail-value">${attributes.new_value}</div>
    </div>
    ...
`;
```

## Testing

### Manual Testing Checklist

- [ ] Integration installs without errors
- [ ] Configuration flow works
- [ ] Panel appears in sidebar
- [ ] Weather data loads correctly
- [ ] Current conditions display properly
- [ ] Forecast displays correctly
- [ ] Animations run smoothly
- [ ] Rotates between views
- [ ] Updates every 5 minutes
- [ ] Works with different weather entities
- [ ] Responsive on mobile/tablet
- [ ] No console errors
- [ ] No Home Assistant log errors

### Testing with Different Weather Providers

1. Met.no (default):
```yaml
# Usually auto-configured
weather:
  - platform: met
```

2. Pirate Weather:
```yaml
weather:
  - platform: pirateweather
    api_key: test_key
```

3. Mock Entity:
Create a template weather entity for testing:
```yaml
template:
  - weather:
      - name: "Test Weather"
        condition_template: "sunny"
        temperature_template: "22"
        humidity_template: "45"
```

### Browser Testing

Test in multiple browsers:
- Chrome/Chromium
- Firefox
- Safari (if on Mac)
- Edge

Check responsive design:
- Desktop (1920x1080)
- Tablet (1024x768)
- Mobile (375x667)

## Debugging

### Python Debugging

Add logging:
```python
import logging
_LOGGER = logging.getLogger(__name__)

# In your code
_LOGGER.debug("Debug message")
_LOGGER.info("Info message")
_LOGGER.warning("Warning message")
_LOGGER.error("Error message")
```

View logs:
- Home Assistant UI: Settings → System → Logs
- Command line: `tail -f ~/.homeassistant/home-assistant.log`

### JavaScript Debugging

Use browser console (F12):
```javascript
// Add console logging
console.log("Variable value:", myVariable);
console.log("Weather data:", weatherData);

// Inspect objects
console.dir(weatherData);

// Debug network requests
// Check Network tab in DevTools
```

Common issues:
- **No data loading**: Check Network tab for failed API calls
- **Incorrect display**: Inspect elements to check computed styles
- **Animation issues**: Check Performance tab
- **Errors**: Console tab shows JavaScript errors

### Home Assistant Debugging

Enable debug logging:
```yaml
# configuration.yaml
logger:
  default: warning
  logs:
    custom_components.local_on_the_10s: debug
```

## Code Style

### Python

Follow PEP 8 and Home Assistant conventions:

```python
"""Module docstring."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up from config entry.
    
    Args:
        hass: Home Assistant instance.
        entry: Config entry.
        
    Returns:
        True if setup successful.
    """
    # Implementation
    return True
```

### JavaScript

Use modern ES6+ syntax:

```javascript
// Use const/let, not var
const myVariable = "value";
let counter = 0;

// Use arrow functions
const fetchData = async () => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

// Use template literals
const message = `Temperature is ${temp}°C`;

// Destructure when possible
const { temperature, humidity } = weatherData.attributes;
```

### CSS

Organize styles logically:

```css
/* Component styles */
.component-name {
    /* Layout */
    display: flex;
    position: relative;
    
    /* Sizing */
    width: 100%;
    height: auto;
    
    /* Spacing */
    margin: 10px;
    padding: 20px;
    
    /* Visual */
    background: white;
    border: 1px solid #ccc;
    
    /* Typography */
    font-size: 16px;
    color: #333;
    
    /* Animation */
    transition: all 0.3s ease;
}
```

## Common Development Tasks

### Adding a New Configuration Option

1. Add to config flow schema (`config_flow.py`):
```python
vol.Optional("my_option", default=True): cv.boolean,
```

2. Add translation (`translations/en.json`):
```json
"data": {
    "my_option": "My Option Description"
}
```

3. Use in code (`__init__.py` or `www/index.html`):
```python
my_option = entry.data.get("my_option", True)
```

### Adding a New Display Section

1. Add HTML structure in `www/index.html`:
```html
<div id="new-section" class="weather-section">
    <div class="new-content">
        <!-- Your content -->
    </div>
</div>
```

2. Add to sections array:
```javascript
const sections = ['current', 'forecast', 'new'];
```

3. Add update logic:
```javascript
function updateNewSection() {
    const section = document.getElementById('new-section');
    section.innerHTML = `...`;
}
```

### Modifying Animations

Find animation in CSS:
```css
@keyframes animationName {
    from { /* start state */ }
    to { /* end state */ }
}
```

Adjust properties:
- **Duration**: Change timing (e.g., `60s` → `45s`)
- **Easing**: Change timing function (e.g., `linear` → `ease-in-out`)
- **Properties**: Modify what changes (e.g., `transform`, `opacity`)

### Adding Weather Icons

Update the `weatherIcons` object:
```javascript
const weatherIcons = {
    'existing-condition': '☀️',
    'new-condition': '🌈',  // Add new mapping
};
```

### Customizing Colors

Find color definitions in CSS:
```css
background: linear-gradient(to bottom, 
    #4a90e2 0%,    /* Top color */
    #87ceeb 50%,   /* Middle color */
    #e0f6ff 100%   /* Bottom color */
);
```

Change hex values to your preference.

## Performance Optimization

### JavaScript Performance

```javascript
// Cache DOM queries
const element = document.getElementById('my-element');

// Use event delegation
document.addEventListener('click', (e) => {
    if (e.target.matches('.my-class')) {
        // Handle click
    }
});

// Debounce frequent updates
let timeout;
function debouncedUpdate() {
    clearTimeout(timeout);
    timeout = setTimeout(actualUpdate, 300);
}
```

### CSS Performance

```css
/* Use hardware acceleration */
.animated-element {
    will-change: transform;
    transform: translateZ(0);
}

/* Avoid expensive properties */
/* Good */
transform: translateX(10px);
opacity: 0.5;

/* Avoid if possible */
box-shadow: 0 0 10px rgba(0,0,0,0.5);
filter: blur(5px);
```

## Submitting Changes

1. Create a branch:
```bash
git checkout -b feature/my-feature
```

2. Make and test changes

3. Commit with clear message:
```bash
git add .
git commit -m "Add feature: description"
```

4. Push and create pull request:
```bash
git push origin feature/my-feature
```

5. Fill out PR template

## Resources

- [Home Assistant Developer Docs](https://developers.home-assistant.io/)
- [Home Assistant Architecture](https://developers.home-assistant.io/docs/architecture_index)
- [Python Style Guide (PEP 8)](https://pep8.org/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)

## Getting Help

- Check existing issues on GitHub
- Ask in Home Assistant developer Discord
- Review Home Assistant integration examples
- Post questions in issues with "question" label

Happy coding! 🚀
