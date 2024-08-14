export default async function getDomain(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/products')
    return response.json(); 
    }
    
    
    
    