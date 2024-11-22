import { Hero } from '../components/hero'
import { ParticlesBackground } from '../components/particleBackground'

export function Home() {
    return (
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
    )
  }

