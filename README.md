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
  * [PiZiGate](https://zigate.fr/produit/pizigate-v1-0/) for Zigbee control on a RPI 1
  * [RFlink Gateway 433](https://www.nodo-shop.nl/nl/46-rflink-433920-mhz) for all 433 Mhz device on RPI Zero W
  * [Rflink 868](https://www.nodo-shop.nl/nl/rflink-gateway/168-rflink-868-arduino-antenne-usb-kabel.html) for all 868 MHz Device with nodemcu V3
  * [RPi Zero W](https://raspberry-pi.fr/raspberry-pi-zero-w/) for BLE sensor with BLE to MQTT
  * Lights and Switches
    * [Hue lights](https://www2.meethue.com/fr-fr/p/hue-white-pack-de-1-e27/8718696785317)
    * [OpenGarage](https://opengarage.io)
  * Voice Interaction    
    * [Google Home](https://store.google.com/product/google_home), with the [Google Assistant](https://home-assistant.io/components/google_assistant/)
  * Media
    * [Plex](https://www.plex.tv/) for media consumption along with [Plex component](https://home-assistant.io/components/media_player.plex/)
    * [Plex activity monitor](https://home-assistant.io/components/sensor.plex/) to track my PMS.
    * [Google Cast](https://home-assistant.io/components/media_player.cast/) on my Xiaomi mi box s
  * Weather and Climate related
    * WH2 Sensor
    * Xiaomi Mijia Bluetooth thermomètre 2
    * [openweathermap](https://www.home-assistant.io/integrations/openweathermap/) for weather data and forecasts
  * Plant Sensor
    * Xiaomi Plant Monitor
