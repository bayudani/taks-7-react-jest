import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { category: "Languages", items: ["Java+", "JavaScript", "TypeScript", "PHP"] },
  { category: "Frontend", items: ["React.js","Boostrap CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "Laravel"] },
  { category: "Tools", items: ["Git", "Docker", "Figma"] }
]

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">
                LET ME <span className="text-primary">INTRODUCE</span> MYSELF
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I fell in love with programming and I have at least learnt something, I think... 🤔
                </p>
                <p>
                  I am fluent in classics like <span className="text-primary">C++, Javascript and Go</span>.
                </p>
                <p>
                  My field of Interest's are building new{" "}
                  <span className="text-primary">Web Technologies and Products</span> and also in areas related to{" "}
                  <span className="text-primary">Blockchain</span>.
                </p>
                <p>
                  Whenever possible, I also apply my passion for developing products with{" "}
                  <span className="text-primary">Node.js</span> and Modern Javascript Library and Frameworks like{" "}
                  <span className="text-primary">React.js and Next.js</span>
                </p>
              </div>
            </div>
            <div className="w-64 h-64 relative">
              <div className="w-full h-full rounded-full bg-primary/20 overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Skillset</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

