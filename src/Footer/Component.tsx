import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export async function Footer() {
  const footerData: Footer = (await getCachedGlobal('footer', 1)()) as Footer
  const productLinks = footerData?.productLinks || { title: 'Products', links: [] }
  const externalCopyright = footerData?.externalCopyright || ''
  const companyLinks = footerData?.companyLinks || { title: 'Company', links: [] }
  const resourceLinks = footerData?.resourceLinks || { title: 'Resources', links: [] }
  const contactInfo = footerData?.contactInfo || {
    email: 'info@earnmwachangu.com',
    phone: '0990167497',
    alternativePhone: '0998484630',
    location: 'Plot 47/378, Area 47 Sector 1, Lilongwe',
  }
  const appDownloadLinks = {
    title: footerData?.appDownloadLinks?.title || 'Download app',
    appStoreLink: footerData?.appDownloadLinks?.appStoreLink || '',
    googlePlayLink: footerData?.appDownloadLinks?.googlePlayLink || '',
  }
  const socialLinks = {
    facebook: footerData?.socialLinks?.facebook || '',
    twitter: footerData?.socialLinks?.twitter || '',
    instagram: footerData?.socialLinks?.instagram || '',
    youtube: footerData?.socialLinks?.youtube || '',
    linkedin: footerData?.socialLinks?.linkedin || '',
  }
  const copyright = `© Earn Mwachangu ${new Date().getFullYear()}. ${footerData?.copyright}`

  return (
    <footer className="mt-auto bg-gray-50 text-brand-dark-green dark:text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex-shrink-0 flex items-center mb-6">
              <Link href="/">
                <Logo loading="eager" priority="high" theme={true} />
              </Link>
            </div>
            <div className="text-sm space-y-2 text-brand-dark-green">
              <p>Email: {contactInfo.email}</p>
              <p>Phone: {contactInfo.phone}</p>
              <p>Alternative: {contactInfo.alternativePhone}</p>
              <p>Location: {contactInfo.location}</p>
            </div>
          </div>

          {/* Products Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4 text-brand-dark-green">
              {productLinks.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              {productLinks.links?.map(({ link }, i) => (
                <CMSLink
                  className="hover:text-brand-teal text-brand-dark-green text-sm"
                  key={i}
                  {...link}
                />
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4 text-brand-dark-green">
              {companyLinks.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              {companyLinks.links?.map(({ link }, i) => (
                <CMSLink
                  className="hover:text-brand-teal text-brand-dark-green text-sm"
                  key={i}
                  {...link}
                />
              ))}
            </nav>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4 text-brand-dark-green">
              {resourceLinks.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              {resourceLinks.links?.map(({ link }, i) => (
                <CMSLink
                  className="hover:text-brand-teal text-brand-dark-green text-sm"
                  key={i}
                  {...link}
                />
              ))}
            </nav>
          </div>

          {/* App Download Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4 text-brand-dark-green">
              {appDownloadLinks.title}
            </h3>
            <div className="flex flex-col space-y-3">
              {appDownloadLinks.appStoreLink && (
                <Link href={appDownloadLinks.appStoreLink} className="w-full max-w-[200px]">
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="w-full"
                  />
                </Link>
              )}
              {appDownloadLinks.googlePlayLink && (
                <Link href={appDownloadLinks.googlePlayLink} className="w-full max-w-[200px]">
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="w-full"
                  />
                </Link>
              )}
            </div>
            {/* <ThemeSelector /> TODO: Enable Oneday*/}
          </div>
        </div>
        {externalCopyright ? (
          <div className="text-sm text-brand-dark-green">
            {externalCopyright.split('.').map(
              (sentence, index) =>
                sentence.trim() && (
                  <p key={index} className="mb-1">
                    {sentence.trim()}
                    {index < externalCopyright.split('.').length - 2 ? '.' : ''}
                  </p>
                ),
            )}
          </div>
        ) : null}
        {/* Copyright and Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-brand-dark-green">{copyright}</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.facebook && (
              <Link
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="text-gray-500 hover:text-brand-dark-green dark:hover:text-white flex items-center justify-center w-12 h-12 border border-brand-dark-green rounded-full"
              >
                <Facebook className="w-5 text-brand-dark-green" />
              </Link>
            )}
            {socialLinks.twitter && (
              <Link
                href={socialLinks.twitter}
                aria-label="Twitter"
                className="text-gray-500 hover:text-brand-dark-green dark:hover:text-white flex items-center justify-center w-12 h-12 border border-brand-dark-green rounded-full"
              >
                <Twitter className="w-5 text-brand-dark-green" />
              </Link>
            )}
            {socialLinks.instagram && (
              <Link
                href={socialLinks.instagram}
                aria-label="Instagram"
                className="text-gray-500 hover:text-brand-dark-green dark:hover:text-white flex items-center justify-center w-12 h-12 border border-brand-dark-green rounded-full"
              >
                <Instagram className="w-5 text-brand-dark-green" />
              </Link>
            )}
            {socialLinks.linkedin && (
              <Link
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-brand-dark-green dark:hover:text-white flex items-center justify-center w-12 h-12 border border-brand-dark-green rounded-full"
              >
                <Linkedin className="w-5 text-brand-dark-green" />
              </Link>
            )}
            {socialLinks.youtube && (
              <Link
                href={socialLinks.youtube}
                aria-label="YouTube"
                className="text-gray-500 hover:text-brand-dark-green dark:hover:text-white flex items-center justify-center w-12 h-12 border border-brand-dark-green rounded-full"
              >
                <Youtube className="w-5 text-brand-dark-green" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
