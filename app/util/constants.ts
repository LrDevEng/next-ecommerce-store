export const cartCookieName = 'cart';
export const previewCookieName = 'preview';
export const filterCookieName = 'filter';

type ProductType = {
  microcontroller: string;
  joystick: string;
  button: string;
  all: string;
};

export const productType: ProductType = {
  microcontroller: 'microcontroller',
  joystick: 'joystick',
  button: 'button',
  all: 'all',
};
