class LocalOnThe10sCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    if (!config.config_id) {
      throw new Error('You need to define a config_id');
    }
    this._config = config;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
  }

  render() {
    const height = this._config.height || '600px';
    const configId = this._config.config_id;
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        .card-container {
          width: 100%;
          height: ${height};
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: #1a4570;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
      </style>
      <ha-card>
        <div class="card-container">
          <iframe src="/local_on_the_10s/index.html?config_id=${configId}" allowfullscreen></iframe>
        </div>
      </ha-card>
    `;
  }

  getCardSize() {
    return 8;
  }
}

customElements.define('local-on-the-10s-card', LocalOnThe10sCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'local-on-the-10s-card',
  name: 'Local on the 10s',
  description: 'Display Local on the 10s weather forecast'
});
