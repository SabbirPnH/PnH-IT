export default async function getFeature(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/our-features')
  
    return response.json(); 
    }
    
    
    
    