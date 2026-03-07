import type { PageLoad } from './$types';

export type TProject = {
	title: string;
	link: string;
	date: string;
	description: string;
	image: string;
};

const projects: Array<TProject> = [
    {
    title: 'Swashbuckler',
    link: 'https://swashbuckler.quest',
    date: '2026-current',
    description: 'Swashbuckler is a full-stack knowledge management app built with Next.js, Supabase, and a rich block editor powered by Plate.js. It supports custom entry types with user-defined properties, a visual knowledge graph, real-time collaborative editing via Yjs CRDTs, multi-workspace support, and a global search experience. The data layer abstracts over both Supabase (PostgreSQL) and IndexedDB to support authenticated and offline/guest modes from the same interface. Built as a Turborepo monorepo with a companion documentation site, it includes features like templates, saved views, kanban boards, custom themes, tagging, sharing with per-entry exclusions, and analytics consent flows — all with full TypeScript, accessibility, and end-to-end test coverage.',
    image: 'images/swashbuckler.png',
  },
	{
		title: 'Theme Generator',
		link: 'https://theme.bencohen.dev',
		date: '2022',
		description: `This one was the result of a random rabbit hole I fell down (we've all been there :D). I got obsessed with vscode theming
                  and decided to build myself a nifty little tool to help me make themes faster. The theme template I use is based on the 
                  incredibly popular Dracula theme, but I modified it pretty heavily. Make yourself a fun theme and see how you like it!`,
		image: '/images/theme-generator.png',
	},
	{
		title: 'Tone Generator',
		link: 'https://pitch.bencohen.dev',
		date: '2020',
		description: `As a practicing saxophonist. 
      I spend some significant amount of time every day playing long tones (literally just playing a note for an extended period of time to work on tone, timbre, intonation, etc.). 
      I found it very helpful to practice along to sine waves as the pure tones helped me naturally focus on intonation.
       A Random Sequence Generator was built as a practice aid for a friend. 
       The site is built using Svelte 3 and Vercel and primarily uses the Web Audio API to allow users to play any frequency or set of frequencies. 
       The Random Sequence Generator allows users to select a limiting range as 
       well as keys and modes and then plays pitches randomly within these limiting frameworks.`,
		image: '/images/tone-generator.png',
	},
];
export const load: PageLoad = () => {
	return {
		projects,
	};
};
