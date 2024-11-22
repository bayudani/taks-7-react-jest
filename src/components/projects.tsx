import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
    title: string
    description: string
    technologies: string[]
    image: string
    link: string
    category: string
}

const projects: Project[] = [
    {
        title: 'Project 1',
        description: 'A brief description of your project goes here.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        image: '/placeholder.svg',
        link: '#',
        category: 'Web',
    },
    {
        title: 'Project 2',
        description: 'Another amazing project you worked on.',
        technologies: ['Next.js', 'GraphQL', 'Styled Components'],
        image: '/placeholder.svg',
        link: '#',
        category: 'Mobile',
    },
    {
        title: 'Project 3',
        description: 'Your third impressive project.',
        technologies: ['Vue.js', 'Node.js', 'MongoDB'],
        image: '/placeholder.svg',
        link: '#',
        category: 'Web',
    },
]

const categories = ['All', 'Web', 'Mobile', 'Desktop']

export function Projects() {
    const [filter, setFilter] = useState('All')

    const filteredProjects = projects.filter(project =>
        filter === 'All' ? true : project.category === filter
    )

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center text-foreground mb-12"
                >
                    My Projects
                </motion.h2>
                <div className="flex justify-center space-x-4 mb-8">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setFilter(category)}
                            variant={filter === category ? "default" : "outline"}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="bg-card text-card-foreground h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-md mb-4"
                                    />
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <a
                                        href={project.link}
                                        className="text-primary hover:underline font-medium"
                                    >
                                        View Project →
                                    </a>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

