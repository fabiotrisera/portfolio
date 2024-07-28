export default interface IResume {
    fullName: string;
    jobTitle: string;
    headline: string[];
    workExperiences: IWorkExperience[];
}

export interface IWorkExperience {
    companyName: string;
    companyUrl: string;
    jobTitle: string;
    highlights: string[];
    skills: string[];
}