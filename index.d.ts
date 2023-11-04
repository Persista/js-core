declare module "./config" {
  interface Config {
    apiKey: string | null;
  }

  export function getConfig(): Config;
}

declare const SERVER_URL: string;

export declare function createChat(actionId: string): Promise<any>;
export declare function getLLMResponse(chatId: string, answer: string): Promise<any>;
