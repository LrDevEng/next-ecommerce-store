import { cache } from 'react';
import { sql } from './connect';

export type ProductDb = {
  id: number;
  name: string;
  type: string;
  price: number;
  amount: number | null;
  description: string | null;
  imgName: string;
};

export const getProductsInsecure = cache(async () => {
  const products = await sql<ProductDb[]>`
    SELECT
      *
    FROM
      products
  `;
  return products;
});

export const getProductInsecure = cache(async (id: number) => {
  const [product] = await sql<ProductDb[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
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
