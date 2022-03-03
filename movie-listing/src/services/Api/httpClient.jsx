const API = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export async function get(path) {
    const result = await fetch(API + path, {
        headers: {
            Authorization: "Bearer " + API_TOKEN,
            "Content-Type": "application/json;charset=utf-8"
        }
    });
    return await result.json();
}
