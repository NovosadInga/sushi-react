export const getLocalStorage = (key: string) => {
	const data = localStorage.getItem(key);
	if (data !== null) return JSON.parse(data);
	return false;
};
export const setLocalStorage = (key: string, data: string) => {
	localStorage.setItem(key, data);
};
export const clearLocalStorage = (key: string) => {
	localStorage.removeItem(key);
};
