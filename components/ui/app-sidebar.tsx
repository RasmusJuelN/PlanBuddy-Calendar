import * as React from "react"
import { Plus, Command, CalendarDays, UserRound} from "lucide-react"

import { Calendars } from "@/components/calendars"
import { Calendar } from "@/components/ui/calendar"
import { DatePicker } from "@/components/date-picker"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Test User",
    email: "test@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "My Calendars",
      items: ["Personal", "Work", "Family"],
    },
    {
      name: "Favorites",
      items: ["Holidays", "Birthdays"],
    },
    {
      name: "Other",
      items: ["Travel", "Reminders", "Deadlines"],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}variant="floating" >
      <SidebarHeader className="h-12 border-b border-sidebar-border">
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                  <CalendarDays className="size-5" />
                  <span className="truncate font-semibold">PlanBuddy</span>
              </a>
            </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent>
      <Calendar className="mt-2"/>
      <SidebarSeparator className="mx-0" />
      <Calendars calendars={data.calendars} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <NavUser user={data.user} />
      <SidebarRail />
    </Sidebar>
  )
}
