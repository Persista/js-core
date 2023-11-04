import { getConfig } from "./config";

async function makePostRequest(url, data = {}) {
  var jsonData = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

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

  const res = await makePostRequest("");
  return res;
}

export async function getLLMResponse(actionId, context, query) {
  const { apiKey } = getConfig();

  const res = await makePostRequest("", {
    actionId,
    context,
    query,
    apiKey,
  });

  return res;
}
