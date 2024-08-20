// import { IoShieldCheckmark } from "react-icons/io5";
// import tabs from '../../../data/MobileViewDomain';
// import Image from "next/image";
// export async function generateMetadata({ params }) {
//     return {
//       title: 'Product Page',
//       description: "Generated by create Service Page",
//     }
//   }
// export async function generateStaticParams() {
//     const contenId = tabs.map((tab) => ({ id: tab.id.toString() }));
//     return contenId;
//   }
// const DomainDetailsMobileViewPage = ({params}) => {

//     const contenItem = tabs.find((item) => item.id == params.id);

//     if (!contenItem) {
//       return <div>Content not found</div>;
//     }
//     return (
   
//     <div className="bg-black">
//        <div className="px-2 py-5">
//           <div className="flex justify-center">
//           <Image
//                 src={contenItem.img}
//                 width={100}
//                 height={50}
//                 alt="Picture of the author "
//             />
//           </div>
//            <div className="text-white">
//            <h1 className="text-md font-semibold text-[#F68921]">{contenItem.label}</h1>
//             <p className="break-all text-xs">{contenItem.heading}</p>
//             <div className="flex mt-2 gap-3">
//             <IoShieldCheckmark className="text-[#F68921] -mt-6 text-[72px]"/>
//             <p className="break-all text-sm">{contenItem.title_one}</p>
//             </div>
//             <div className="flex  gap-3 mt-2">
//             <IoShieldCheckmark className="text-[#F68921] -mt-6 text-[72px]"/>
//             <p className="break-all text-sm">{contenItem.title_two}</p>
//             </div>
//            </div>
//         </div>
//     </div>
//     );
// };

// export default DomainDetailsMobileViewPage;



import { IoShieldCheckmark } from "react-icons/io5";
import Image from "next/image";

// Fetch the data from the API
async function fetchData() {
  const response = await fetch('https://admin.pnhit.pnhbd.com/api/products');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function generateStaticParams() {
  let data;
  try {
    data = await fetchData();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { paths: [], fallback: false };
  }

  // Ensure data is an array
  if (!Array.isArray(data)) {
    console.error("Data is not an array:", data);
    return { paths: [], fallback: false };
  }

  // Generate paths with 'id' parameter
  const paths = data.map(item => ({ params: { id: item.id.toString() } }));

  return {
    paths,
    fallback: false
  };
}

export async function generateMetadata({ params }) {
  return {
    title: 'Product Page',
    description: "Generated by create Service Page",
  };
}

const DomainDetailsMobileViewPage = async ({ params }) => {
  let data;
  try {
    data = await fetchData();
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }

  const contenItem = data.find(item => item.id.toString() === params.id);

  if (!contenItem) {
    return <div>Content not found</div>;
  }

  return (
    <div className="bg-black">
      <div className="px-2 py-5">
        <div className="flex justify-center">
          <Image
            src={contenItem.img}
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="text-white">
          <h1 className="text-md font-semibold text-[#F68921]">{contenItem.label}</h1>
          <p className="break-all text-xs">{contenItem.heading}</p>
          <div className="flex mt-2 gap-3">
            <IoShieldCheckmark className="text-[#F68921] -mt-6 text-[72px]" />
            <p className="break-all text-sm">{contenItem.title_one}</p>
          </div>
          <div className="flex gap-3 mt-2">
            <IoShieldCheckmark className="text-[#F68921] -mt-6 text-[72px]" />
            <p className="break-all text-sm">{contenItem.title_two}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainDetailsMobileViewPage;
