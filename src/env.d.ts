/// <reference types="astro/client" />

export {};

declare global {
  interface Window {
    dataLayer: unknown[]; // Array vacío por defecto
    gtag?: (...args: unknown[]) => void;
  }
}