const SERVER_URL = "https://api-persista.onrender.com/api/v1/sdk";

async function makePostRequest(path, apiKey = "", data = {}) {
  let res = await fetch(`${SERVER_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
    body: JSON.stringify(data),
  });
  res = await res.json();
  return {
    data: res.message,
  };
}

export async function createChat(actionId, apiKey) {
  if (!apiKey) {
    throw new Error("API Key is missing! Please configure the SDK using config() method.");
  }

  const res = await makePostRequest("/chat/create", apiKey, { actionId });
  return res;
}

export async function getLLMResponse(chatId, answer, apiKey) {
  if (!apiKey) {
    throw new Error("API Key is missing! Please configure the SDK using config() method.");
  }

  const res = await makePostRequest("/chat/getresponse", apiKey, {
    chatId,
    answer,
  });

  return res;
}
