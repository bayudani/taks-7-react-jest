"use client";
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'

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
        <section className="h-screen w-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <HeroHighlight className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center px-4 relative z-10"
                >
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-5xl sm:text-7xl font-bold text-white mb-6"
                    >
                        Hi! I'm{" "}
                        <Highlight className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                            Bayu Dani Kurniawan
                        </Highlight>
                    </motion.h1>
                    <div className="text-2xl sm:text-3xl text-white/80 mb-12 h-12">
                        I'm a{" "}
                        <Highlight className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                            {currentPhrase}
                        </Highlight>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full"
                            onClick={() => navigate('/about')}
                        >
                            Get In Touch
                        </Button>
                    </motion.div>
                </motion.div>
            </HeroHighlight>
        </section>
    )
}

export default Hero