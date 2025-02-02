import { Technology } from "./skills";
import img from '../assets/picture.png';
import dpi from '../assets/dpi.png'
import dataSimul from '../assets/dataSimulation.png'
import explorex from '../assets/explorex.png'
interface Project {
    source: string;
    image: string;
    name: string;
    description: string;
    techStack: Technology[];
    githubLink: string;
    liveLink ?: string;
}

export const projects : Project[] = [
    {
        source:'Personal project',
        image: img ,
        name: 'Portfolio Website',
        description: 'A responsive and modern portfolio website built using React, Vite, and Tailwind CSS.',
        techStack: [
            { name: 'React', icon: '/react.svg' },
            { name: 'Vite', icon: '/vite.svg' },
            { name: 'Tailwind CSS', icon: '/tailwindcss.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/portfolio',
        liveLink: '/',
    },
    {
        source:'Built as a part of my internship at AETIndustries',
        image: dataSimul ,
        name: 'Location Data Simulation App',
        description: 'A web app for simulating and visualizing geospatial data using React, Leaflet, and Turf.js. It offers real-time map rendering and geodata analysis for testing and visualization purposes',
        techStack: [
            { name: 'React', icon: '/react.svg' },
            { name: 'Leaflet', icon: '/tailwindcss.svg' },
            { name: 'Turf.js', icon: '/tailwindcss.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/Location-Data-Simulation',
        liveLink: 'https://location-data-simulation.netlify.app/',
    },
    {
        source:'Event Organization',
        image: explorex,
        name: 'ExploreX website',
        description: 'A React-based website for ExploreX, an event dedicated to exploring diverse technology paths. It features a responsive design to showcase event details, schedules, and resources, providing attendees with an engaging and seamless experience.',
        techStack: [
            { name: 'React', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/ExploreX',
        liveLink: 'https://explorex.netlify.app/',
    },
    {
        source:'Personal Project',
        image: dpi,
        name: 'Electronic Patient Record Management',
        description: 'A web-based application for managing electronic patient records. It allows healthcare professionals to store, retrieve, and update patient information securely. The Frontend of the app is built using Angular.',
        techStack: [
            { name: 'Angular', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/rawane0310/Front_IGL',
    },
]