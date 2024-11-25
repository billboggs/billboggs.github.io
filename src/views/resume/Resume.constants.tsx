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
      'Designed and built a SaaS product leveraging Determined.ai and Pachyderm in AWS and GCP, enabling scalable and efficient AI workflows',
      'Led integration efforts to connect HPE AI at Scale Managed Services with the HPE GreenLake Cloud Platform.',
      'Collaborated with HPE Cyber Security Teams to conduct application security reviews on the team’s software products.',
      'Migrated existing Determined.ai managed service installations from EC2 to EKS.',
      'Implemented Software Bill of Materials (SBOM) generation for all managed service components in CI pipelines.',
      'Mentored and guided multiple software engineers and interns',
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
      'DevOps team lead for storage support tooling.',
      'Deployed and maintained multiple Kubernetes clusters in an on-premises environment.',
      'Architected Golang microservice backend for four separate products.',
      'Architected monitoring, alerting, and logging infrastructure.',
      'Containerized legacy applications and deployed them to Kubernetes clusters.',
      'Maintained Gitlab and Gitlab Runner for the storage support team.',
      'Researched, designed, and implemented SBOM generation and validation in CI pipelines.',
      'Designed and implemented Support Web Application authentication system.',
      'Presented infrastructure design with HPE architecture review board.',
      'Mentored multiple junior software engineers.',
      'Debugged problems with legacy code running in multiple different languages including Perl, Ruby and Python.',
      'Worked with Cyber Security team to ensure that all storage support infrastructure adhered to security requirements.',
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
      'Educated clients on best practices regarding Docker and Kubernetes',
      'Consulted with clients educating them on what is needed for monitoring and logging in Kubernetes clusters',
      'Performed multiple client infrastructure installs using tools such as Ansible and Terraform.',
      'Taught Docker and Kubernetes training courses.',
      'Worked with multiple clients on container and Kubernetes security best practices.',
      'Led a client engagement for a team that was attempting to adopt Kubernetes into their organization. Helped the team migrate their WebSphere servers to Kubernetes.',
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
      'Worked with client architecture teams on critical design decisions.',
      'Lead developer on multiple Azure Function Apps in .NET core.',
      'Implemented the first Azure data factory pipelines for a client to transform bank and internal transaction data so that it could be consumed in a more manageable format by customers.',
      'Worked with client DevOps team to get the first Azure DevOps CI/CD pipeline up and running.',
      'Architected a caching system for a client that was later integrated with their APIs across the company.',
      'Reported directly to company director about the team’s progress for Levvel’s biggest client.',
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
      'Sole architect and developer of manufacturing test application. The test application was critical to the quality assurance of the company hardware that was released to customers.',
      'Designed and developed the Bluetooth module on the company’s medication dispensing device. This allowed customers to connect remote devices such as blood pressure cuffs and pulse oximeters to our dispensing device. This then gave medical professionals using our products better visibility into their patient’s overall health.',
      'Migrated an existing .NET code base to Node.js.',
      'Worked across the whole company tech stack, which included embedded device and full stack web development.',
      'Released mobile application to both the Android and iPhone app stores.',
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
