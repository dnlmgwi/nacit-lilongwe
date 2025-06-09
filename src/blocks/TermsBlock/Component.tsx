'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RichText from '../../components/RichText'
import { Gutter } from '@payloadcms/ui'
import { bgColorClasses } from '@/utilities/bgColorClasses'
import type { TermsBlock as TermsBlockProps, Term } from '@/payload-types'
import { PreHeading } from '@/components/ui/pre-heading'

interface HeadingInfo {
  id: string
  text: string
}

interface TermHeadings {
  [termId: string]: HeadingInfo[]
}

export const TermsBlock: React.FC<TermsBlockProps> = ({
  backgroundColor = 'white',
  heading = 'Terms & Policies',
  subHeading,
  terms = [] as Term[],
}) => {
  const pathname = usePathname()
  const [termHeadings, setTermHeadings] = useState<TermHeadings>({})

  const safeTerms = Array.isArray(terms)
    ? terms.filter(
        (t): t is Term =>
          typeof t === 'object' && t !== null && 'id' in t && 'title' in t && 'content' in t,
      )
    : []

  const [activeTermId, setActiveTermId] = useState<string | null>(
    safeTerms?.[0]?.id?.toString() ?? null,
  )

  const activeTerm = safeTerms.find((term) => term?.id?.toString() === activeTermId) || safeTerms[0]

  useEffect(() => {
    const extractHeadings = () => {
      const content = document.querySelector('.prose')
      if (!content) return

      const headingElements = content.querySelectorAll('h1, h2, h3, h4, h5, h6')
      const newHeadings: HeadingInfo[] = []

      headingElements.forEach((el, index) => {
        const text = el.textContent || ''
        const id = `heading-${index}`
        el.id = id
        newHeadings.push({ id, text })
      })

      if (activeTerm?.id) {
        setTermHeadings((prev) => ({
          ...prev,
          [activeTerm.id.toString()]: newHeadings,
        }))
      }
    }

    extractHeadings()
  }, [activeTerm])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 200 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleDownloadPDF = () => {
    // TODO: Implement PDF download functionality
    // console.log('Download PDF clicked')
  }

  const getLastUpdatedDate = (term: Term | undefined): string | undefined => {
    if (!term) return undefined
    return term.updatedAt || term.createdAt
  }

  const formatDate = (date: string | undefined | null): string => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  const getHeadingCount = (termId: string) => {
    return termHeadings[termId]?.length || 0
  }

  return (
    <div
      className={`py-12 md:py-16 lg:py-20 ${bgColorClasses[backgroundColor as keyof typeof bgColorClasses]}`}
    >
      <Gutter>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="sticky top-24 pt-24 px-4 overflow-auto max-h-[calc(100vh-6rem)]">
              <ul className="flex flex-col gap-3">
                {safeTerms.length > 0 ? (
                  safeTerms.map((term) => (
                    <li key={term.id} className="flex flex-col">
                      <button
                        onClick={() => setActiveTermId(term.id.toString())}
                        className={`w-full text-left py-2 px-4 rounded-lg transition-colors flex items-center justify-between ${
                          activeTerm?.id?.toString() === term.id.toString()
                            ? 'font-semibold bg-brand-lime text-black'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span>{term.title}</span>
                      </button>

                      {/* Show anchors only for active term */}
                      {activeTerm?.id?.toString() === term.id.toString() &&
                        termHeadings[term.id.toString()] &&
                        termHeadings[term.id.toString()]!.length > 0 && (
                          <ul className="mt-2 ml-4 space-y-2">
                            {termHeadings[term.id.toString()]?.map((heading) => (
                              <li key={heading.id}>
                                <button
                                  onClick={() => scrollToHeading(heading.id)}
                                  className="text-sm text-gray-600 hover:text-black transition-colors py-1 px-3 w-full text-left rounded-lg hover:bg-gray-50"
                                >
                                  {heading.text}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-gray-500">No terms available</li>
                )}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="md:w-2/3 lg:w-3/4 px-8 lg:px-14">
            <div className="md:w-2/3 lg:w-3/4 mb-8">
              {heading && backgroundColor && (
                <PreHeading
                  title={heading}
                  backgroundColor={backgroundColor}
                  className="mb-4 mx-auto"
                />
              )}
              {activeTerm?.title && (
                <h2 className="text-5xl font-medium mb-6">{activeTerm.title}</h2>
              )}

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                {getLastUpdatedDate(activeTerm) && (
                  <p className="text-gray-600">
                    Last updated on {formatDate(getLastUpdatedDate(activeTerm))}
                  </p>
                )}

                {/* <button
                  onClick={handleDownloadPDF}
                  className="inline-flex items-center px-6 py-3 bg-[#D1F878] text-black rounded-full hover:bg-[#c5eb6c] transition-colors"
                >
                  Download PDF
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button> */}
              </div>
            </div>

            {activeTerm && (
              <div className="bg-white rounded-lg">
                <div className="prose max-w-none text-justify">
                  <RichText data={activeTerm.content} enableGutter={false} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Gutter>
    </div>
  )
}
