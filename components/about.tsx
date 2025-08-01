import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#051923]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Little Bit <span className="text-[#00a6fb]">About Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I'm a passionate technologist who transitioned from Software Engineering to Data Engineering, currently
            making an impact at Electronic Arts while pursuing advanced studies in Data Science.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Code className="text-[#00a6fb] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-4">Software Engineering</h3>
              <p className="text-white/70">
                Strong foundation in software development with experience in building scalable applications and systems.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Database className="text-[#00a6fb] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-4">Data Engineering</h3>
              <p className="text-white/70">
                Currently working as a Data Engineer Intern at Electronic Arts, focusing on data pipelines and
                analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <Brain className="text-[#00a6fb] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-4">Data Science</h3>
              <p className="text-white/70">
                Pursuing a Master's in Data Science to deepen my expertise in machine learning and advanced analytics.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            Born and raised in Madrid, Spain, I've always been fascinated by technology and its potential to solve
            complex problems. My journey began with Software Engineering, where I developed a solid foundation in
            programming and system design. This experience naturally led me to the exciting world of Data Engineering,
            where I now help Electronic Arts harness the power of data to create better gaming experiences. I'm
            constantly learning and growing, currently pursuing a Master's in Data Science to stay at the forefront of
            this rapidly evolving field.
          </p>
        </div>
      </div>
    </section>
  )
}
