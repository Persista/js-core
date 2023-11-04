import { getConfig } from "./config";

async function makePostRequest(url, apiKey = "", data = {}) {
  var jsonData = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
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

export async function getFirstQuery(actionId) {
  const { apiKey } = getConfig();

  const res = await makePostRequest("", apiKey, { actionId });
  return res;
}

export async function getLLMResponse(actionId, context, query) {
  const { apiKey } = getConfig();

  const res = await makePostRequest("", apiKey, {
    actionId,
    context,
    query,
  });

  return res;
}
