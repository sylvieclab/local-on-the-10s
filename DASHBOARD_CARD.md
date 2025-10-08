# Adding Local on the 10's to Your Dashboard

You can add the Local on the 10's display to any existing Home Assistant dashboard using a custom card.

## Installation Steps

### Step 1: Register the Card Resource

1. Go to **Settings** → **Dashboards** → **Resources** (top right menu)
2. Click **"+ Add Resource"**
3. Enter the URL: `/local_on_the_10s/local-on-the-10s-card.js`
4. Select **JavaScript Module** as the resource type
5. Click **Create**

### Step 2: Get Your Config ID

Your config ID is the unique identifier for your Local on the 10's configuration.

**To find your Config ID:**

1. Go to **Developer Tools** → **Services**
2. Navigate to the Local on the 10's panel from your sidebar
3. Look at the URL in your browser - it will look like:
   ```
   /local_on_the_10s/index.html?config_id=01K701MC0D7QZHN16D3Y75AGWX
   ```
4. Copy everything after `config_id=` (e.g., `01K701MC0D7QZHN16D3Y75AGWX`)

### Step 3: Add the Card to Your Dashboard

1. Go to your dashboard
2. Click the **3 dots** (top right) → **Edit Dashboard**
3. Click **"+ Add Card"**
4. Scroll down and select **"Manual"** at the bottom
5. Paste this YAML configuration:

```yaml
type: custom:local-on-the-10s-card
config_id: YOUR_CONFIG_ID_HERE
height: 600px
```

6. Replace `YOUR_CONFIG_ID_HERE` with the config ID you copied earlier
7. Click **Save**

## Configuration Options

### Basic Configuration
```yaml
type: custom:local-on-the-10s-card
config_id: 01K701MC0D7QZHN16D3Y75AGWX
```

### Custom Height
```yaml
type: custom:local-on-the-10s-card
config_id: 01K701MC0D7QZHN16D3Y75AGWX
height: 800px  # Default is 600px
```

### Full Dashboard View (Recommended)
For the best experience, use the card in a full-width panel view:

1. Create a new dashboard view
2. Click the pencil icon to edit the view
3. Set **View type** to **"Panel (1 card)"**
4. Add the Local on the 10's card

```yaml
type: custom:local-on-the-10s-card
config_id: 01K701MC0D7QZHN16D3Y75AGWX
height: 100vh  # Full viewport height
```

## Example Dashboard Layouts

### Grid Layout (Multiple Cards)
```yaml
type: grid
cards:
  - type: custom:local-on-the-10s-card
    config_id: 01K701MC0D7QZHN16D3Y75AGWX
    height: 600px
  - type: weather-forecast
    entity: weather.home
columns: 2
```

### Sidebar Layout
```yaml
type: horizontal-stack
cards:
  - type: vertical-stack
    cards:
      - type: weather-forecast
        entity: weather.home
      - type: sensor
        entity: sensor.temperature
  - type: custom:local-on-the-10s-card
    config_id: 01K701MC0D7QZHN16D3Y75AGWX
    height: 600px
```

## Troubleshooting

### Card Not Showing Up
1. Make sure you've registered the resource in **Settings** → **Dashboards** → **Resources**
2. Try clearing your browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Restart Home Assistant

### "Config not found" Error
- Double-check your config_id matches exactly
- Make sure the Local on the 10's integration is configured properly

### Blank/White Screen
- Check the browser console for errors (F12)
- Verify the URL path is correct: `/local_on_the_10s/local-on-the-10s-card.js`
- Restart Home Assistant and refresh the page

## Tips

- **Best for tablets/large displays**: The Local on the 10's is optimized for larger screens
- **Use Panel view**: For the most authentic experience, use a full panel view
- **Multiple configurations**: You can create multiple Local on the 10's configurations for different locations and add them to different dashboards
