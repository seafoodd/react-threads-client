import React from "react"
import Button from "../button"
import { useNavigate } from "react-router-dom"

type Props = {
  children: React.ReactNode
  icon: JSX.Element
  href: string
}

const NavButton: React.FC<Props> = ({ children, icon, href }) => {
  const navigate = useNavigate()

  return (
    <Button
      className="flex justify-start text-xl"
      icon={icon}
      onClick={() => navigate(href)}
    >
      {children}
    </Button>
  )
}

export default NavButton
