import React from 'react'
import { Sun, MoonStars } from '@phosphor-icons/react'
import type { Theme } from '../../hooks/useTheme'

export interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isLight = theme === 'light'

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      onToggle()
    }
  }

  return (
    <div className="theme-toggle-wrapper">
      <button
        type="button"
        role="switch"
        aria-checked={isLight}
        aria-label={isLight ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
        className="theme-toggle-track"
        onClick={onToggle}
        onKeyDown={handleKeyDown}
      >
        <span className={`theme-toggle-handle ${isLight ? 'light' : 'dark'}`}>
          {isLight ? (
            <Sun size={16} weight="bold" aria-hidden="true" className="toggle-icon sun-icon" />
          ) : (
            <MoonStars size={16} weight="fill" aria-hidden="true" className="toggle-icon moon-icon" />
          )}
        </span>
      </button>
    </div>
  )
}

