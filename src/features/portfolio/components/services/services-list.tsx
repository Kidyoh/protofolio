import React from "react"
import Link from "next/link"
import { IService } from "@/types"

interface EducationListProps {
  services: IService[]
}

export const EducationList = (props: EducationListProps) => {
  const { services } = props
  return (
    <ul className="flex flex-col space-y-4">
      {services.map((services, index) => (
        <li className="group relative cursor-pointer" key={index}>
            <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
            <div className="grid grid-cols-9 gap-2 p-6 sm:gap-6">
              <div className="col-span-9 sm:col-span-2">
                <p className="text-foreground-secondary text-sm font-medium uppercase">
                  {services.title}
                </p>
              </div>
              <div className="col-span-9 sm:col-span-6">

                {services.description && (
                  <p className="mb-2 text-sm">{services.description}</p>
                )}
              </div>
            </div>
        </li>
      ))}
    </ul>
  )
}
