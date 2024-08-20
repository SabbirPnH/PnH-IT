export default async function getNavbarMenu(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/menus') 
    return response.json(); 
}


