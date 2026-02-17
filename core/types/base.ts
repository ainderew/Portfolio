export interface workExperienceData{
	position: string | string[],
	duration: string | string[],
	employer: string,
	location?: string,
	link: string,
	logo?: string,
	responsibilities: string[],
	techstack: string[]
}

export interface experienceObject{
	[key:string]:workExperienceData
}