export default async function getPortfolio(){
    const response=await fetch('https://admin.pnhit.pnhbd.com/api/portfolio')
    return response.json(); 
}

