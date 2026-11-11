import React from 'react'
import type { ProfileData } from '../../data/profileData'
import type { Theme } from '../../hooks/useTheme'

export interface ProfileProps {
  profile: ProfileData
  theme: Theme
}

export const Profile: React.FC<ProfileProps> = ({ profile, theme }) => {
  const isLight = theme === 'light'
  const currentAvatar = isLight ? profile.avatarLight : profile.avatarDark
  const currentAlt = isLight ? profile.avatarAltLight : profile.avatarAltDark

  return (
    <section className="profile-container" aria-label="Perfil do usuário">
      <div className="profile-avatar-wrapper">
        <img
          src={currentAvatar}
          alt={currentAlt}
          className="profile-avatar"
          width={112}
          height={112}
          loading="eager"
        />
      </div>
      <p className="profile-username">{profile.username}</p>
    </section>
  )
}

