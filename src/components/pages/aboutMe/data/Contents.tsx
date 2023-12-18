import React from "react";
import {Certificate} from "../model/Certificate";

export const languages: string[] = ['Python', 'Java', 'JavaScript', 'Dart', 'C', 'TypeScript', 'Linux'];
export const databasesAndFramework: string[] = ['MySQL', 'MongoDB', 'Hibernate', 'React', 'Springboot', 'Django', 'Flutter', 'Flink'];
export const mathematicsSkills: string[] = ['Probability Theory', 'Operational Research', 'Linear Algebra', 'Calculus', 'Statistic'];
export const hardwareSkills: string[] = ['Arduino', 'Raspberry Pi', 'Embedded System'];

export const allSkills: string[] = [...languages, ...databasesAndFramework, ...mathematicsSkills, ...hardwareSkills];

export const Introduction: React.FC = () => {
    return (
        <p>
            Hello, my name is Nicholas Ho, and I am a dedicated Software Developer with a solid foundation in computer
            engineering,
            holding a Bachelor's degree from The University of Hong Kong. My passion for mathematics and programming has
            driven me to
            specialize in areas such as web scraping, data integration, and segmentation.
            I am currently employed at <a href={'https://livelyimpact.com'} target={"_blank"} rel="noreferrer">Lively Impact Technology
            Limited</a> in Hong Kong,
            where I've successfully developed a web scraping tool that streamlines the collection of information from
            over 40 websites,
            significantly reducing the need for manual data collection.
        </p>
    )
}

export const greetingMsg: string = 'Experienced Software Developer';

export const certificateDetail: Certificate[] = [
    {
        id: 1,
        title: 'Neural Networks and Deep Learning',
        institution: 'DeepLearning.AI',
        category: 'DeepLearning',
        logoUrl: 'https://media.licdn.com/dms/image/C5112AQEQ3SgEbb1lHA/article-cover_image-shrink_720_1280/0/1555671462266?e=2147483647&v=beta&t=wjoQYNQ3tIJclboGCDrFwlZDCT3InsKtsuUluYOgLlA',
        institutionUrl: 'https://www.deeplearning.ai',
    },
    {
        id: 2,
        title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
        institution: 'DeepLearning.AI',
        category: 'DeepLearning',
        logoUrl: 'https://media.licdn.com/dms/image/C5112AQEQ3SgEbb1lHA/article-cover_image-shrink_720_1280/0/1555671462266?e=2147483647&v=beta&t=wjoQYNQ3tIJclboGCDrFwlZDCT3InsKtsuUluYOgLlA',
        institutionUrl: 'https://www.deeplearning.ai',
    },
    {
        id: 3,
        title: 'Structuring Machine Learning Projects',
        institution: 'DeepLearning.AI',
        category: 'DeepLearning',
        logoUrl: 'https://media.licdn.com/dms/image/C5112AQEQ3SgEbb1lHA/article-cover_image-shrink_720_1280/0/1555671462266?e=2147483647&v=beta&t=wjoQYNQ3tIJclboGCDrFwlZDCT3InsKtsuUluYOgLlA',
        institutionUrl: 'https://www.deeplearning.ai',
    },
    {
        id: 4,
        title: 'Convolutional Neural Networks',
        institution: 'DeepLearning.AI',
        category: 'DeepLearning',
        logoUrl: 'https://media.licdn.com/dms/image/C5112AQEQ3SgEbb1lHA/article-cover_image-shrink_720_1280/0/1555671462266?e=2147483647&v=beta&t=wjoQYNQ3tIJclboGCDrFwlZDCT3InsKtsuUluYOgLlA',
        institutionUrl: 'https://www.deeplearning.ai',
    },
    {
        id: 5,
        title: 'Sequence Models',
        institution: 'DeepLearning.AI',
        category: 'DeepLearning',
        logoUrl: 'https://media.licdn.com/dms/image/C5112AQEQ3SgEbb1lHA/article-cover_image-shrink_720_1280/0/1555671462266?e=2147483647&v=beta&t=wjoQYNQ3tIJclboGCDrFwlZDCT3InsKtsuUluYOgLlA',
        institutionUrl: 'https://www.deeplearning.ai',
    },
];