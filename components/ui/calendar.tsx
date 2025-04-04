"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {


  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      weekStartsOn={1}

  
      modifiers={{
        weekend: { dayOfWeek: [0, 6] }, // Highlight Sundays and Saturdays
      }}
      modifiersClassNames={{
        weekend: " text-background", // Add custom styles for weekends
      }}
      
      

      className={cn("py-2 mx-auto ", className)}
      classNames={{
        
        months: "flex flex-col sm:flex-row gap-2 ",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1 cursor-pointer",
        nav_button_next: "absolute right-1 cursor-pointer",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell:
          "text-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-background [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "multiple"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-normal aria-selected:opacity-100 hover:bg-sidebar-accent"
        ),
        day_range_start:
          "day-range-start aria-selected:bg-background aria-selected:text-background-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-background aria-selected:text-background-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-background hover:text-background-foreground focus:bg-foreground focus:text-primary-foreground",
        day_today: "bg-background text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("size-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("size-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  )
}

export { Calendar }
