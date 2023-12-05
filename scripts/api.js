import { BACKEND_URL } from "./config.js";

export async function getItems() {
    
    const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());
  
    return items;
}

export async function updateItem(item) {
    await fetch(`${BACKEND_URL}/items`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
}