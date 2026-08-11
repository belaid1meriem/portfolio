import { Technology } from "./skills";
import dpi from '../assets/dpi.png'
import dataSimul from '../assets/dataSimulation.png'
import groupPermut from '../assets/groupPermut.png'
import airin from '../assets/airin.png'
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
        source:'Academic Project',
        image: airin,
        name: 'AirIn - Airline Online Check-In App',
        description: 'An Android check-in application built with Kotlin and Jetpack Compose following the MVVM pattern. Contributed to UI/UX design of the passenger check-in workflow in Figma and implemented the user profile and seat selection screens, integrated with backend REST APIs.',
        techStack: [
            { name: 'Kotlin', icon: '/react.svg' },
            { name: 'Jetpack Compose', icon: '/react.svg' },
            { name: 'MVVM', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/AirIn-mobile',
        liveLink: 'https://www.figma.com/design/uxmph9ZxKBDjusvMC9LsvJ/Projet-TDM?node-id=3312-2&t=7MfrKZNtH3RCD8zq-1',
    },
    {
        source:'Personal Project',
        image: groupPermut,
        name: 'Group Permutation System',
        description: 'A graph-theory-based system that automates student group permutations while respecting priority constraints. The algorithm finds valid group permutations based on priority order using a priority-based traversal approach, with cycle detection to ensure fairness and consistency.',
        techStack: [
            { name: 'Python', icon: '/react.svg' },
            { name: 'FastAPI', icon: '/react.svg' },
            { name: 'React', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/group-permutation.git',
        liveLink: 'https://belaid1meriem.github.io/group-permutation/group_permutation.html'
    },
    {
        source:'Built as part of my internship at AET Industries',
        image: dataSimul,
        name: 'Location Data Simulation App',
        description: 'A web app for simulating and visualizing geospatial data using React, Leaflet, and Turf.js. It offers real-time map rendering and geodata analysis for testing and visualization purposes.',
        techStack: [
            { name: 'React', icon: '/react.svg' },
            { name: 'Leaflet', icon: '/tailwindcss.svg' },
            { name: 'Turf.js', icon: '/tailwindcss.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/Location-Data-Simulation',
        liveLink: 'https://location-data-simulation.netlify.app/',
    },
    {
        source:'Academic Project - Shifa',
        image: dpi,
        name: 'Shifa - Patient Record Management System',
        description: 'Designed intuitive user interfaces and contributed to the overall user experience in Figma for a patient record management system, then implemented the frontend with Angular and integrated backend APIs to deliver core application features.',
        techStack: [
            { name: 'Angular', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/rawane0310/Front_IGL',
    },
]