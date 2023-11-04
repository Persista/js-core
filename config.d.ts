declare interface Config {
  apiKey: string | null;
}

export function setConfig(options: Partial<Config>): void;
export function getConfig(): Config;
