import {ReactNode} from 'react';
import {BiLogoKubernetes} from 'react-icons/bi';
import {CgCircleci} from 'react-icons/cg';
import {DiDocker, DiDotnet, DiGithub, DiJavascript} from 'react-icons/di';
import {FaPython} from 'react-icons/fa';
import {FaAws, FaGolang} from 'react-icons/fa6';
import {RiGitlabLine} from 'react-icons/ri';
import {
  SiAnsible,
  SiArgo,
  SiGooglecloud,
  SiHelm,
  SiPrometheus,
  SiTerraform,
} from 'react-icons/si';

import Boxboat from '@billboggs/assets/boxboat.svg';
import Determined from '@billboggs/assets/determined.svg';
import HPE from '@billboggs/assets/hpe.svg';
import Levvel from '@billboggs/assets/levvel.png';
import Spencer from '@billboggs/assets/spencer.png';

type Level = 0 | 1 | 2 | 3 | 4 | 5;

interface Skill {
  name: string;
  icon: ReactNode;
  level: Level;
}

type SkillMap = {[key: string]: Skill[]};

interface CompanyInfo {
  logo: string;
  name: string;
  website: string;
}

export interface ResumeItem {
  id?: number;
  company: CompanyInfo;
  title: string;
  timespan?: string;
  highlights?: string[];
}

export const ROLE_TITLE = 'Senior Full-Stack Infrastructure Engineer';

export const CERTIFICATIONS_SECTION = 'Certifications';
export const EDUCATION_SECTION = 'Education';
export const EXPERIENCE_SECTION = 'Professional Experience';
export const PROJECTS_SECTION = 'Projects';
export const TECHNICAL_SKILLS_SECTION = 'Technical Skills';

export const CKA_URL =
  'https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka';
export const PSU_URL = 'https://www.psu.edu';
export const ROTOR_WAKE_URL = 'https://www.youtube.com/watch?v=DBetkGtZVVc';

