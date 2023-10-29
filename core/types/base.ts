export interface workExperienceData{
	position: string | string[],
	duration: string | string[],
	employer: string,
	link: string,
	responsibilities: string[],
	techstack: string[]
}

export interface experienceObject{
	[key:string]:workExperienceData
}