interface Skill {
    skill: string;
    description: string;
    techStack: Technology[];
}

export interface Technology {
    name: string;
    icon: string;
}
export const skills : Skill[] = [
    {
        skill: 'Frontend',
        description: 'I am proficient in building responsive and interactive web applications using modern frontend technologies.',
        techStack: [
            {name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'},
            {name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white'},
            {name: 'Vue.js', icon: 'https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white'},
            {name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white'},
            {name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'},
            {name: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'},
        ]
    },
    {
        skill: 'Backend',
        description: 'I am proficient in building scalable and secure server-side applications and REST APIs using modern backend technologies.',
        techStack: [
            {name: 'Django REST Framework', icon: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white'},
            {name: 'Symfony', icon: 'https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white'},
            {name: 'Node.js / Express', icon: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'},
            {name: 'FastAPI', icon: 'https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi&logoColor=white'},
            {name: 'Python', icon: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'},
            {name: 'PHP', icon: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white'},
        ]
    },
    {
        skill: 'Mobile',
        description: 'I build cross-platform and native mobile applications with clean architecture and REST API integration.',
        techStack: [
            {name: 'Kotlin', icon: 'https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white'},
            {name: 'Jetpack Compose', icon: 'https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=for-the-badge&logo=jetpackcompose&logoColor=white'},
            {name: 'MVVM', icon: 'https://img.shields.io/badge/MVVM-1E1E1E?style=for-the-badge'},
            {name: 'React Native', icon: 'https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'},
        ]
    },
    {
        skill: 'Databases & Tools',
        description: 'I design relational and non-relational data models and work with a modern engineering toolchain.',
        techStack: [
            {name: 'PostgreSQL', icon: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white'},
            {name: 'MySQL', icon: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white'},
            {name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white'},
            {name: 'Git & GitHub', icon: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white'},
            {name: 'Figma', icon: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'},
            {name: 'SonarQube', icon: 'https://img.shields.io/badge/SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white'},
            {name: 'Jenkins', icon: 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white'},
        ]
    }
]