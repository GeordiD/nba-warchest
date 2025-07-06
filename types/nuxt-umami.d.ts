// Type fixes for nuxt-umami module
declare module 'nuxt-umami/internal/utils' {
  export function normalizeURL(url: string): string;
  export function processEvent(event: any): any;
  export function getEnvVar(key: string, defaultValue?: any): any;
}

// Augment ImportMeta for nuxt-umami compatibility
declare global {
  interface ImportMeta {
    env: Record<string, any>;
  }
}

export {};
