import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Data Pipeline Optimization",
      description:
        "Optimized data processing pipelines at Electronic Arts, improving performance by 40% and reducing processing time for game analytics.",
      technologies: ["Python", "Apache Spark", "AWS", "SQL"],
      type: "Data Engineering",
      status: "Professional Project",
    },
    {
      title: "Machine Learning Model Deployment",
      description:
        "Built and deployed ML models for predictive analytics, implementing automated retraining pipelines and monitoring systems.",
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      type: "Data Science",
      status: "Academic Project",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Developed a real-time dashboard for monitoring game metrics and player behavior, providing actionable insights for game developers.",
      technologies: ["React", "Node.js", "WebSocket", "PostgreSQL"],
      type: "Full-Stack Development",
      status: "Personal Project",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-[#051923]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected <span className="text-[#00a6fb]">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A collection of projects that showcase my expertise in data engineering, software development, and data
            science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <Badge variant="outline" className="border-[#00a6fb]/50 text-[#00a6fb] text-xs">
                    {project.type}
                  </Badge>
                </div>
                <Badge variant="secondary" className="bg-[#003554]/50 text-white/70 w-fit">
                  {project.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-[#00a6fb]/20 text-[#00a6fb] border-[#00a6fb]/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white hover:text-[#051923] bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-white hover:bg-white hover:text-[#051923] bg-transparent"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#00a6fb] text-[#00a6fb] hover:bg-[#00a6fb] hover:text-white bg-transparent"
          >
            <Link href="#contact">View More Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
