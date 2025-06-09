'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { PreHeading } from '@/components/ui/pre-heading'
import { BrandButtonWithIcon } from '@/components/ui/brand-button-with-icon'
import { ArrowRight } from 'lucide-react'
import { BgColor, bgColorClasses } from '@/utilities/bgColorClasses'
import { FAQBlock as FAQBlockProps } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const FAQBlock: React.FC<FAQBlockProps> = ({
  heading = 'For Employees',
  subHeading = 'Discover responses to common asked questions about our product and services.',
  preHeading = 'FAQs',
  faqItems = [
    {
      question: 'Who is eligible to use Earn Mwachangu?',
      answer:
        'Employees of partner companies who have signed up for our service. Your employer needs to be enrolled in our program for you to access your earned wages.',
      id: '1',
    },
    {
      question: 'How much of my salary can I withdraw before payday?',
      answer: "Up to 60-70% of earned wages, based on your employer's agreement.",
      id: '2',
    },
    {
      question: 'How quickly will I receive my funds?',
      answer:
        "Funds are typically transferred within minutes after your request is approved, depending on your bank's processing times.",
      id: '3',
    },
    {
      question: 'What fees do I need to pay?',
      answer:
        'We charge a small convenience fee for each withdrawal. There are no hidden charges, interest rates, or recurring fees. The exact fee amount will be clearly displayed before you confirm your withdrawal.',
      id: '4',
    },
    {
      question: 'Can I use Earn Mwachangu to pay bills?',
      answer:
        'Yes, you can use the funds you withdraw for any purpose, including paying bills. The money is transferred to your bank account, and you can use it as you would with your regular salary.',
      id: '5',
    },
    {
      question: 'Is my personal information safe?',
      answer:
        'Yes, we take data security very seriously. We use bank-level encryption and security protocols to protect your personal and financial information. We comply with all relevant data protection regulations.',
      id: '6',
    },
  ],
  backgroundColor = 'white',
  buttonLink,
}) => {
  const [open, setOpen] = React.useState<number | null>(null)

  const handleOpen = (value: number) => {
    setOpen(open === value ? null : value)
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.98 },
  }

  // Get the safe background color
  const bgColor = BgColor(backgroundColor)

  return (
    <section className={cn('py-16 px-4', bgColorClasses[bgColor])}>
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-10">
          <div className="md:w-1/3">
            {preHeading && <PreHeading title={preHeading} backgroundColor={bgColor} />}
            {heading && (
              <h2
                className={cn(
                  'text-4xl md:text-5xl font-medium mb-4',
                  bgColor === 'brand-dark-green' ? 'text-white' : 'text-brand-dark-green',
                )}
              >
                {heading}
              </h2>
            )}
            {subHeading && (
              <p
                className={cn(
                  'text-lg opacity-80',
                  bgColor === 'brand-dark-green' ? 'text-white' : 'text-gray-600',
                )}
              >
                {subHeading}
              </p>
            )}

            {buttonLink && buttonLink.link && (
              <div className="mt-6">
                <BrandButtonWithIcon
                  {...buttonLink.link}
                  icon={<ArrowRight className="h-4 w-4" />}
                  className={cn(
                    'inline-flex',
                    bgColor === 'brand-dark-green'
                      ? 'bg-brand-lime text-brand-dark-green hover:bg-brand-lime/90'
                      : '',
                  )}
                />
              </div>
            )}
          </div>

          {/* Accordion Section */}
          <div className="md:w-2/3">
            {faqItems &&
              faqItems.map((item, index) => (
                <Accordion
                  type="single"
                  collapsible
                  key={item.id || index}
                  className={cn(
                    'mb-4 rounded-xl border border-gray-200 px-4 shadow-sm',
                    bgColor === 'brand-dark-green' ? 'border-gray-700' : '',
                    open === index
                      ? bgColor === 'brand-dark-green'
                        ? 'bg-brand-dark-green/80'
                        : 'bg-gray-50'
                      : '',
                  )}
                >
                  <AccordionItem value={item.id || index.toString()}>
                    <AccordionTrigger
                      className={cn(
                        'py-4 text-base font-medium h-fit',
                        bgColor === 'brand-dark-green' ? 'text-white' : 'text-brand-dark-green',
                      )}
                    >
                      {item.question}
                      {/* <div className="flex items-center justify-center rounded-full bg-brand-lime p-2">
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 transition-transform',
                            open === index ? 'rotate-180' : '',
                            'text-brand-dark-green',
                          )}
                        />
                      </div> */}
                    </AccordionTrigger>

                    <AccordionContent
                      className={cn(
                        'flex-1 font-normal',
                        bgColor === 'brand-dark-green' ? 'text-gray-50' : 'text-gray-600',
                      )}
                    >
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
