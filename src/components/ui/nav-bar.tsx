import { Menu } from "lucide-react";

import {
  NavLink,
} from "react-router";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Button } from "./button";

const SECTIONS = [
  { id: "", label: "Home" },
  // { id: "teaching", label: "Teaching" },
  // { id: "research", label: "Research" },
] as const;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {SECTIONS.map((s) => (
          <NavigationMenuItem key={s.id}>
            <NavigationMenuLink asChild>
              <NavLink to={`/${s.id}`} end>
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-medium"
                >
                  {s.label}
                </Button>
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <div className="mt-6 space-y-2">
          {SECTIONS.map((s) => (
            <Button
              key={s.id}
              variant="ghost"
              className="w-full justify-start text-base"
              onClick={() => {
                scrollToId(s.id);
                // Close the sheet by clicking the overlay programmatically
                const overlay = document.querySelector<HTMLElement>(
                  "[data-state='open'][data-radix-sheet-override]"
                );
                overlay?.click();
              }}
            >
              {s.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 md:h-20 items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* Uncomment if you have a logo asset */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("hero");
              }}
              className="text-lg md:text-xl font-bold"
            >
              Eduardo Davalos, Ph.D.
            </a>
          </div>

          <DesktopNav />
          <div className="md:hidden flex items-center gap-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}