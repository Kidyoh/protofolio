"use client"

import React from "react"
import { siteConfig } from "@/config"
import { Button } from "@/components/ui"
import { EducationList } from "./services-list"

export const Services = () => {
  const [collapsed, setCollapsed] = React.useState(true)

  const servicesData = siteConfig.services
  const displayedEducations = collapsed
    ? servicesData.slice(0, 2)
    : servicesData

  const handleClick = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div>
      <EducationList services={displayedEducations} />
      {servicesData.length > 2 && (
        <Button size="lg" onClick={handleClick} className="mx-auto mt-6 block">
          {collapsed ? "Show all Services" : "Show less"}
        </Button>
      )}
    </div>
  )
}
