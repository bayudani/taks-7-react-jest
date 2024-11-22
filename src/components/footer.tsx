import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with React & shadcn/ui. The source code is available on{" "}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

