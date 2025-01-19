import type { PageLoad } from './$types';

export type Job = {
	company: string;
	title: string;
	link: string;
	date: string;
	subhead: string;
	bullets: Array<BulletPoint>;
};

export type TSkill = {
	name: string;
	category: 'Languages' | 'Technologies' | 'Tooling' | 'Process';
	level: number;
};

type BulletPoint = {
	text: string;
	subPoints?: BulletPoint[];
};

const jobs: Array<Job> = [
	{
		company: 'Shift Paradigm',
		title: 'Senior Developer & Tech Lead',
		link: 'https://www.shiftparadigm.com/',
		date: 'September 2022 - Present',
		subhead: 'Consulting agency specializing in complex, data driven custom web applications',
		bullets: [
			{
				text: 'Architected full tech stack leveraging AWS, React, Salesforce, and ASP.NET Core that unlocked design potential and sped up feature delivery by 30%',
			},
			{
				text: 'Led a team of 6 engineers, owning the following',
				subPoints: [
					{
						text: 'Daily PR reviews with entire team, fostering shared ownership of codebase',
					},
					{
						text: 'Documented architectural decision (3rd party libs, project structure, code patterns, etc.) leaving clear direction for future devs',
					},
					{
						text: 'Broke complex engineering challenges into small, discrete tasks',
					},
					{
						text: 'Assigned work to dev team ensuring engineers worked on the best tasks for their skill set',
					},
					{
						text: 'Mentored Junior devs, helping them take on increasingly complex tasks while writing clean, performant code',
					},
					{
						text: 'Developed a comprehensive front-end component library used across all customer-facing applications ensuring design consistency and cutting development time by 40%',
					},
				],
			},
			{
				text: 'Collaborated with product and design reducing process impediments by 30%',
				subPoints: [
					{
						text: 'Planned comprehensive quarterly development roadmaps',
					},
					{
						text: 'Refined tickets balancing product needs, tech debt, and deadlines',
					},
				],
			},
			{
				text: 'Engineered a robust unit testing framework using Jest and React Testing Framework, improving quality assurance and accelerating issue detection and resolution by 50%',
				subPoints: [
					{
						text: 'Fostered environment of test driven development with expectation of unit tests in every PR',
					},
					{
						text: 'Set up GitHub actions to lint, run tests, and build per PR, automating code quality and test coverage toll gates',
					},
				],
			},
		],
	},
	{
		company: 'HD Supply',
		title: 'Senior Frontend Developer',
		link: 'https://hdsupplysolutions.com/',
		date: 'August 2021 - September 2022',
		subhead:
			'A B2B E-commerce subsidiary of Home Depot driving billions in sales serving commercial buildings, apartment complexes, and healthcare facilities',
		bullets: [
			{
				text: 'Engineered a robust unit testing framework using Jest and React Testing Framework, improving quality assurance and accelerating issue detection and resolution by 50%',
				subPoints: [
					{
						text: 'Fostered environment of test driven development with expectation of unit tests in every PR',
					},
					{
						text: 'Set up GitHub actions to lint, run tests, and build per PR, automating code quality and test coverage toll gates',
					},
				],
			},
			{
				text: 'Developed a feature rich asset management tool utilizing Svelte, Mulesoft, Adobe CDP, driving thousands of extra dollars to the ecommerce platform',
			},
			{
				text: 'Engineered a build pipeline using AWS with 50% faster build times',
			},
			{
				text: 'Built a design system leading to a 40% increase in feature delivery',
			},
			{
				text: 'Created, designed and executed an authentication middle layer to handle auth between legacy and new app',
			},
			{
				text: 'Integrated Svelte as a microfrontend, allowing for modern tech stack alongside older tech, speeding up front end development by 75%',
			},
		],
	},

	{
		company: 'Antidote',
		link: 'https://www.playistheantidote.com/',
		title: 'Frontend Developer',
		date: 'October 2020 - August 2021',
		subhead:
			'Design agency for mission driven organizations. “We use play, design, and technology to illustrate human agency in the face of complexity"',
		bullets: [
			{
				text: 'Delivered interactive sites using Svelte, Node, Vercel with fast iteration based on user feedback',
			},
			{
				text: 'Worked closely with lead designer to implement meaningful UX/UI design philosophy',
			},
			{
				text: 'Thorough, deliberative QA testing and deployment using modern software life cycle with multiple daily deploys',
			},
		],
	},
	{
		company: 'Codacity',
		link: 'http://codacity.com',
		title: 'Solutions Expert',
		date: 'January 2017 - October 2020',
		subhead:
			'Helping small business owners with custom solutions for a wide variety of web services',
		bullets: [
			{
				text: 'Created a parking ticket payment app using Ionic and Keystone, generating $100k+ revenue per year with a large active user base',
			},
			{
				text: 'Built complex custom E-Commerce websites (WordPress, Shopify, Squarespace, Drupal...)',
			},
			{
				text: 'One-on-one client consultation and collaboration streamlined business needs, driving thousands of dollars of revenue',
			},
		],
	},
];

const skills: Array<TSkill> = [
	{
		name: 'Javascript/ES6',
		category: 'Languages',
		level: 90,
	},
	{
		name: 'Typescript',
		category: 'Languages',
		level: 85,
	},
	{
		name: 'HTML',
		category: 'Languages',
		level: 95,
	},
	{
		name: 'CSS',
		category: 'Languages',
		level: 90,
	},
	{
		name: 'C#',
		category: 'Languages',
		level: 80,
	},
	{
		name: 'PHP',
		category: 'Languages',
		level: 75,
	},
	{
		name: 'React',
		category: 'Technologies',
		level: 90,
	},
	{
		name: 'Angular',
		category: 'Technologies',
		level: 85,
	},
	{
		name: 'Vue',
		category: 'Technologies',
		level: 80,
	},
	{
		name: 'Svelte',
		category: 'Technologies',
		level: 75,
	},
	{
		name: 'Tailwind CSS',
		category: 'Technologies',
		level: 85,
	},
	{
		name: 'Salesforce',
		category: 'Technologies',
		level: 70,
	},
	{
		name: 'Git',
		category: 'Tooling',
		level: 90,
	},
	{
		name: 'Node',
		category: 'Tooling',
		level: 85,
	},
	{
		name: 'AWS',
		category: 'Tooling',
		level: 80,
	},
	{
		name: 'Firebase',
		category: 'Tooling',
		level: 75,
	},
	{
		name: 'Supabase',
		category: 'Tooling',
		level: 70,
	},
	{
		name: 'Vercel',
		category: 'Tooling',
		level: 80,
	},
	{
		name: 'Vite',
		category: 'Tooling',
		level: 85,
	},
	{
		name: 'Webpack',
		category: 'Tooling',
		level: 80,
	},
	{
		name: 'Docker',
		category: 'Tooling',
		level: 75,
	},
	{
		name: 'SDLC',
		category: 'Process',
		level: 90,
	},
	{
		name: 'Agile',
		category: 'Process',
		level: 90,
	},
	{
		name: 'Scrum',
		category: 'Process',
		level: 85,
	},
	{
		name: 'Jira',
		category: 'Process',
		level: 85,
	},
];

export const load: PageLoad = () => {
	return {
		jobs,
		skills,
	};
};
