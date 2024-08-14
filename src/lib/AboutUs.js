export default async function getAboutUs(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/mission-vision')
    return response.json(); 
}