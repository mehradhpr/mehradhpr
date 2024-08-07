"use client";
import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

export default function MainNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center justify-between bg-background/60 backdrop-blur-md px-4 md:px-6">
      <nav className="hidden gap-6 items-center md:flex">
        <p className="flex items-center gap-2 text-lg font-semibold">Mehrad Hassanpour</p>

        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground transition-all duration-300"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-muted-foreground hover:text-foreground transition-all duration-300"
          prefetch={false}
        >
          Contact
        </Link>
        <Link
          href="/projects"
          className="text-muted-foreground hover:text-foreground transition-all duration-300"
          prefetch={false}
        >
          Projects
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/mehradhpr"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mehradhassanp/"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 p-4">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
              <Link
                href="./projects"
                className="text-muted-foreground hover:text-foreground"
                prefetch={false}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
