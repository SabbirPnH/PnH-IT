'use client'
import { useRouter } from 'next/router';
import contenData from '../../../data/AboutConten';

const AboutContenDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the corresponding conten item using id
  const contenItem = contenData.find(item => item.id === id);

  if (!contenItem) {
    return <div>Content not found</div>;
  }

  return (
    <div>
      <h1>{contenItem.title}</h1>
      <p>{contenItem.description}</p>
    </div>
  );
};

export default AboutContenDetailsPage;




// import contenData from '@/data/AboutConten';  
// import AboutContenDetails from '@/components/AboutContenDetails';

// export async function generateStaticParams() {
//   const contenId = contenData.map(conten => ({ id: conten.id.toString() }));
//   return contenId;
// }

// const AboutContenDetailsPage = () => {
//   return (
//    <AboutContenDetails />
//   );
// };

// export default AboutContenDetailsPage;
