export default async function getAllSlider(){
const response=await fetch('https://admin.pnhit.pnhbd.com/api/sliders')
return response.json(); 
}



