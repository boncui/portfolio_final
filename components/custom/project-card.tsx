import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  type: string // e.g. Fullstack, ML, Game
  image: string
  link: string // GitHub
  siteLink?: string // Optional deployed site
  tags: string[]
}

export default function ProjectCard({
  title,
  description,
  type,
  image,
  link,
  siteLink,
  tags,
}: ProjectCardProps) {
  const typeColors: Record<string, string> = {
    Fullstack: "bg-blue-600",
    Frontend: "bg-green-600",
    ML: "bg-purple-600",
    Game: "bg-red-600",
    Components: "bg-yellow-600",
    Random: "bg-gray-600",
  }

  return (
    <Card className="overflow-hidden">
      {/* Project Image */}
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        {/* Project Type Badge */}
        <div className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${typeColors[type] || "bg-gray-600"}`}>
          {type}
        </div>

        <h3 className="font-semibold text-xl mt-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {/* Deployed Site Link */}
        {siteLink ? (
          <Link href={siteLink} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
            <Globe className="h-4 w-4" />
            Visit Website
          </Link>
        ) : (
          <div />
        )}

        {/* GitHub Link */}
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
