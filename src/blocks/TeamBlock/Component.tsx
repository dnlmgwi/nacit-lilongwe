'use client'

import React, { useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  Mail,
  LucideIcon,
} from 'lucide-react'
import { cn } from '@/utilities/ui'
import { BgColor, bgColorClasses } from '@/utilities/bgColorClasses'
import { PreHeading } from '@/components/ui/pre-heading'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

// Define the social media link types
interface SocialMediaLink {
  platform:
    | 'linkedin'
    | 'github'
    | 'twitter'
    | 'instagram'
    | 'facebook'
    | 'youtube'
    | 'website'
    | 'email'
  url: string
}

// Define the TeamMember interface to represent each team member
interface TeamMember {
  image: number | MediaType
  name: string
  title: string
  links?: SocialMediaLink[] | any // Make this more flexible to handle CMS structure
  id?: string
}

// Define the props interface for the TeamBlock component
interface TeamBlockComponentProps {
  preHeading?: string
  heading?: string
  subHeading?: string
  teamMembers?: TeamMember[]
  backgroundColor?: string
  blockType?: string
  id?: string
  blockName?: string
}

export const TeamBlock: React.FC<TeamBlockComponentProps> = ({
  preHeading = 'Our Team',
  heading = 'Our leadership',
  subHeading = 'Meet the visionaries leading our company forward.',
  teamMembers = [],
  backgroundColor = 'white',
}) => {
  // Create a reference to the scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Function to scroll the team members container
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = container.clientWidth * 0.8 // Scroll by 80% of the visible width

      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  // Get the safe background color
  const bgColor = BgColor(backgroundColor)

  return (
    <section className={cn('py-16 px-4 sm:px-6', bgColorClasses[bgColor])}>
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col mb-12">
          {preHeading && <PreHeading title={preHeading} backgroundColor={bgColor} />}

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div className="md:max-w-3xl">
              {heading && <h2 className="text-4xl md:text-5xl font-normal mb-4">{heading}</h2>}

              {subHeading && <p className="text-lg opacity-80 mb-6 md:mb-0">{subHeading}</p>}
            </div>

            {/* Navigation buttons - only visible on large screens */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-16 h-16 rounded-full border border-current flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous team member"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-16 h-16 rounded-full border border-current flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next team member"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        {teamMembers && teamMembers.length > 0 ? (
          <>
            {/* Scrollable container for large screens */}
            <div
              ref={scrollContainerRef}
              className="hidden lg:flex overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar snap-x"
            >
              <div className="flex gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="min-w-[300px] max-w-[350px] flex-shrink-0 snap-start">
                    {/* Team member card */}
                    <TeamMemberCard member={member} backgroundColor={bgColor} />
                  </div>
                ))}
              </div>
            </div>

            {/* Grid for medium screens */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 mb-12">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} backgroundColor={bgColor} />
              ))}
            </div>

            {/* Stack for small screens */}
            <div className="grid grid-cols-1 md:hidden gap-6 mb-12">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} backgroundColor={bgColor} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">No team members to display</div>
        )}
      </div>
    </section>
  )
}

// Define TeamMemberCard props interface
interface TeamMemberCardProps {
  member: TeamMember // Use the TeamMember interface
  backgroundColor: 'gray' | 'white' | 'brand-dark-green' | 'brand-lime' | 'brand-green'
}

// Helper function to get the appropriate icon for a social platform
const getSocialIcon = (platform: SocialMediaLink['platform']): LucideIcon => {
  switch (platform) {
    case 'linkedin':
      return Linkedin
    case 'github':
      return Github
    case 'twitter':
      return Twitter
    case 'instagram':
      return Instagram
    case 'facebook':
      return Facebook
    case 'youtube':
      return Youtube
    case 'website':
      return Globe
    case 'email':
      return Mail
    default:
      return Linkedin
  }
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, backgroundColor }) => {
  // Determine text color based on background
  const isDarkBg = backgroundColor === 'brand-dark-green' || backgroundColor === 'brand-green'
  const nameColor = isDarkBg ? 'text-white' : 'text-brand-dark-green'
  const titleColor = isDarkBg ? 'text-gray-300' : 'text-gray-600'

  // Prepare social links array, accounting for both old and new formats
  const socialLinksArray: SocialMediaLink[] = []

  // Handle new socialLinks format
  if (member.links) {
    if (Array.isArray(member.links)) {
      member.links.forEach((link: any) => {
        if (link && link.platform && link.url) {
          socialLinksArray.push({
            platform: link.platform,
            url: link.url,
          })
        }
      })
    }
  }

  // Helper function for social link URLs
  const getSocialUrl = (link: SocialMediaLink) => {
    if (link.platform === 'email') {
      return `mailto:${link.url}`
    }
    return link.url
  }

  return (
    <div className="flex flex-col">
      {/* Image container */}
      <div className="mb-4 overflow-hidden rounded-3xl aspect-[3/4]">
        {member.image ? (
          <Media
            resource={member.image}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            imgClassName="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className={cn('text-xl font-medium', nameColor)}>{member.name}</h3>
        <p className={cn('text-base mb-2', titleColor)}>{member.title}</p>

        {/* Social Media Links */}
        {socialLinksArray.length > 0 && (
          <div className="flex gap-2 mt-1">
            {socialLinksArray.map((link, index) => {
              const Icon = getSocialIcon(link.platform)
              return (
                <a
                  key={index}
                  href={getSocialUrl(link)}
                  target={link.platform !== 'email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={cn(
                    'p-2 rounded-full hover:bg-gray-100 transition-colors',
                    isDarkBg ? 'text-brand-lime hover:bg-gray-800' : 'text-brand-dark-green',
                  )}
                  aria-label={`${member.name}'s ${link.platform}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// Add custom CSS for hiding scrollbar but keeping functionality
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
`

// Add style to head if executing in browser
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style')
  styleEl.textContent = styles
  document.head.appendChild(styleEl)
}
