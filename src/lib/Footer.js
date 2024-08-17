// export default async function getFooter(){
//     const response=await fetch('https://admin.pnhit.pnhbd.com/api/website-settings-info')
//     return response.json(); 
// }

async function getFooter() {
    try {
        const res = await fetch('https://admin.pnhit.pnhbd.com/api/website-settings-info');
        
        // Check if the response is not OK (not a 2xx status code)
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching footer data:', error);
        return null; // or return a default object structure to prevent crashes
    }
}

export default getFooter;
