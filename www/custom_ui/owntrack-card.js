class OwntrackCard extends HTMLElement {
  set hass(hass) {
    const state = hass.states[this.config.entities[0]];
    const attributes = state.attributes;
	
    const battery = hass.states[this.config.entities[1]];
	
		
    this.innerHTML = `
    <style>
		div > img {
			height: auto;
			width: 100%;
		}
		div .owntrack_container{
			position: relative;
			text-align: center;
		}
		div .owntrack_info{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.3);
			padding: 4px 8px;
			font-size: 16px;
			line-height: 40px;
			color: white;
			display: flex;
			justify-content: space-between;
			
		}
	</style>

	<div class="state">
	<div class="owntrack_container"> 
		<img src="${this.config.image}" />
		<div class="owntrack_info">
			<div class="owntrack_name">${attributes.friendly_name}</div>
			<div class="owntrack_state">${state.state}</div>
			<div class="owntrack_battery">
				<span class="ha-icon"><ha-icon icon="${battery.attributes.icon}"></ha-icon>
				${battery.state}${battery.attributes.unit_of_measurement}
			</div>
		</div>
	</div>
	</div>
	`;
  }
	
  setConfig(config) {
    this.config = config;
  }

  getCardSize() {
    return 1;
  }
}

customElements.define('owntrack-card', OwntrackCard);