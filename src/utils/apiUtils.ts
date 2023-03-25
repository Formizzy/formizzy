export async function getApi({ url = process.env.SERVER_URL }: { url?: string }) {
    if (url) {
        const response = fetch(url).then(res => res.json()).catch(error => error)
        return response
    } else {
        throw Error("url not specified")
    }
}