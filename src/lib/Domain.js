// export default async function getDomain(){
//     const response=await fetch('https://admin.pnhit.pnhbd.com/api/products')
//     return response.json(); 
   
//     }
//     console.log(response)
    
    
 





export default async function getDomain() {
  const response = await fetch('https://admin.pnhit.pnhbd.com/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

// Example of how to use the function and log the result
(async () => {
  try {
    const data = await getDomain();
    console.log(data); // Log the fetched data
  } catch (error) {
    console.error('Error:', error); // Handle any errors that occur during fetch
  }
})();
