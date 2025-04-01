import { AppSidebar } from "@/components//ui/app-sidebar"


import moment from 'moment'
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import BigCalendar from "@/components/ui/big-calendar"


export default function DashboardPage() {
  return (
    <div className="flex flex-grow h-full w-full">
      <BigCalendar />
    </div>
  )
}
