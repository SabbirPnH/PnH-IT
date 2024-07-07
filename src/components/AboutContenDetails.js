// 'use client'

// import contenData from '../../../data/AboutConten';
// import { useParams } from 'next/navigation';

// const AboutContenDetails = () => {
//   const params = useParams();
// 	const id = params.id;
// 	const [conten, setConten] = useState(null);
  
// 	useEffect(() => {
// 	  if (id !== undefined && id >= 0 && id < contenData.length) {
//       setConten(contenData[id]);
// 	  }
// 	}, [id]);
  
// 	if (!conten) {
// 	  return <div>
// 		<ErrorPage/>
// 	  </div>;
// 	}

//   return (
//     <div>
//       <h1>{conten.title}</h1>
//       <p>{conten.description}</p>
//     </div>
//   );
// };

// export default AboutContenDetails;


