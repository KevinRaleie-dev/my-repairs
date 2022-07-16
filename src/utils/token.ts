
type Key = "customer-token" | "provider-token";

/**
 * 
 * @param key The value used to identify the token. ie. "customer-token" or "provider-token"
 * @param token The token sent from the server.
 */
export function setToken(key: Key, token: string) {
	localStorage.setItem(key, token)
}

/**
 * 
 * @param key The value used to identify the token. ie. "customer-token" or "provider-token"
 * @returns {string | null} The token stored in localStorage. 
 */
export function getToken(key: Key): string | null {
	const token = localStorage.getItem(key)

	return token
}

/**
 * 
 * @param key The value used to identify the token. ie. "customer-token" or "provider-token"
 * And clears the token from localStorage.
 */
export function clearToken(key: Key) {
	localStorage.removeItem(key)
}
