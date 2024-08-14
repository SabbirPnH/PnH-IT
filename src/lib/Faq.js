export default async function getFaq(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/faqs')
    return response.json(); 
}

