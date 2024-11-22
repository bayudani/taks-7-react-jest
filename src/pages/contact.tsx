import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"

import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you would typically send the data to a server
        alert('Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section className="py-20 bg-background relative">
            <BackgroundBeams className="absolute inset-0" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
                        <p className="text-muted-foreground">
                            INTERESTED IN COLLABORATING OR JUST WANT TO CHAT?
                        </p>
                    </div>

                    <Card className="bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Get In Touch</CardTitle>
                            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="bg-background/50"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="bg-background/50"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        className="min-h-[150px] bg-background/50"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="mt-12 text-center">
                        <h3 className="text-xl font-semibold mb-6">FIND ME ON</h3>
                        <p className="text-muted-foreground mb-6">
                            Feel free to <span className="text-primary">connect</span> with me
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="https://github.com/bayudani" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Github className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Twitter className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="https://linkedin.com/in/bayu-dani-kurniawan" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Linkedin className="w-5 h-5" />
                                </Button>
                            </a>
                            <a href="https://instagram.com/bayukrnw_n" target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Instagram className="w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

