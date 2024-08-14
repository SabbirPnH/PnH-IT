export default async function getAllClients(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/client-logo')
  
    return response.json(); 
}