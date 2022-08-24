export {};

declare global {
  interface Window {
    showOpenFilePicker: Function; // 👈️ turn off type checking
  }
}