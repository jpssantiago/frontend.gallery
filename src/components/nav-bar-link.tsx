"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export type NavBarLinkProps = {
    href: string
    children?: ReactNode
    className?: string
}

export function NavBarLink({ href, children, className }: NavBarLinkProps) {
    const pathname = usePathname()
    const isActive = pathname == href

    return (
        <Link
            href={href}
            className={cn("font-medium text-sm text-zinc-600 transition-all hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-500", isActive && "text-blue-500 dark:text-blue-500", className)}
        >
            {children}
        </Link>
    )
}