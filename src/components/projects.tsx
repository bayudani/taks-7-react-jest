import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { p1Image, p2Image, p3Image, p4Image } from '@/constant/projectImage'

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
        title: 'Website Bgym',
        description: 'Gym member registration website and gym cashier management',
        technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'PHP Mailer', 'Midtrans'],
        image: p1Image,
        link: '#',
        category: 'Web',
    },
    {
        title: 'Smart Lab',
        description: 'Laboratory loan website',
        technologies: ['PHP', 'MySQL', 'Tailwind CSS'],
        image: p2Image,
        link: '#',
        category: 'Web',
    },
    {
        title: 'Mobile Application gym',
        description: 'Gym member registration app.',
        technologies: ['Figma'],
        image: p3Image,
        link: '#',
        category: 'Desain',
    },
    {
        title: 'Moonlight Memories',
        description: 'Wedding organizer app',
        technologies: ['Kotlin', 'Laravel'],
        image: p4Image,
        link: '#',
        category: 'Mobile',
    },
]

const categories = ['All', 'Web', 'Desain', 'Mobile']

export function Projects() {
    const [filter, setFilter] = useState('All')

    const filteredProjects = projects.filter(project =>
        filter === 'All' ? true : project.category.toLowerCase() === filter.toLowerCase()
    )

    return (
        <section id="projects" className="py-20 bg-background relative z-10">
            <BackgroundBeams className="absolute inset-0 z-0" />
            <div className="container mx-auto px-4 relative z-10">
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

