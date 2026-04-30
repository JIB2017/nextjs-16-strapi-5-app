const BASE_URL = "https://localhost:1337";

export async function getStrapiData(path: string) {

    try {
        const response = await fetch(`${BASE_URL}${path}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch data, status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch(err: any) {
        console.error(err.message)
        throw err;
    }
}