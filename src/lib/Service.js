export default async function getService(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/services')
  
    return response.json(); 
    }
    
    
    
    