let config = {
  apiKey: null,
};

export function setConfig(options) {
  config = { ...config, ...options };
}

export function getConfig() {
  return config;
}


