import { headers } from 'next/headers'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const host = headersList.get('host') || 'lantern.ai'
  const protocol = host.includes('localhost') ? 'http' : 'https'
  const baseUrl = `${protocol}://${host}`

  const routes = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/lantern',
    '/pulse',
    '/services',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'yearly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
