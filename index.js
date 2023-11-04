let sdkConfig = {
  apiKey: null,
};

function getConfig() {
  return sdkConfig;
}

export function config(options) {
  sdkConfig = { ...sdkConfig, ...options };
}

const SERVER_URL = "https://api-persista.onrender.com/api/v1/sdk";

async function makePostRequest(path, apiKey = "", data = {}) {
  var jsonData = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", SERVER_URL + path, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", apiKey);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return response;
    }
  };
  xhr.send(jsonData);
}

export async function createChat(actionId) {
  const { apiKey } = getConfig();

  if (!apiKey) {
    throw new Error("API Key is missing! Please configure the SDK using config() method.");
  }

  const res = await makePostRequest("/chat/create", apiKey, { actionId });
  return res;
}

export async function getLLMResponse(chatId, answer) {
  const { apiKey } = getConfig();

  if (!apiKey) {
    throw new Error("API Key is missing! Please configure the SDK using config() method.");
  }

  const res = await makePostRequest("/chat/getresponse", apiKey, {
    chatId,
    answer,
  });

  return res;
}
