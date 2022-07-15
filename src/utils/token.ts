
export function setToken(token: string) {
	localStorage.setItem('mr-token', token)
}

export function getToken(): string | null {
	const token = localStorage.getItem('mr-token')

	return token
}

export function clearToken() {
	localStorage.removeItem('mr-token')
}
