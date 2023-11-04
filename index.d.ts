interface Config {
  apiKey: string | null;
}

export declare function config(options: Partial<Config>): void;

export declare function createChat(actionId: string): Promise<any>;

export declare function getLLMResponse(chatId: string, answer: string): Promise<any>;