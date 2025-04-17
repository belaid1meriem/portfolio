import { Technology } from "./skills";
import dpi from '../assets/dpi.png'
import dataSimul from '../assets/dataSimulation.png'
import explorex from '../assets/explorex.png'
import groupPermut from '../assets/groupPermut.png'
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
        source:'Personal Project',
        image: groupPermut,
        name: 'Group Permutation System',
        description: 'This project implements an algorithm for traversing a directed graph while respecting priority constraints. The algorithm finds valid group permutations based on priority order, ensuring a structured and efficient traversal. It uses igraph to represent the graph and applies a priority-based approach to determine movement between vertices.',
        techStack: [
            { name: 'Python', icon: '/react.svg' },
            { name: 'FastAPI', icon: '/react.svg' },
            { name: 'React', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/group-permutation.git',
        liveLink: 'https://belaid1meriem.github.io/group-permutation/group_permutation.html'
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