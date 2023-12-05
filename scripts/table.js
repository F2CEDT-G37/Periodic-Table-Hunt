import { getItems, updateItem } from "./api.js";
import { username } from "./main.js";

function drawTable(items) {
  const table = document.getElementById("main-table-body"); //ยังไม่มี

  table.innerHTML = "";

  for (const item of items) {
    const row = table.insertRow();
    row.insertCell().innerText = item.name;
    row.insertCell().innerText = item.highscore;
  }
}

export async function fetchAndDrawTable() {
  const items = await getItems();
  items.sort((a, b) => b.highscore - a.highscore);
  drawTable(items);
}

export async function handleUpdateItem(total) {

  const payload = {
    name: username,
    highscore: total,
  };

  await updateItem(payload);
  await fetchAndDrawTable();
}
