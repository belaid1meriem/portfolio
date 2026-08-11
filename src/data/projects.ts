import { Technology } from "./skills";
import dpi from '../assets/dpi.png'
import dataSimul from '../assets/dataSimulation.png'
import groupPermut from '../assets/groupPermut.png'
import airin from '../assets/airin.png'
import vaultManager from '../assets/vaultManager.png'
import siriusNet from '../assets/siriusNet.png'

interface Project {
    source: string;
    image: string;
    name: string;
    description: string;
    techStack: Technology[];
    githubLink: string;
    liveLink?: string;
}

export const projects: Project[] = [
    {
        source: 'Academic Project',
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
        source: 'Personal Project',
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
        source: 'Built as part of my internship at AET Industries',
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
        source: 'Built as part of my internship at Sirius Net',
        image: siriusNet, // Add project image
        name: 'M-IoT - Industrial Monitoring Application',
        description: 'An industrial IoT monitoring platform for managing clients, sites, machines, sensors, and connected assets. The application provides real-time monitoring through SSE, machine and sensor dashboards, geospatial visualization, and asset tracking with live locations, trajectories, and history.',
        techStack: [
            { name: 'React.js', icon: '/react.svg' },
            { name: 'SSE', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/M-IoT_Frontend', // Add GitHub link if available
    },

    {
        source: 'Built as part of my internship at Innovia',
        image: vaultManager, 
        name: 'Secure Vault Management Web Application',
        description: 'A web application for managing secure vaults and their access codes. It supports user authentication, vault creation and management, secure code generation and regeneration, code-based vault lookup, and access-code history tracking through a Vue.js frontend and Symfony REST API.',
        techStack: [
            { name: 'Symfony', icon: '/react.svg' },
            { name: 'Vue.js', icon: '/react.svg' },
            { name: 'MySQL', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/belaid1meriem/gestion-de-coffres.git', // Add GitHub link if available
    },

    {
        source: 'Academic Project - Shifa',
        image: dpi,
        name: 'Shifa - Patient Record Management System',
        description: 'Designed intuitive user interfaces and contributed to the overall user experience in Figma for a patient record management system, then implemented the frontend with Angular and integrated backend APIs to deliver core application features.',
        techStack: [
            { name: 'Angular', icon: '/react.svg' },
        ],
        githubLink: 'https://github.com/rawane0310/Front_IGL',
    },
]