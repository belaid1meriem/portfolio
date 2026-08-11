interface Experience {
    role: string;
    company: string;
    period: string;
    points: string[];
}

export const experiences: Experience[] = [
    {
        role: 'Full-Stack Developer',
        company: 'Educational Platform for Mathematics Learning, Freelance Project',
        period: 'Jul 2025 – Present',
        points: [
            'Participated in UI/UX design of the student mobile app and admin dashboard.',
            'Developed REST APIs with Django REST Framework for managing courses and learning bundles (CRUD).',
            'Implemented student search, points management, activity history, and notification features.',
        ]
    },
    {
        role: 'Web Development Intern',
        company: 'Sirius Net, M-IoT',
        period: 'Jun 2025 – Aug 2025',
        points: [
            'Built the frontend using React.js for an industrial monitoring application.',
            'Integrated real-time communication using Server-Sent Events (SSE).',
            'Collaborated on database modeling and Figma interface design.',
        ]
    },
    {
        role: 'Web Development Intern (Remote)',
        company: 'Innovia, Secure Vault Management Web Application',
        period: 'Jun 2025 – Jul 2025',
        points: [
            'Designed and implemented REST APIs using Symfony.',
            'Developed the frontend using Vue.js with a MySQL database.',
        ]
    },
    {
        role: 'Web Development Intern',
        company: 'AET Industries, Real-Time Location Data Simulation',
        period: 'Jul 2024 – Aug 2024',
        points: [
            'Built a React application simulating real-time location data.',
            'Integrated React Leaflet and Turf.js for geospatial visualization and processing.',
            'Developed a smooth, performance-optimized interactive interface.',
        ]
    },
]