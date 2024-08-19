export default async function getNumber(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/counter')
  
    return response.json(); 
    }
    
    
    
    