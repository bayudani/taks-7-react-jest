import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

const phrases = [
    "Software Engineer Student",
    "UI/UX Designer",
    "Full Stack Developer",
]

export function Hero() {
    const [currentPhrase, setCurrentPhrase] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentChar, setCurrentChar] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {
        if (currentChar < phrases[currentIndex].length) {
            const timeout = setTimeout(() => {
                setCurrentPhrase(prev => prev + phrases[currentIndex][currentChar])
                setCurrentChar(prev => prev + 1)
            }, 100)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                setCurrentPhrase('')
                setCurrentChar(0)
                setCurrentIndex((prev) => (prev + 1) % phrases.length)
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [currentChar, currentIndex])

    return (
        <section id="home" className="min-h-screen flex items-center bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
                        Hi! I'm <span className="text-primary">Bayu Dani Kurniawan</span>
                    </h1>
                    <div className="text-xl sm:text-2xl text-muted-foreground mb-8 h-8">
                        I'm a <span className="text-primary">{currentPhrase}</span>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                            onClick={() => navigate('/about')}
                        >
                            Get In Touch
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

