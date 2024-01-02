"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname, useRouter } from "next/navigation"
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";



export const NavbarRoutes = () => {
    // hooks
    const pathname = usePathname();
    const router = useRouter();

    const isTeacherPage = pathname?.startsWith("/teacher")
    const isPlayerPage = pathname?.includes("/chapter")
    return (
        <div className="flex gap-x-2 ml-auto">
            {
                isTeacherPage || isPlayerPage ? (
                    <Button size="sm" variant="ghost" className="hover:underline">
                        <LogOut className="h-4 w-4 mr-2"/>
                         Exit
                    </Button>
                ) : ( 
                    <Link href="/teacher/courses">
                        <Button size="sm" variant="ghost" className="hover:underline">
                            Teacher Mode
                        </Button>
                    </Link>
                )
            }
            <UserButton
                afterSignOutUrl="/"
            />
        </div>
    )
}