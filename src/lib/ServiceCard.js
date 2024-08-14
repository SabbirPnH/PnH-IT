export default async function getServiceCard(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/services')
  
    return response.json(); 
}