export interface Project {
    id: number;
    title: string;
    simpleDescription: string;
    detailedDescription: string[];
    imageUrl: string;
    isLiveAvailable: boolean;
    isCodeAvailable: boolean,
    liveUrl: string;
    repoUrl: string;
}