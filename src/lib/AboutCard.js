export default async function getAboutCard(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/leading-company')
    return response.json(); 
}