import React from 'react'
import { useTheme } from './hooks/useTheme'
import { devLinksData } from './data/profileData'
import { Profile } from './components/features/Profile'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { LinkButton } from './components/features/LinkButton'
import { SocialLinks } from './components/features/SocialLinks'

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-container">
      <header>
        <Profile profile={devLinksData.profile} theme={theme} />
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="links-section">
        <ul className="links-list">
          {devLinksData.links.map((link) => (
            <li key={link.id}>
              <LinkButton link={link} />
            </li>
          ))}
        </ul>
      </main>

      <SocialLinks socials={devLinksData.socialLinks} />

      <footer className="app-footer">
        <p>
          {devLinksData.footerText}
          {devLinksData.footerLink && (
            <>
              {' • '}
              <a
                href={devLinksData.footerLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {devLinksData.footerLink.text}
              </a>
            </>
          )}
        </p>
      </footer>
    </div>
  )
}

export default App

