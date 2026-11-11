import React from 'react'
import type { LinkItem } from '../../data/profileData'

export interface LinkButtonProps {
  link: LinkItem
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      {link.title}
    </a>
  )
}

