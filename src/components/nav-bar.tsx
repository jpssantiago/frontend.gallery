"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { NavBarLink } from "@/components/nav-bar-link"
import { Separator } from "@/components/ui/separator"
import { ThemeSwitch } from "@/components/theme-switch"
import { Button } from "@/components/ui/button"

export function NavBar() {
    const [show, setShow] = useState<boolean>(false)

    return (
        <nav className="top-0 left-0 sticky flex justify-between items-center px-40 medium:px-20 small:px-10 w-full h-16">
            <div className="small:px-2">logo</div>

            <div className="flex items-center gap-3 small:hidden h-full">
                <ul className="flex gap-3">
                    <NavBarLink href="/">Home</NavBarLink>
                    <NavBarLink href="/gallery">Gallery</NavBarLink>
                    <NavBarLink href="/contribute">Contribute</NavBarLink>
                    <NavBarLink href="/contact">Contact</NavBarLink>
                </ul>

                <Separator orientation="vertical" className="h-6" />

                <ThemeSwitch />
            </div>

            <Button
                size="icon"
                variant="ghost"
                className="small:flex hidden"
                onClick={() => setShow(!show)}
            >
                <Menu />
            </Button>

            {show && (
                <div className="top-16 left-0 absolute small:flex flex-col justify-center items-start hidden bg-white dark:bg-[#1C1A1E] px-20 w-screen h-[calc(100vh-64px)]">
                    <div className="flex justify-start items-center border-b w-full h-12">
                        <NavBarLink href="/">Home</NavBarLink>
                    </div>

                    <div className="flex justify-start items-center border-b w-full h-12">
                        <NavBarLink href="/gallery">Gallery</NavBarLink>
                    </div>

                    <div className="flex justify-start items-center border-b w-full h-12">
                        <NavBarLink href="/contribute">Contribute</NavBarLink>
                    </div>

                    <div className="flex justify-start items-center border-b w-full h-12">
                        <NavBarLink href="/contact">Contact</NavBarLink>
                    </div>

                    <div className="flex justify-between items-center border-b w-full h-12">
                        <p className="font-medium text-sm text-zinc-600 dark:text-zinc-400">Appearance</p>
                        <ThemeSwitch />
                    </div>
                </div>
            )}
        </nav>
    )
}