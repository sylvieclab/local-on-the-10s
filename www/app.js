// Local on the 10s - Main Application
class LocalOnThe10s {
    constructor() {
        this.currentScreen = 0;
        this.screens = ['currentScreen', 'forecastScreen'];
        this.screenDuration = 10000; // 10 seconds per screen
        this.weatherData = null;
        this.haUrl = this.getHomeAssistantUrl();
        this.weatherEntity = this.getWeatherEntity();
        
        this.init();
    }
    
    getHomeAssistantUrl() {
        // Try to detect Home Assistant URL
        const params = new URLSearchParams(window.location.search);
        return params.get('ha_url') || window.location.origin;
    }
    
    getWeatherEntity() {
        const params = new URLSearchParams(window.location.search);
        return params.get('weather_entity') || 'weather.home';
    }
    
    async init() {
        console.log('Initializing Local on the 10s...');
        await this.fetchWeatherData();
        this.updateDisplay();
        this.startRotation();
        
        // Update weather data every 10 minutes
        setInterval(() => this.fetchWeatherData(), 600000);
    }
    
    async fetchWeatherData() {
        try {
            // This would connect to Home Assistant's API
            // For now, we'll use mock data for development
            console.log('Fetching weather data from:', this.weatherEntity);
            
            // In production, this would be:
            // const response = await fetch(`${this.haUrl}/api/states/${this.weatherEntity}`);
            // this.weatherData = await response.json();
            
            // Mock data for development
            this.weatherData = {
                state: 'sunny',
                attributes: {
                    temperature: 22,
                    humidity: 65,
                    wind_speed: 15,
                    wind_bearing: 180,
                    pressure: 1013,
                    friendly_name: 'Home',
                    forecast: this.generateMockForecast()
                }
            };
            
            console.log('Weather data loaded:', this.weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
    
    generateMockForecast() {
        const conditions = ['sunny', 'partly-cloudy', 'cloudy', 'rainy', 'snowy'];
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const forecast = [];
        
        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            
            forecast.push({
                datetime: date.toISOString(),
                condition: conditions[Math.floor(Math.random() * conditions.length)],
                temperature: Math.floor(Math.random() * 15) + 15,
                templow: Math.floor(Math.random() * 10) + 5
            });
        }
        
        return forecast;
    }
    
    updateDisplay() {
        if (!this.weatherData) return;
        
        this.updateCurrentConditions();
        this.updateForecast();
        this.updateTimestamp();
    }
    
    updateCurrentConditions() {
        const { state, attributes } = this.weatherData;
        
        document.getElementById('location').textContent = attributes.friendly_name || 'Unknown Location';
        document.getElementById('currentTemp').textContent = Math.round(attributes.temperature);
        document.getElementById('conditionText').textContent = this.formatCondition(state);
        document.getElementById('humidity').textContent = `${attributes.humidity}%`;
        document.getElementById('wind').textContent = `${Math.round(attributes.wind_speed)} km/h`;
        document.getElementById('pressure').textContent = `${Math.round(attributes.pressure)} hPa`;
        
        // Update condition icon
        const iconElement = document.getElementById('conditionIcon');
        iconElement.innerHTML = this.getWeatherIcon(state);
    }
    
    updateForecast() {
        const forecast = this.weatherData.attributes.forecast || [];
        const forecastGrid = document.getElementById('forecastGrid');
        
        document.getElementById('locationForecast').textContent = this.weatherData.attributes.friendly_name || 'Unknown Location';
        
        forecastGrid.innerHTML = '';
        
        forecast.slice(0, 7).forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'forecast-day';
            
            const date = new Date(day.datetime);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            
            dayElement.innerHTML = `
                <div class="forecast-date">${dayName}</div>
                <div class="forecast-icon">${this.getWeatherIcon(day.condition)}</div>
                <div class="forecast-condition">${this.formatCondition(day.condition)}</div>
                <div class="forecast-temps">
                    <span class="temp-high">${Math.round(day.temperature)}°</span>
                    <span class="temp-low">${Math.round(day.templow)}°</span>
                </div>
            `;
            
            forecastGrid.appendChild(dayElement);
        });
    }
    
    updateTimestamp() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit'
        });
        const dateString = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        document.getElementById('timestamp').textContent = `${dateString} ${timeString}`;
    }
    
    formatCondition(condition) {
        return condition.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
    
    getWeatherIcon(condition) {
        // Simple SVG icons for different weather conditions
        const icons = {
            'sunny': '☀️',
            'clear-night': '🌙',
            'partly-cloudy': '⛅',
            'cloudy': '☁️',
            'rainy': '🌧️',
            'pouring': '🌧️',
            'snowy': '❄️',
            'fog': '🌫️',
            'windy': '💨',
            'lightning': '⚡',
        };
        
        return `<span style="font-size: 100px;">${icons[condition] || '🌤️'}</span>`;
    }
    
    startRotation() {
        setInterval(() => {
            this.rotateScreen();
        }, this.screenDuration);
    }
    
    rotateScreen() {
        // Hide current screen
        document.getElementById(this.screens[this.currentScreen]).style.display = 'none';
        
        // Move to next screen
        this.currentScreen = (this.currentScreen + 1) % this.screens.length;
        
        // Show next screen
        document.getElementById(this.screens[this.currentScreen]).style.display = 'block';
        
        // Update timestamp
        this.updateTimestamp();
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new LocalOnThe10s();
});
