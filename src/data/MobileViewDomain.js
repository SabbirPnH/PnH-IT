import { MdShoppingCartCheckout } from "react-icons/md";
import { LuCodesandbox } from "react-icons/lu";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdWbSunny } from "react-icons/md";
import { SiBisecthosting } from "react-icons/si";
import { MdOutlineManageAccounts } from "react-icons/md";


const tabs = [
    {
        id: 1,
        label: 'E-commerce',
        icon: MdShoppingCartCheckout,
        img:'/img/features-1.svg',
        heading:'E-commerce services encompass a wide range of offerings designed to support online businesses in various aspects of their operations. Whether you&apos&aposre starting an e-commerce business or looking to improve an existing one, here are some key e-commerce services you might consider:',
        title_one:'Website Development and Design: Creating an appealing and functional e-commerce website is essential. E-commerce website development services include designing user-friendly interfaces, optimizing for mobile devices, and integrating secure payment gateways.',
        title_two:'E-commerce Platform Setup: Choosing the right e-commerce platform (e.g., Shopify, WooCommerce, Magento) is crucial. E-commerce services can assist in selecting, setting up, and customizing the platform to meet your specific business needs.'
    },

    {
        id: 2,
        label: 'POS/Inventory',
        icon: LuCodesandbox,
        img:'/img/features-2.svg',
        heading:'Point of Sale (POS) and Inventory Management services are essential for businesses that need to manage sales transactions, track inventory levels, and streamline their operations. Here are some key services related to POS and inventory management:',
        title_one:'POS System Setup: Setting up a POS system involves installing hardware (such as cash registers, barcode scanners, and receipt printers) and software that allows businesses to process sales transactions efficiently.',
        title_two:'Inventory Tracking: Inventory management services help businesses monitor stock levels, track product movements, and manage reordering processes. This ensures that products are always available when customers need them.'
    },
    {
        id: 3,
        label: 'Domain & Hosting',
        icon: TbDeviceDesktopAnalytics,
        img:'/img/features-3.svg',
        heading:'Domain and hosting services are foundational components of establishing and maintaining an online presence. These services ensure that your website is accessible to users on the internet and that it runs smoothly. Here are some key aspects of domain and hosting services:',
        title_one:'Domain Registration: This service allows you to secure a unique domain name (e.g., www.example.com) for your website. A domain name is your website&aposs address on the internet.',
        title_two:'Web Hosting: Hosting services provide the infrastructure needed to store your website&aposs files and make them accessible on the internet. Different types of hosting (shared, VPS, dedicated, cloud) offer varying levels of performance and control.'
    },
    {
        id: 4,
        label: 'Hosting',
        icon: MdWbSunny,
        img:'/img/features-4.svg',
        heading:'School and college services refer to a wide range of offerings and support systems that cater to the needs of educational institutions, students, parents, and staff. These services are designed to enhance the overall educational experience, ensure smooth operations, and promote a conducive learning environment. Here are some common school and college services:',
        title_one:'Administrative Services: Administrative services are essential for the smooth functioning of educational institutions. They include managing student admissions, maintaining records, scheduling classes, handling finances, and ensuring compliance with regulations.',
        title_two:'Academic Support: Academic support services provide additional assistance to students to help them succeed in their studies. This includes tutoring, study resources, and academic advising.'

    },
    {
        id: 5,
        label: 'ERP',
        icon: SiBisecthosting,
        img:'/img/features-5.svg',
        heading:'Enterprise Resource Planning (ERP) systems are comprehensive software solutions designed to integrate and manage various business processes within an organization. These systems provide a centralized platform that enables businesses to streamline operations, improve efficiency, and gain real-time insights into their operations. Here are some key aspects of ERP services:',
        title_one:'Integration: ERP systems integrate different functions and departments, such as finance, human resources, manufacturing, supply chain, and customer relationship management (CRM), into a unified system.',
        title_two:'Data Centralization: ERP systems store data from various business processes in a central database, ensuring that information is accurate, consistent, and accessible to authorized users across the organization.'
    },
    {
        id: 6,
        label: 'Account Management',
        icon: MdOutlineManageAccounts,
        img:'/img/features-6.svg',
        heading:'Account management software and services help businesses streamline their financial operations, maintain accurate records, and ensure compliance with financial regulations. Here are some key components and functionalities of account management services:',
        title_one:'Invoicing and Billing: Account management services facilitate the creation, sending, and tracking of invoices and bills, ensuring timely payments and accurate financial records.',
        title_two:'Expense Tracking: Businesses can track and categorize expenses, monitor spending, and manage budgets more effectively.'
    },
];
export default tabs;