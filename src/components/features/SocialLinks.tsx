import React from 'react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoLinkedin,
} from 'react-icons/io5'
import type { SocialLinkItem } from '../../data/profileData'

export interface SocialLinksProps {
  socials: SocialLinkItem[]
}

const renderIcon = (icon: SocialLinkItem['icon']) => {
  switch (icon) {
    case 'github':
      return <IoLogoGithub size={24} aria-hidden="true" />
    case 'instagram':
      return <IoLogoInstagram size={24} aria-hidden="true" />
    case 'youtube':
      return <IoLogoYoutube size={24} aria-hidden="true" />
    case 'linkedin':
      return <IoLogoLinkedin size={24} aria-hidden="true" />
    default:
      return null
  }
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => {
  return (
    <nav className="social-links-nav" aria-label="Redes sociais">
      <ul className="social-links-list">
        {socials.map((item) => (
          <li key={item.id} className="social-link-item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="social-link-anchor"
            >
              {renderIcon(item.icon)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

