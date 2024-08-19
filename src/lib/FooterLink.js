export default async function getFooterLink(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/footer-links')
  
    return response.json(); 
    }
    
    
    
    