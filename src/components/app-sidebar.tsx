import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton } from "~/components/ui/sidebar"
import { Button } from "./ui/button"
import Link from "next/link"
import { Suspense } from "react"
import { getChats } from "~/server/actions"

function NavChatsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

// TODO when hovering over button,
// show a delete icon with dialog
// TODO pin functionality
async function NavChats() {
  const chats = await getChats()
  return (
    <SidebarMenu>
      {chats.map((chat) => (
        <SidebarMenuItem key={chat.id}>
          <SidebarMenuButton asChild>
            <a href={`/chat/${chat.id}`}>{chat.title}</a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}


export function AppSidebar() {
  return (
    <Sidebar>
        <SidebarHeader>
            <Button variant={'ghost'} asChild><Link href={'/'}>brickwall</Link></Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Chats</SidebarGroupLabel>
            <SidebarGroupContent>
              <Suspense fallback={<NavChatsSkeleton />}>
                <NavChats />
              </Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
            <Button variant={'outline'} asChild><Link href='/about'>About</Link></Button>
        </SidebarFooter>
    </Sidebar>
  )
}
