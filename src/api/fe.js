const API_URL = '/data'

export const problems = async () => {
    const response = await fetch(`${API_URL}/fe-problems.json`)
    return await response.json()
}

export const similars = async () => {
    const response = await fetch(`${API_URL}/fe-similars.json`)
    return await response.json()
}
