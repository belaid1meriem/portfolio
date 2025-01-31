interface Skill {
    skill: string;
    description: string;
    techStack: Technology[];
}

interface Technology {
    name: string;
    icon: string;
}
export const skills : Skill[] = [
    {
        skill: 'Frontend',
        description: 'I am proficient in building responsive and interactive web applications using modern frontend technologies.',
        techStack: [
            {name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'},
            {name: 'Angular', icon: 'https://img.shields.io/badge/Angular-DD0036?style=for-the-badge&logo=angular&logoColor=white'},
            {name: 'Vue.js', icon: 'https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D'},
            {name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white'},
            {name: 'HTML', icon:'https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white'},
            {name: 'CSS', icon: 'https://img.shields.io/badge/CSS-217596?style=for-the-badge&logo=css3&logoColor=white'},
            {name: 'JavaScript', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'},
            {name:'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white'}
        ]
    },
    {
        skill: 'Backend',
        description: 'I am proficient in building scalable and secure server-side applications using modern backend technologies.',
        techStack: [
            {name: 'expressjs', icon: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'},
            {name: 'MySQL', icon: 'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white'},
            ]
    }
]