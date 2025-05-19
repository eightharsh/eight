import { Card } from '@/components/card'
import { Activity } from '@/components/resume/activity'
import { Section } from '@/components/resume/section'
import { WorkExperience } from '@/components/resume/work-experience'
import { OpenGraph } from '@/lib/og'

export function generateMetadata() {
  const image = `/api/og?title=${encodeURIComponent('Resume')}`

  return {
    ...OpenGraph,
    title: 'Resume',
    openGraph: {
      title: 'Resume',
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
    twitter: {
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: image,
        },
      ],
    },
  }
}

const workExperiences = [
  {
    company: 'Internship at SJCEM',
    website: 'https://sjcem.edu.in',
    title: 'AR-VR Developer',
    start: 'Dec 2024',
    end: 'Jan 2025',
    responsibilities: [
      'Build AR-VR applications using Unity and C#',
      'Worked with 3D models and animations',
    ],
  },
 
  {
    company: 'Game Dev',
    title: 'game developer',
    start: 'Dec 2024',
    end: 'Jan 2025',
    responsibilities: [
      'Build 2D games using JavaScript and HTML5',
      'Worked with game engines like Phaser and Unity',
      'Worked with 3D models and animations',
      'Worked with game engines like Unity and Unreal Engine',
    ],
  },
]

const projects = [
  {
    name: 'Linux-kernel (Kernel Module)',
    description: 'A Linux kernel module for monitoring system calls',
    link: 'https://github.com/eightharsh/linux-kernel-module',
  },
  {
    name: 'Python GUI application',
    description: 'A Python GUI application for extension based file sorter',
    link: 'https://github.com/eightharsh/python-gui-application',
  },
]

const activities = [
  {
    org: 'Dear Azure',
    website: 'https://kasamshaikh.com/community/dear-azure',
    title: 'part of the community',
    start: '2024',
    end: 'present',
    responsibilities: ['Nothing']
  },
  
]

export default function Page() {
  return (
    <Card>
      <div className="article flex flex-col gap-12">
        <Header />
        <Section title="Skills and Technologies">
          <ul className="list-none">
            <li className="list-none">- JavaScript/TypeScript, Golang</li>
            <li className="list-none">- React, Next.js, Node.js, WordPress, TailwindCSS, SCSS</li>
            <li className="list-none">- MySQL, PostgreSQL, MongoDB</li>
            <li className="list-none">- AWS services, Docker, CI/CD (GitLab, GitHub, BitBucket)</li>
          </ul>
        </Section>

        <Section title="Work Experience">
          {workExperiences.map((workExperience, index) => (
            <>
              <WorkExperience
                key={workExperience.company}
                company={workExperience.company}
                website={workExperience.website}
                title={workExperience.title}
                start={workExperience.start}
                end={workExperience.end}
                responsibilities={workExperience.responsibilities}
              />
              {index < workExperiences.length - 1 && <div className="my-4 h-[1px] bg-gray-4" />}
            </>
          ))}
        </Section>

        <Section title="Projects">
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <div key={project.name}>
                <h4 className="font-semibold">
                  <a href={project.link} target="_blank" className="text-primary hover:underline" rel="noreferrer">
                    {project.name}
                  </a>
                </h4>
                <p className="mb-0">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Activities">
          {activities.map((workExperience, index) => (
            <>
              <Activity
                key={workExperience.org}
                org={workExperience.org}
                website={workExperience.website}
                title={workExperience.title}
                start={workExperience.start}
                end={workExperience.end}
                responsibilities={workExperience.responsibilities}
              />
              {index < activities.length - 1 && <div className="my-4 h-[1px] bg-gray-4" />}
            </>
          ))}
        </Section>

        <Section title="Education">
          <div>
            <h4 className="font-semibold">University of Mumbai, Mumbai, India</h4>
            <p className="mb-0">Sep 2023 - Sep 2027</p>
            <p className="mb-0">BE in Computer Engineering</p>
          </div>
        </Section>

        <Section title="Interests">
          <div>
            <p>Tech, startup, design, stickers and classic cars</p>
          </div>
        </Section>
      </div>
    </Card>
  )
}

function Header() {
  return (
    <header>
      <h2 className="font-semibold text-lg">harsh</h2>
      <div>Student</div>
      <div>mumbai, india</div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <a href="mailto:contact@eightharsh.com" className="text-primary hover:underline">
          contact@eightharsh.com
        </a>
        <a href="https://eightharsh.com" target="_blank" className="text-primary hover:underline" rel="noreferrer">
          eightharsh.com
        </a>

      </div>
    </header>
  )
}
