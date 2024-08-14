
export default async function getTestimunial() {
    const response = await fetch('https://admin.pnhit.pnhbd.com/api/reviews');
  
    return response.json(); 
}
