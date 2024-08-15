export default async function getSocial(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/website-settings-social')
  
    return response.json(); 
}