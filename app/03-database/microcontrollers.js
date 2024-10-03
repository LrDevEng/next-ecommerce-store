const mcs = [
  { id: 1, name: 'Arduino Nano 33 IoT', price: 500 },
  { id: 2, name: 'Arduino Uno R4', price: 1000 },
  { id: 3, name: 'Arduino MKR WiFi 1010', price: 1200 },
  { id: 4, name: 'Arduino Mega 2560 Rev3', price: 400 },
  { id: 5, name: 'ESP32 NodeMCU', price: 500 },
  { id: 6, name: 'Adafruit ESP32 Feather V2', price: 600 },
  { id: 7, name: 'Adafruit QT Py ESP32-S3', price: 700 },
  { id: 8, name: 'SparkFun ESP8266 Thing', price: 800 },
];

export function getMcs() {
  return mcs;
}

export function getMc(id) {
  return mcs.find((mc) => mc.id === id);
}
