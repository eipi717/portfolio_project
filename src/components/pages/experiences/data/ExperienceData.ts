import {Work} from "../model/Work";

export const experiences: Work[] = [
    {
        id: 1,
        period: '08/2022 — PRESENT',
        title: 'Software Developer',
        company: 'Lively Impact Technology Limited',
        details: [
            'Collaborated with the government to develop a web scraping tool that\n' +
            'automated scraping of over 40 websites, eliminating the need for manual data\n' +
            'collection',
            'Developed an social listening tool that enabled the clients to stay informed\n' +
            'about online discussions and manage their brand reputation',
            'Developed and maintained a data segmentation tool with a data warehouse and\n' +
            'data pipeline for processing big data, enabled the clients to gain insights from\n' +
            'large datasets',
            'Developed and maintained a predictive model that predicted the chunk rate of\n' +
            'the telecom company in Hong Kong',
        ],
        skills: ['Python', 'Java', 'Linux', 'SQL', 'NoSQL', 'Hibernate', 'Springboot', 'Apache Flink', 'React', 'JavaScript', 'TypeScript', 'Data Automation', 'Data Pipeline'],
        companyUrl: 'https://www.livelyimpact.com'
    },
    {
        id: 2,
        period: '05/2022 — 08/2022',
        title: 'AI Specialist Internship',
        company: 'WildFaces Technology Ltd',
        details: [
            'Assisted in Data Mining activities (facial data collection)',
            'Established research to enhance the existing product on facial recgonition',
        ],
        skills: ['Python', 'OpenCV', 'Data Mining', 'Data Collection', 'Facial Recognition', 'Computer Vision'],
        companyUrl: 'https://wildfaces.ai'
    },
    {
        id: 3,
        period: '05/2018 — 08/2019',
        title: 'Student Assistant in the Hong Kong Community College',
        company: 'The Hong Kong Polytechnic University',
        details: [
            'Provided help to students who have difficulties in mathematics, especially on\n' +
            'Calculus, Statistic and Linear Algebra',
            'Held the enhancement course (Random Variables, Calculus, Vectors and Matrix\n' +
            'calcuations) to help students who perform poor in the course'
        ],
        skills: ['Mathematics', 'Calculus', 'Statistic', 'Linear Algebra', 'Teaching college students'],
        companyUrl: 'https://www.polyu.edu.hk'
    },
];