export const RESUME_ITEMS: ResumeItem[] = [
  {
    id: 1,
    company: {
      logo: Determined,
      name: 'HPE AI at Scale',
      website: 'https://www.determined.ai',
    },
    title: 'Tech Lead and Senior Software Engineer',
    timespan: 'February 2023 - November 2024',
    highlights: [
      'Tech Lead for the HPE AI at Scale Managed Services Team, driving the development and delivery of enterprise-scale AI solutions.',
      'Designed and built a SaaS product leveraging Determined.ai and Pachyderm in AWS and GCP, enabling scalable and efficient AI workflows.',
      'Led integration efforts to connect HPE AI at Scale Managed Services with the HPE GreenLake Cloud Platform.',
      'Collaborated with HPE Cyber Security Teams to conduct application security reviews on the teams software products.',
      'Migrated existing Determined.ai managed service installations from EC2 to EKS.',
      'Implemented Software Bill of Materials (SBOM) generation for all managed service components in CI pipelines.',
      'Mentored and guided Junior Software Engineers.',
      'Project lead for the deployment aspect of a new RAG application within HPE.',
      'Led the Determined.ai release process.',
      'Ran team sprint rituals (e.g., planning, standups).',
    ],
  },
  {
    id: 2,
    company: {
      logo: HPE,
      name: 'HPE',
      website: 'https://www.hpe.com/us/en/storage/nimble.html',
    },
    title: 'Lead DevOps Engineer',
    timespan: 'September 2019 - February 2023',
    highlights: [
      'Led DevOps team and architected CI/CD pipelines for Storage Support Web Applications.',
      'Deployed and maintained multiple Kubernetes clusters in an on-premises environment.',
      'Architected backend in Golang for four products.',
      'Architected monitoring, alerting, and logging infrastructure.',
      'Migrated legacy applications to Kubernetes.',
      'Maintained Gitlab and Gitlab Runner for team.',
      'Researched, designed, and implemented SBOM generation and validation in CI pipeline.',
      'Designed and implemented Support Web Application authentication.',
      'Presented infrastructure design with HPEs architecture review board.',
      'Mentored Junior Software Engineers.',
      'Maintained Mattermost chat server for Nimble Storage Support.',
      'Contributed to Microservice architecture in C#.',
      'Debugged problems with legacy Ruby and Perl code.',
      'Worked with Cyber Security team to ensure that all infrastructure adhered to security requirements.',
    ],
  },
  {
    id: 3,
    company: {
      logo: Boxboat,
      name: 'Boxboat',
      website: 'https://www.ibm.com/consulting/boxboat',
    },
    title: 'DevOps Engineer',
    timespan: 'May 2019 - August 2019',
    highlights: [
      'Educated clients on best practices regarding Docker and Kubernetes.',
      'Consulted with clients educating them on what is needed for monitoring and logging in Kubernetes clusters.',
      'Performed multiple client infrastructure installs using tools such as Ansible and Terraform.',
      'Taught Docker and Kubernetes training courses.',
      'Reviewed the needed security measures for Kubernetes and containers with client teams.',
      'Stood up Docker EE on AWS for demos to clients.',
      'Led a client engagement for a team that was attempting to adopt Kubernetes into their organization. Helped the team migrate their Websphere servers over to Kubernetes.',
      'Worked with teams on how to come up with a Git branching strategy that worked best for them.',
      'Setup CI/CD pipelines for multiple companies.',
    ],
  },
  {
    id: 4,
    company: {
      logo: Levvel,
      name: 'Levvel.io',
      website: 'https://levvel.io',
    },
    title: 'Senior Consultant',
    timespan: 'October 2017 - May 2019',
    highlights: [
      'Mentored team members on design and coding best practices.',
      'Worked with client architecture teams to talk through critical design decisions.',
      'Wrote front end Aurelia app that was deployed in Azure.',
      'Wrote an API in .NET that Aurelia front end consumed.',
      'Wrote multiple Azure Function Apps in .NET core.',
      'Implemented the first Azure data factory pipelines for company to transform bank and internal transaction data to data that could be consumed by application users.',
      'Worked with client DevOps team to get the first Azure DevOps CI/CD pipeline up and running.',
      'Connected .NET API and Azure functions into Azure Key Vault.',
      'Wrote POC code to connect to an Azure Redis Cache. The POC was written with the Cache-Aside design pattern. Presented code to the client’s architecture team and later integrated it in with one of the client’s APIs.',
      'Setup test automation for Azure functions and data factory pipelines in clients CI environment.',
      'Reported directly to company director about the team’s progress for our biggest client.',
    ],
  },
  {
    id: 5,
    company: {
      logo: Spencer,
      name: 'Spencer Health Solutions',
      website: 'https://spencerhealthsolutions.com',
    },
    title: 'Software Engineer',
    timespan: 'February 2015 - October 2017',
    highlights: [
      'Sole architect and developer of manufacturing test application which tested the main company product during the build process.',
      'Collaborated with the hardware engineering team to plan and implement a system that fully tested every aspect of the medication dispenser to ensure functionality when it reached the end user.',
      'Integrated the manufacturing test application in with existing reporting software and sent test results in XLink format to a dedicated server at the manufacturer. This information was used by the manufacturer to validate every device that went through the assembly line.',
      'Sole developer of the Bluetooth module on the dispenser. Implemented Bluetooth connection logic with Bluez and passed data from the peripheral device to the cloud via the dispenser. Also created an Api routes for the Spencer cloud platform to receive Bluetooth readings for display on the customer portal.',
      'Implemented a cell chip communication module which interacts with the cell chip on the dispenser. The module is used to periodically run diagnostics on the cell chip to ensure it is still up and communicating with the cloud.',
      'Migrated a code base written in C#/.Net to Node.js.',
      'Worked on both cloud and embedded device teams, sometimes working on full stack epics involving both embedded device and API development in the cloud.',
      'Designed a proof-of-concept RabbitMQ message broker between the medication dispenser and the cloud in order to provide two-way communication.',
      'Released the spencerAssist app to the app store for both Android and iPhone.',
    ],
  },
];

export const SKILLS: SkillMap = {
  Languages: [
    {name: 'C#', icon: <DiDotnet />, level: 3},
    {name: 'Golang', icon: <FaGolang />, level: 5},
    {name: 'Javascript', icon: <DiJavascript />, level: 4},
    {name: 'Python', icon: <FaPython />, level: 3},
  ],
  Infrastructure: [
    {name: 'Ansible', icon: <SiAnsible />, level: 3},
    {name: 'ArgoCD', icon: <SiArgo />, level: 3},
    {name: 'AWS', icon: <FaAws />, level: 4},
    {name: 'CircleCI', icon: <CgCircleci />, level: 4},
    {name: 'Docker', icon: <DiDocker />, level: 5},
    {name: 'GCP', icon: <SiGooglecloud />, level: 4},
    {name: 'Github', icon: <DiGithub />, level: 4},
    {name: 'Gitlab', icon: <RiGitlabLine />, level: 4},
    {name: 'Helm', icon: <SiHelm />, level: 5},
    {name: 'Kubernetes', icon: <BiLogoKubernetes />, level: 5},
    {name: 'Prometheus', icon: <SiPrometheus />, level: 4},
    {name: 'Terraform', icon: <SiTerraform />, level: 3},
  ],
};
