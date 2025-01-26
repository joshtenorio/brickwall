import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader } from "~/components/ui/sidebar"
import { Button } from "./ui/button"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
            <Button variant={'ghost'} asChild><Link href={'/'}>brickwall</Link></Button>
        </SidebarHeader>
        <SidebarFooter>
            <Button variant={'outline'} asChild><Link href='/about'>About</Link></Button>
        </SidebarFooter>
    </Sidebar>
  )
}
