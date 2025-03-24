"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/custom/contact-form"
import ProjectCard from "@/components/custom/project-card"
import TechStack from "@/components/custom/tech-stack"
import ThreeDModel from "@/components/custom/3dmodel"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background font-sans">

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center px-4 sm:px-6 md:px-8 justify-between">
          <div className="flex items-center space-x-4">
            <Link className="text-lg font-bold hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]" href="/">
              Davidcui.dev
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]">About</Link>
            <Link href="#projects" className="transition hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]">Projects</Link>
            <Link href="#contact" className="transition hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]">Contact</Link>
          </nav>
          <Button variant="outline" className="transition hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]">
            <a href="/resume.pdf" download="DavidCui_resume.pdf">Resume</a>
          </Button>
        </div>
      </header>

      <div className="bg-background">
        {/* {!isMobile && <ThreeDModel />} */}
        <ThreeDModel />

        <section id="landing" className="w-full min-h-screen flex flex-col justify-center items-center text-center z-10 px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white drop-shadow-2xl">David Cui</h1>
          <h2 className="text-xl sm:text-3xl tracking-tighter drop-shadow-2xl">Engineer | Innovator | Artist</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-lg dark:text-gray-400 mt-4">
            Creating elegant solutions from complex problems.
          </p>

          <div className="flex justify-center items-center space-x-4 mt-6 z-10">
            <Link href="https://github.com/boncui" target="_blank">
              <Button variant="outline" size="icon" className="hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/boncui" target="_blank">
              <Button variant="outline" size="icon" className="hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <a href="mailto:d.cui@wustl.edu">
              <Button variant="outline" size="icon" className="hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)] transition">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>

          <div className="absolute bottom-10 animate-bounce">
            <Link href="#about">
              <Button variant="ghost" className="text-sm sm:text-base transition hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">↓ Scroll Down</Button>
            </Link>
          </div>
        </section>
      </div>

      <main className="container flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-gray-600 dark:text-gray-300 space-y-4 text-sm sm:text-base">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
                <p>Hi, I&apos;m David Cui. My passions lie at the intersection between Science and Art. I have been programming since 2022 and have experience in Full-stack development, ML Operations, and basic robotics.</p>
                <p>I have worked as a Lead Full-stack Developer at a student start-up Echo-Sync and a Lead ML Ops Engineer at Echo-Sync and Portal Career Discovery.</p>
                <p>I study Computer Science and Mathematics at Washington University in St. Louis.</p>
                <p>Other interests of mine include soccer, rock climbing, financial investing, and chess.</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/profile/profilepic.png" alt="David Cui" width={280} height={280} className="rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
              <ProjectCard title="StudentSwap" description="A full-stack centralized platform for students to trade sublease contracts built with Typescript, React, and MongoDb." type="Fullstack" image="/projects/studentswap.png" siteLink="https://student-swap.vercel.app/" link="https://github.com/boncui/StudentSwap" tags={["Typescript", "React", "MongoDB", "Tailwind CSS", "Express", "Node.js"]} />
              <ProjectCard title="Melanoma Dectection" description="A real-time task management application with team collaboration features." type="ML" image="/projects/melanoma.png" link="https://github.com/boncui/Melanoma-Classification" tags={["Tensorflow", "Keras", "Python"]} />
              <ProjectCard title="Dungeons and Dragons game" description="A simple DnD game. Project made on 07/2023" type="Game" image="/projects/dnd.png" siteLink="https://boncui.pythonanywhere.com" link="https://github.com/boncui/Dungeons_n_dragons_combat" tags={["Python", "Flask"]} />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">Tech Stack</h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32 w-full max-w-4xl text-left">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">Get in Touch</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 sm:px-6 md:px-8">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Davidcui.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">Terms of Service</Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
