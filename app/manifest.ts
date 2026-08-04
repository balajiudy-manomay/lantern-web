import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lantern',
    short_name: 'Lantern',
    description: 'Lantern combines human expertise, AI intelligence, governance, data intelligence, and automation to help organizations make confident decisions and drive meaningful outcomes.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
