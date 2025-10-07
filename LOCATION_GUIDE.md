# Location Configuration Guide

## Setting Up Your Location Names

Local on the 10s allows you to customize all location names displayed on the screen to match your specific area. This guide explains how to configure your location properly.

## Configuration Fields

### 1. Location Name
**Field**: `location_name`  
**Example**: `Home`, `Office`, `Vacation House`  
**Purpose**: Internal identifier for Home Assistant (not displayed on screen)

This is used by Home Assistant to identify the configuration and won't appear in the weather display.

### 2. Display Name
**Field**: `display_name`  
**Example**: `ATLANTA METRO`, `NEW YORK CITY`, `LONDON`, `TOKYO`  
**Purpose**: The main location name shown on all screens  
**Format**: UPPERCASE recommended (matches authentic style)

This appears at the top of every weather screen in the green header bar.

**Examples by Region**:
- **US Cities**: `ATLANTA METRO`, `CHICAGO`, `LOS ANGELES`, `MIAMI`
- **US Regions**: `SOUTH FLORIDA`, `NORTHEAST OHIO`, `PUGET SOUND`
- **International**: `GREATER LONDON`, `PARIS`, `SYDNEY`, `TORONTO`
- **Rural Areas**: `JEFFERSON COUNTY`, `BLUE RIDGE MOUNTAINS`

### 3. Region/Station Name
**Field**: `region_name`  
**Example**: `Atlanta Int'l`, `Central Park`, `Heathrow`  
**Purpose**: Optional subtitle for more specific location  
**Format**: Mixed case

This appears in the footer bar as "CURRENTLY [Region Name]" along with the current temperature.

**Examples**:
- **Airports**: `Atlanta Int'l`, `O'Hare`, `LAX`
- **Landmarks**: `Central Park`, `Downtown`, `City Centre`
- **Neighborhoods**: `Midtown`, `Suburbs`, `East Side`
- Leave blank to use the Display Name in footer

## Configuration Examples

### Example 1: Major US City
```yaml
Location Name: Home
Display Name: ATLANTA METRO
Region Name: Atlanta Int'l
Weather Entity: weather.atlanta
```
**Result**:
- Screen headers: "ATLANTA METRO"
- Footer: "CURRENTLY Atlanta Int'l 76°"

### Example 2: International City
```yaml
Location Name: London Office
Display Name: GREATER LONDON
Region Name: Heathrow
Weather Entity: weather.london_heathrow
```
**Result**:
- Screen headers: "GREATER LONDON"
- Footer: "CURRENTLY Heathrow 12°C"

### Example 3: Rural/Regional Area
```yaml
Location Name: Mountain House
Display Name: BLUE RIDGE MOUNTAINS
Region Name: Asheville
Weather Entity: weather.asheville
```
**Result**:
- Screen headers: "BLUE RIDGE MOUNTAINS"
- Footer: "CURRENTLY Asheville 18°C"

### Example 4: Suburb/Neighborhood
```yaml
Location Name: Home
Display Name: NORTHERN SUBURBS
Region Name: Downtown Chicago
Weather Entity: weather.chicago
```
**Result**:
- Screen headers: "NORTHERN SUBURBS"
- Footer: "CURRENTLY Downtown Chicago 72°F"

### Example 5: Simple Setup (No Region)
```yaml
Location Name: Home
Display Name: SEATTLE
Region Name: (leave blank)
Weather Entity: weather.seattle
```
**Result**:
- Screen headers: "SEATTLE"
- Footer: "CURRENTLY SEATTLE 58°F"

## Where Names Appear

### Display Name (`display_name`)
Appears on these screens in the green header bar:
- ✅ Current Conditions
- ✅ The Week Ahead (Forecast)
- ✅ Local Forecast (Text)
- ✅ Regional Conditions
- ✅ Radar (if enabled)

### Region Name (`region_name`)
Appears in:
- ✅ Footer bar: "CURRENTLY [Region Name] XX°"
- If blank, uses Display Name instead

## Styling Tips

### For Authentic Look

1. **Use UPPERCASE for Display Name**
   - ✅ `ATLANTA METRO`
   - ❌ `Atlanta Metro`

2. **Use Mixed Case for Region Name**
   - ✅ `Atlanta Int'l`
   - ✅ `Central Park`
   - ❌ `ATLANTA INT'L`

3. **Be Concise**
   - ✅ `ATLANTA METRO` (short and clear)
   - ❌ `THE GREATER ATLANTA METROPOLITAN AREA` (too long)

4. **Match Local Convention**
   - Use names that locals would recognize
   - For airports, use common abbreviations
   - For cities, use "METRO" if covering multiple cities

## Multiple Locations

You can set up multiple configurations for different locations:

### Setup 1: Home
```yaml
Location Name: Home
Display Name: ATLANTA METRO
Region Name: Atlanta Int'l
```

### Setup 2: Office
```yaml
Location Name: Office
Display Name: DOWNTOWN CHICAGO
Region Name: Willis Tower
```

### Setup 3: Vacation Home
```yaml
Location Name: Beach House
Display Name: OUTER BANKS
Region Name: Kill Devil Hills
```

Each will appear as a separate panel in your Home Assistant sidebar.

## International Examples

### United Kingdom
```yaml
Display Name: GREATER LONDON
Region Name: Heathrow
```

### Japan
```yaml
Display Name: TOKYO
Region Name: Narita
```

### Australia
```yaml
Display Name: SYDNEY
Region Name: Harbour Bridge
```

### Canada
```yaml
Display Name: TORONTO
Region Name: Pearson Int'l
```

### Germany
```yaml
Display Name: BERLIN
Region Name: Tegel
```

### France
```yaml
Display Name: PARIS
Region Name: Charles de Gaulle
```

## Changing Your Configuration

### Via Home Assistant UI

1. Go to **Settings** → **Devices & Services**
2. Find **"Local on the 10s"**
3. Click on your location entry
4. Click **"Configure"** or the gear icon
5. Update the names
6. Click **Submit**
7. Refresh the display page (Ctrl+F5 or Cmd+Shift+R)

Changes take effect immediately after refreshing the display.

## Tips for Best Results

### Display Name
- Keep it under 25 characters for best display
- Use official metro area names when possible
- Match what local TV stations use
- Consider your audience (visitors should recognize it)

### Region Name
- Keep it under 20 characters
- Use well-known landmarks or airports
- Can be more specific than Display Name
- Optional - leave blank if not needed

## Troubleshooting

### Name not updating on display
1. Save configuration in Home Assistant
2. Hard refresh the display page (Ctrl+F5)
3. Check browser console for errors (F12)
4. Verify config saved (check Settings → Devices & Services)

### Name too long or cut off
- Shorten the Display Name
- Use abbreviations (e.g., "INTL" instead of "INTERNATIONAL")
- Remove unnecessary words ("THE", "AREA", etc.)

### Want to show multiple areas
- Create multiple Local on the 10s configurations
- Each can have its own location name
- They'll appear as separate panels in the sidebar

## Advanced: Custom Text in Footer

The footer format is fixed as:
```
CURRENTLY [Region Name or Display Name] [Temperature]°
```

To customize:
- Use Region Name for specific location
- Leave Region Name blank to use Display Name
- Temperature pulls from your weather entity

## Need Help?

- Check the [FAQ](../FAQ.md) for common questions
- See [EXAMPLES.md](../examples/EXAMPLES.md) for more configurations
- Open an issue on GitHub for support

---

Remember: The Display Name should represent your area clearly and match the authentic Local on the 8s/10s style with UPPERCASE formatting!
