"""Local on the 10s - Weather Display Integration for Home Assistant."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.components.frontend import async_register_built_in_panel

_LOGGER = logging.getLogger(__name__)

DOMAIN = "local_on_the_10s"
PLATFORMS: list[Platform] = []

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    """Set up the Local on the 10s component."""
    hass.data.setdefault(DOMAIN, {})
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Local on the 10s from a config entry."""
    hass.data[DOMAIN][entry.entry_id] = entry.data

    # Register the config API endpoint
    hass.http.register_view(LocalOnThe10sConfigView(entry))

    # Register the panel and assets
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                url_path=f"/local/{DOMAIN}",
                path=hass.config.path(f"custom_components/{DOMAIN}/www"),
                cache_headers=False,
            ),
            StaticPathConfig(
                url_path=f"/{DOMAIN}/assets",
                path=hass.config.path(f"custom_components/{DOMAIN}/assets"),
                cache_headers=True,
            ),
            StaticPathConfig(
                url_path=f"/{DOMAIN}/backgrounds",
                path=hass.config.path(f"custom_components/{DOMAIN}/assets/backgrounds"),
                cache_headers=True,
            ),
            StaticPathConfig(
                url_path="/local_on_the_10s/local-on-the-10s-card.js",
                path=hass.config.path(f"custom_components/{DOMAIN}/www/local-on-the-10s-card.js"),
                cache_headers=False,
            )
        ]
    )

    # Register frontend panel
    async_register_built_in_panel(
        hass,
        component_name="iframe",
        sidebar_title=entry.data.get("location_name", "Local on the 10s"),
        sidebar_icon="mdi:weather-partly-cloudy",
        frontend_url_path=DOMAIN,
        config={"url": f"/local/{DOMAIN}/index.html?config_id={entry.entry_id}"},
        require_admin=False,
    )

    _LOGGER.info("Local on the 10s integration loaded successfully")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    hass.data[DOMAIN].pop(entry.entry_id)
    return True


class LocalOnThe10sConfigView(HomeAssistantView):
    """View to return config data to frontend."""

    url = "/api/local_on_the_10s/config/{config_id}"
    name = "api:local_on_the_10s:config"
    requires_auth = True

    def __init__(self, entry: ConfigEntry) -> None:
        """Initialize the view."""
        self.entry = entry

    async def get(self, request, config_id):
        """Return config data."""
        hass = request.app["hass"]
        
        if config_id not in hass.data[DOMAIN]:
            return self.json_message("Config not found", status_code=404)
        
        config = hass.data[DOMAIN][config_id]
        
        return self.json({
            "location_name": config.get("location_name", "Home"),
            "display_name": config.get("display_name", "LOCAL AREA"),
            "region_name": config.get("region_name", ""),
            "weather_entity": config.get("weather_entity"),
            "display_duration": config.get("display_duration", 10),
            "show_radar": config.get("show_radar", False),
        })
