import { Card, CardContent} from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  type: string
  link: string
  siteLink?: string
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
    <Card className="flex flex-col h-full overflow-hidden ">
      {/* Image */}
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* Main Content */}
      <CardContent className="p-4 flex flex-col flex-grow">

      {/* PILL */}
      <div className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${typeColors[type] || "bg-gray-600"}`}>
        {type}
      </div>

        <h3 className="font-semibold text-xl mt-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center whitespace-nowrap rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>


        {/* Push links to bottom */}
        <div className="mt-auto pt-4 border-t flex justify-between items-center">
          {siteLink ? (
            <Link
              href={siteLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors"
            >
              <Globe className="h-4 w-4" />
              Visit Website
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm hover:text-yellow-400 transition-colors"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
