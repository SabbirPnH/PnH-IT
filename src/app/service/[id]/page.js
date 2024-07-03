import ServiceDetails2 from "@/components/ServiceDetail";
import serviceData from '@/data/serviceData';  

export async function generateStaticParams() {
  const ids = serviceData.map(service => ({ id: service.id.toString() }));
  return ids;
}

const ServiceDetailsPage = () => {
  return (
    <ServiceDetails2/>
  );
};

export default ServiceDetailsPage;
