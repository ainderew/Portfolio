import { experienceObject } from "../../../../../core/types/base";

export const experiences: experienceObject = {
  expertise: {
    position: "Senior Software Engineer",
    duration: "Feb 2026 – Present",
    employer: "Expertise.com (Forbes Advisor)",
    location: "California (Remote)",
    link: "https://www.linkedin.com/company/expertise-llc",
    logo: "/assets/expertise-icon.svg",
    responsibilities: [
      "Developing full-stack features for a professional matching platform serving 200+ service industries",
      "Building scalable solutions to connect consumers with vetted service providers nationwide",
      "Contributing to the research and ranking platform that evaluates 60,000+ businesses monthly",
      "Working with TypeScript to deliver high-quality, maintainable code across the stack",
    ],
    techstack: ["TypeScript", "ReactJS", "NextJS", "NodeJS"],
  },
  theoria: {
    position: ["Senior Full Stack Developer", "Full Stack Developer"],
    duration: ["Aug 2023 – Present", "Jun 2022 – Aug 2023"],
    employer: "Theoria Medical",
    location: "Michigan (Remote)",
    link: "https://www.linkedin.com/company/theoria-medical",
    logo: "/assets/theoria-icon.svg",
    responsibilities: [
      "Spearheaded the adoption of End-to-end testing and automated CI/CD pipelines for a 3-man team, reducing production deployment errors and establishing a culture of peer code reviews.",
      "Collaborated with a senior engineering team to execute a massive infrastructure optimization of our medical platform; leveraged Microsoft Azure Application Insights to identify application bloat, successfully consolidating the environment from 90 servers (VMs) down to 10.",
      "Automated our application uptime monitoring and logging workflow and integrated it into our Slack workplace to provide 100% notification coverage related to our outages and improve response time.",
      "Redesigned the syncing process of our applications to use a currently available service, which resulted in 100+ hours of manual labor saved each week.",
      "Collaborated in a 5-member team to build a product from the ground up that integrated with a collaborating team's existing product.",
      "Optimized codebase by finding major code errors and code smells, one of which caused hundreds of thousands of duplicate documents in our MongoDB database.",
      "Developed the entire notification and push notification system for a messaging application that integrated with the main service we provided.",
    ],
    techstack: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "TypeGraphQL",
      "NodeJS",
      "MongoDB",
    ],
  },
  group61: {
    position: "Fullstack Web Developer",
    duration: "Sep 2020 - June 2021",
    employer: "Group 61",
    link: "https://group61.com",
    logo: "/assets/briefcase-icon.svg",
    responsibilities: [
      "Communicated with stakeholders directly to integrate demands into technical plans",
      "Designed Restful APIs to handle automation of student enrollment",
      "Developed and designed customer facing web interface",
    ],
    techstack: ["ReactJS", "JavaScript", "NodeJS", "Express", "MySql", "Git"],
  },
};

export const jobList = [
  {
    name: "Expertise.com (Forbes Advisor)",
    experienceKey: "expertise",
    logo: "/assets/expertise-icon.svg",
  },
  {
    name: "Theoria Medical",
    experienceKey: "theoria",
    logo: "/assets/theoria-icon.svg",
  },
  {
    name: "Group61",
    experienceKey: "group61",
    logo: "/assets/briefcase-icon.svg",
  },
];
