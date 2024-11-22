import { Link, useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// import { BackgroundBeams } from "@/components/ui/background-beams"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description: "Welcome to my portfolio.",
  },
  {
    title: "About",
    href: "/about",
    description: "Learn more about me and my skills.",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Check out my latest projects.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Get in touch with me.",
  },
]

export function Navbar() {
  const location = useLocation()

  return (
    <NavigationMenu className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavigationMenuList className="container h-14 px-4">
        {components.map((component) => (
          <NavigationMenuItem key={component.title}>
            <Link to={component.href}>
              <NavigationMenuLink 
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === component.href && "text-primary"
                )}
              >
                {component.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

      </NavigationMenuList>
    </NavigationMenu>
    
  )
  
}

