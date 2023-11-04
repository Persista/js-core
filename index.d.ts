declare module "./config" {
  interface Config {
    apiKey: string | null;
  }

  export function getConfig(): Config;
  export function setConfig(options: Partial<Config>): void;
}

export function makePostRequest(url: string, apiKey?: string, data?: object): Promise<any>;

export function getFirstQuery(actionId: string): Promise<any>;

export function getLLMResponse(actionId: string, context: string, query: string, userAnswer: string): Promise<any>;
