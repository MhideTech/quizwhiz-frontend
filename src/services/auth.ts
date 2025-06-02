// This is jpw to import env variables in Vite
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

// TODO change this to async await
function signUpWithEmail(data) {
	return fetch("https://example.com/api", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	}).then((res) => res.json());
}
