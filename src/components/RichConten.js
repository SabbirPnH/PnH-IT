import Link from "next/link";
import React from "react";

const Contents = () => {
	return (
		<div className="md:columns-2 gap-8 md:gap-12">
			<p className="leading-7 opacity-70 mb-2">How Search Engine Marketing Team Can Help
			Seofy stays ahead of the curve with digital marketing trends. Our success has us leading the pack amongst our competitors with our ability to anticipate change and innovation.
			</p>
			<p className="leading-7 opacity-70 mb-2">
			Our IT service software offers robust service desk capabilities, enabling seamless incident management, problem resolution, and change control. Gain real-time insights into service performance metrics and optimize workflows to minimize downtime and maximize efficiency.
			</p>
			<p className="leading-7 opacity-70 mb-2">
			Asset Management: Effectively track and manage your IT assets throughout their lifecycle. From procurement to retirement, our software provides visibility into asset utilization, maintenance schedules, and compliance requirements, ensuring optimal resource allocation and cost savings.
			</p>

			<p className="leading-7 opacity-70 mb-2">
			Remote Monitoring and Management (RMM): Proactively monitor your IT infrastructure with our advanced RMM tools. Detect and resolve issues before they impact operations, ensuring continuous uptime and reliability for critical systems and applications
			</p>
			<p className="leading-7 opacity-70 mb-2">
			IT Security and Compliance: Safeguard your sensitive data and mitigate cybersecurity risks with our comprehensive security solutions. Implement proactive threat detection, vulnerability assessments, and compliance audits to maintain regulatory compliance and protect your organization from evolving cyber threats.
			</p>
			<p className="leading-7 opacity-70 mb-2">
			Integration and Automation: Streamline workflows and improve operational efficiency with our integration and automation tools. Integrate disparate systems, automate routine tasks, and empower your IT teams to focus on strategic initiatives that drive business growth.
			</p>
		</div>
	);
};
const RichContents = () => {
	return (
		<section className="ezy__richcontents1 light py-14 md:pt-20 md:pb-7 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 sm:px-20">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-6">
						<h1 className="text-3xl leading-snug font-bold md:text-[45px] md:leading-tight mb-4">
						What is Search
						Engine Marketing?
						</h1>
						<p className="text-[17px] font-medium opacity-70">
						SEM encompasses a range of activities all centered around making website more visible when someone uses a SEO.
						</p>
					</div>
					<div className="col-span-12 lg:col-span-6 lg:text-end mt-4 lg:mt-0">
						<Link href={'/hosting'}>
						<button className="bg-[#1d294f] hover:bg-[#F68921] border border-[#1d294f] text-white px-6 py-3 rounded hover:border-[#F68921]">
							Get Started
						</button>
						</Link>
						
					</div>
					<div className="col-span-12 mt-12">
						<Contents />
					</div>
				</div>
			</div>
		</section>
	);
};
export default RichContents;