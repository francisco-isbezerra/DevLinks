import avatarDarkImg from '../assets/avatar.png'
import avatarLightImg from '../assets/avatar-light.png'

export interface ProfileData {
  username: string
  avatarDark: string
  avatarLight: string
  avatarAltDark: string
  avatarAltLight: string
}

export interface LinkItem {
  id: string
  title: string
  url: string
}

export interface SocialLinkItem {
  id: string
  name: string
  url: string
  icon: 'github' | 'instagram' | 'youtube' | 'linkedin'
}

export interface DevLinksConfig {
  profile: ProfileData
  links: LinkItem[]
  socialLinks: SocialLinkItem[]
  footerText: string
  footerLink?: {
    text: string
    url: string
  }
}

export const devLinksData: DevLinksConfig = {
  profile: {
    username: '@franciscobezerra',
    avatarDark: avatarDarkImg,
    avatarLight: avatarLightImg,
    avatarAltDark: 'Foto de perfil de mulher sorrindo em blazer escuro',
    avatarAltLight: 'Foto de perfil de mulher com óculos de sol escuros e blazer',
  },
  links: [
    {
      id: 'portfolio',
      title: 'Ver meu portfólio',
      url: 'https://github.com/franciscobezerra',
    },
    {
      id: 'projects',
      title: 'Conhecer meus projetos recentes',
      url: 'https://github.com/franciscobezerra?tab=repositories',
    },
    {
      id: 'linkedin-connect',
      title: 'Conectar no LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      id: 'contact',
      title: 'Entrar em contato por e-mail',
      url: 'mailto:contato@exemplo.com',
    },
  ],
  socialLinks: [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com',
      icon: 'github',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'instagram',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'youtube',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
  ],
  footerText: 'Feito com ♥ no curso DevLinks',
}
