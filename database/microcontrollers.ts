import { cache } from 'react';
import { sql } from './connect';

type Microcontroller = {
  id: number;
  name: string;
  price: number;
  amount: number | null;
  description: string | null;
};

export const getMcsInsecure = cache(async () => {
  const mcs = await sql<Microcontroller[]>`
    SELECT
      *
    FROM
      microcontrollers
  `;
  return mcs;
});

export const getMcInsecure = cache(async (id: number) => {
  const [mc] = await sql<Microcontroller[]>`
    SELECT
      *
    FROM
      microcontrollers
    WHERE
      id = ${id}
  `;
  return mc;
});

// Fake database
// const mcs = [
//   { id: 1, name: 'Arduino Mega 2560 Rev3', price: 3822 },
//   { id: 2, name: 'Arduino Nano 33 IoT', price: 2672 },
//   { id: 3, name: 'Arduino Uno R4 WiFi', price: 2461 },
//   { id: 4, name: 'Arduino Uno Rev3', price: 2037 },
//   { id: 5, name: 'Bluefruit LE Usb Sniffer nRF51822-v2', price: 2790 },
//   { id: 6, name: 'Nordic Semiconductor nRF52840', price: 1690 },
//   { id: 7, name: 'Sparkfun Thing Plus ESP32 WROOM', price: 2380 },
//   { id: 8, name: 'Raspberry Pi Pico WH RP2040', price: 726 },
//   { id: 9, name: 'Waveshare ESP32 C6 WROOM-1-N8', price: 958 },
//   { id: 10, name: 'Waveshare ESP32 S3 Nano', price: 998 },
// ];

// export function getMcs() {
//   return mcs;
// }

// export function getMc(id) {
//   return mcs.find((mc) => mc.id === id);
// }
