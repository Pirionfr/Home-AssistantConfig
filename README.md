# Home Assistant Configuration

[![Build Status](https://travis-ci.org/Pirionfr/Home-AssistantConfig.svg?branch=master)](https://travis-ci.org/Pirionfr/Home-AssistantConfig)

Here's my [Home Assistant](https://home-assistant.io/) configuration. I have installed HA on my personal server with Docker

I regularly update my configuration files. You can check my current HA version [here](.HA_VERSION). If you like anything here, Be sure to :star2: my repo!

## Other things that I run on my server

* [Home Assistant](https://home-assistant.io)
* [Plex](https://www.plex.tv) media server in a Docker container
* [murmur](https://wiki.mumble.info) Mumble server
* [Octoprint](https://octoprint.org) Web interface for 3D printer


## Some of the devices and services that I use with HA
  * [raspbee2](https://phoscon.de/en/raspbee2) for raspbee2 control on a RPI 1
  * [D1 Mini ESP32 ](https://www.amazon.fr/ESP-32S-Bluetooth-Esp8266-CP2102-Module/dp/B07NW8S1ZR) for all BLE devices
  * [Rflink 868](https://www.nodo-shop.nl/nl/rflink-gateway/168-rflink-868-arduino-antenne-usb-kabel.html) for all 868 MHz Device with nodemcu V3
  * Lights and Switches
    * [Hue lights](https://www2.meethue.com/fr-fr/p/hue-white-pack-de-1-e27/8718696785317) X3
    * [Hue Dimmer](https://www2.meethue.com/fr-fr/p/hue-variateur/8718696743157)
    * [Ikea TRÅDFRI light](https://www.ikea.com/fr/fr/p/tradfri-ampoule-led-e27-806-lumen-sans-fil-a-variateur-dintensite-blanc-chaud-blanc-chaud-globe-opalin-90408797/) X4
    * [Ikea TRÅDFRI switch on/off](https://www.ikea.com/fr/fr/p/tradfri-variateur-dintensite-sans-fil-blanc-70408595/) X4
    * [OpenGarage](https://opengarage.io)
  * Voice Interaction    
    * [Google Home](https://store.google.com/product/google_home), with the [Google Assistant](https://home-assistant.io/components/google_assistant/)
  * Media
    * [Plex](https://www.plex.tv/) for media consumption along with [Plex component](https://home-assistant.io/components/media_player.plex/)
    * [Plex activity monitor](https://home-assistant.io/components/sensor.plex/) to track my PMS.
    * [Google Cast](https://home-assistant.io/components/media_player.cast/) on my Xiaomi mi box s
  * Weather and Climate related
    * Xiaomi Mijia Bluetooth thermomètre V2 x8
    * [openweathermap](https://www.home-assistant.io/integrations/openweathermap/) for weather data and forecasts
  * Plant Sensor
    * Xiaomi Plant Monitor
