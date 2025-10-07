"""Config flow for Local on the 10s integration."""
from __future__ import annotations

import logging
from typing import Any

import voluptuous as vol

from homeassistant import config_entries
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import selector
import homeassistant.helpers.config_validation as cv

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


class LocalOnThe10sConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Handle a config flow for Local on the 10s."""

    VERSION = 1

    async def async_step_user(
        self, user_input: dict[str, Any] | None = None
    ) -> config_entries.FlowResult:
        """Handle the initial step."""
        errors = {}

        if user_input is not None:
            # Check if already configured
            await self.async_set_unique_id(user_input["location_name"])
            self._abort_if_unique_id_configured()

            return self.async_create_entry(
                title=user_input["location_name"],
                data=user_input,
            )

        data_schema = vol.Schema(
            {
                vol.Required("location_name", default="Home"): cv.string,
                vol.Required("display_name", default="ATLANTA METRO"): cv.string,
                vol.Optional("region_name", default=""): cv.string,
                vol.Required("weather_entity"): selector.EntitySelector(
                    selector.EntitySelectorConfig(domain="weather")
                ),
                vol.Optional("display_duration", default=10): vol.All(
                    vol.Coerce(int), vol.Range(min=5, max=30)
                ),
                vol.Optional("show_radar", default=False): cv.boolean,
                vol.Optional("auto_start", default=True): cv.boolean,
            }
        )

        return self.async_show_form(
            step_id="user",
            data_schema=data_schema,
            errors=errors,
            description_placeholders={
                "display_name_example": "e.g., ATLANTA METRO, NEW YORK CITY, LONDON",
                "region_name_example": "e.g., Atlanta Int'l, Central Park"
            }
        )

    @staticmethod
    @callback
    def async_get_options_flow(
        config_entry: config_entries.ConfigEntry,
    ) -> LocalOnThe10sOptionsFlow:
        """Get the options flow for this handler."""
        return LocalOnThe10sOptionsFlow(config_entry)


class LocalOnThe10sOptionsFlow(config_entries.OptionsFlow):
    """Handle options flow for Local on the 10s."""

    def __init__(self, config_entry: config_entries.ConfigEntry) -> None:
        """Initialize options flow."""
        self.config_entry = config_entry

    async def async_step_init(
        self, user_input: dict[str, Any] | None = None
    ) -> config_entries.FlowResult:
        """Manage the options."""
        if user_input is not None:
            return self.async_create_entry(title="", data=user_input)

        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(
                {
                    vol.Required(
                        "display_name",
                        default=self.config_entry.data.get("display_name", "ATLANTA METRO"),
                    ): cv.string,
                    vol.Optional(
                        "region_name",
                        default=self.config_entry.data.get("region_name", ""),
                    ): cv.string,
                    vol.Required(
                        "weather_entity",
                        default=self.config_entry.data.get("weather_entity"),
                    ): selector.EntitySelector(
                        selector.EntitySelectorConfig(domain="weather")
                    ),
                    vol.Optional(
                        "display_duration",
                        default=self.config_entry.data.get("display_duration", 10),
                    ): vol.All(vol.Coerce(int), vol.Range(min=5, max=30)),
                    vol.Optional(
                        "show_radar",
                        default=self.config_entry.data.get("show_radar", False),
                    ): cv.boolean,
                    vol.Optional(
                        "auto_start",
                        default=self.config_entry.data.get("auto_start", True),
                    ): cv.boolean,
                }
            ),
        )
