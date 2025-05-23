import { ArcCard } from '@/components/arc-card'
import { Card } from '@/components/card'
import { Posts } from '@/components/posts'

import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    name: '2d game engine',
    description: 'A 2D game engine built with JavaScript and HTML5',
    url: 'https://github.com/eightharsh/2d-game-engine',
  },
  {
    name: 'linux kernel module',
    description: 'A Linux kernel module for monitoring system calls',
    url: 'https://github.com/eightharsh/linux-kernel-module',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* Intro Section */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <ArcCard>
          <div className="relative grid w-full grid-rows-[340px_60px] gap-4 rounded border border-gray-5 bg-[#fff] p-4 md:w-[240px] md:grid-rows-[220px_60px]">
            <figure className="flex justify-center rounded-sm">
              <img src="/img/avatar.jpg" alt="Avatar" className="h-auto w-full rounded-sm object-cover" />
            </figure>
            <div>
              <p className="font-bold text-2xl">HARSH RAJ KUMAR</p>
              <p>Student at SJCEM</p>
            </div>
          </div>
        </ArcCard>
        <div>
          <p className="mb-4">
            Hello, I'm <strong>HARSH</strong>, a Student specializing in JavaScript, including its ecosystem like React, Next.js, and Node.js.
            I also work with Go on occasion. This is my digital garden where I share my interest in a little of everything that crosses my mind, but mostly
            about technology. Visit my official site at{' '}
            <a href="https://eightharsh.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              eightharsh.com
            </a>.
          </p>
          <p className="mb-4">
            I am a student at{' '}
            <a href="https://sjcem.edu.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              SJCEM
            </a>, where I am pursuing my degree in Computer Science and Engineering. I am passionate about technology and love to learn new things.
            I am also a part of the{' '}
            <a href="https://kasamshaikh.com/community/dear-azure" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Dear Azure
            </a>.
          </p>
          <p className="mb-4">Connect with me on:</p>
          <nav className="flex flex-col flex-wrap gap-1 md:flex-row">
            <a href="https://github.com/eightharsh" target="_blank" rel="noreferrer" className="flex flex-1 items-center gap-2 text-gray-9">
              <Github width={18} />
              GitHub
            </a>
            <a href="https://x.com/eightharsh" target="_blank" rel="noreferrer" className="flex flex-1 items-center gap-2 text-gray-9">
              <Twitter width={18} />
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/eightharsh/" target="_blank" rel="noreferrer" className="flex flex-1 shrink-0 items-center gap-2 text-gray-9">
              <Linkedin width={18} />
              LinkedIn
            </a>
          </nav>
        </div>
      </div>

      {/* YouTube Embed Section */}
      <Card>
        <h2 className="pb-2 text-gray-9 capitalize">Intro</h2>
        <div className="relative w-full overflow-hidden rounded-xl border border-gray-4 shadow-sm pt-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/yIz0Cz4r8cs?rel=0&modestbranding=1&controls=1&showinfo=0"
            title=" YouTube Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </Card>

      {/* Projects Section */}
      <Card>
        <h2 className="py-2 text-gray-9 capitalize">Side projects</h2>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              className="-mx-2 px-2 py-1 no-underline after:hidden hover:bg-gray-3 hover:opacity-100"
              rel="noreferrer"
            >
              <h3>{project.name}</h3>
              <p className="my-0 text-gray-9 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </Card>

      {/* Writing Section */}
      <Card>
        <Link href="/w" prefetch={true} className="flex justify-between text-primary">
          <h2 className="py-2 capitalize">Writing ⇢</h2>
        </Link>
        <Posts category="w" group />
      </Card>
    </div>
  )
}
