"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  DumbbellIcon,
  HomeIcon,
  MenuIcon,
  UserIcon,
  X,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            holo<span className="text-primary">fit</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-5 ">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>
              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 hover:text-white text-primary hover:bg-primary/10"
              >
                <Link href="/generate">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/50"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
        {isSignedIn && <UserButton />}
        <button onClick={toggleNavDrawer}>
          <MenuIcon className="size-7 text-primary cursor-pointer ml-2" />
        </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed md:hidden top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-screen bg-background shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <X className="size-6 text-gray-600 cursor-pointer" />
          </button>
        </div>

        {/* Navigation links */}
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4"> Menu </h2>
          <nav className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              onClick={toggleNavDrawer}
            >
              <HomeIcon size={16} />
              <span>Home</span>
            </Link>
            <Link
              href="/generate-program"
              className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              onClick={toggleNavDrawer}
            >
              <DumbbellIcon size={16} />
              <span>Generate</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              onClick={toggleNavDrawer}
            >
              <UserIcon size={16} />
              <span>Profile</span>
            </Link>
            <Button
              asChild
              variant="outline"
              className="border-primary/50 hover:text-white text-primary hover:bg-primary/10"
              onClick={toggleNavDrawer}
            >
              <Link href="/generate">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
