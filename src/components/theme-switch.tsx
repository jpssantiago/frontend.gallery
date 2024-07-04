"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

import { cn } from "@/lib/utils"

export function ThemeSwitch() {
    const [isDark, setIsDark] = useState<boolean>(false)
    
    const { theme, setTheme } = useTheme()

    function handleToggleTheme() {
        setTheme(theme == "light" ? "dark" : "light")
    }

    useEffect(() => {
        setIsDark(theme == "dark")
    }, [theme])

    return (
        <div 
            className="flex bg-zinc-200 dark:bg-zinc-800 p-px border hover:border-blue-500 rounded-full w-12 h-6 transition-all cursor-pointer"
            onClick={handleToggleTheme}
        >
            <div className={cn("flex justify-center items-center bg-white rounded-full w-6 h-full transition-transform duration-300 translate-x-0", isDark && "translate-x-5 bg-black")}>
                {!isDark && <Sun size={16} className="text-black" />}
                {isDark && <Moon size={16} className="text-white" />}
            </div>
        </div>
    )
}