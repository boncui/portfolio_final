"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image";



const technologies = [
  {
    category: "Languages",
    skills: ['Python', 'Java', 'C++'],
  },
  {
    category: "Libraries",
    skills: ['Tensorflow', 'Pytorch', 'Pandas', 'NumPy', 'Keras', 'Matplot', 'Scikit-Learn', 'Seaborn'],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Javascript", "TailwindCSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL", "SQL"],
  },
  
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "Git"],
  },
  {
    category: "Tools",
    skills: ["VS Code", "Postman", "Figma", "GitHub", "Vercel"],
  },
]

const techIcons: { [key: string]: string } = {
  Python: "/techstack/python.png",
  Java: "/techstack/java.png",
  "C++": "/techstack/C++.png",
  Tensorflow: "/techstack/tensor-flow.png",
  Pytorch: "/techstack/pytorch.png",
  Pandas: "/techstack/pandas.png",
  NumPy: "/techstack/numpy.png",
  Keras: "/techstack/keras.png",
  Matplot: "/techstack/matplot.png",
  "Scikit-Learn": "/techstack/sklearn.png",
  Seaborn: "/techstack/seaborn.png",
  React: "/techstack/react.png",
  "Next.js": "/techstack/next.png",
  TypeScript: "/techstack/typescript.png",
  Javascript: "/techstack/javascript.png",
  TailwindCSS: "/techstack/tailwind-css.png",
  "Node.js": "/techstack/nodejs.png",
  Express: "/techstack/express.png",
  Django: "/techstack/django.png",
  MongoDB: "/techstack/mongo.png",
  PostgreSQL: "/techstack/postgresql.png",
  SQL: "/techstack/sql.png",
  Docker: "/techstack/docker.png",
  AWS: "/techstack/aws.png",
  Git: "/techstack/git.png",
  "VS Code": "/techstack/vscode.png",
  Postman: "/techstack/postman.png",
  Figma: "/techstack/figma.png",
  GitHub: "/techstack/github.png",
  Vercel: "/techstack/vercel.png",
};

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h2 className="text-lg font-bold mb-4">{tech.category}</h2>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-md ring-1 ring-inset ring-primary/20">
              <Image
                src={techIcons[skill] || "/techstack/default.png"}
                alt={skill}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-primary">{skill}</span>
            </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

