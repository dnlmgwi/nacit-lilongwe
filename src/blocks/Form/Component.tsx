'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'
import { IconComponent } from '@/Header/MegaMenu/icons'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: SerializedEditorState
  className?: string
  sections?: {
    title: string
    content: string
    icon?: string
  }[]
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
    youtube?: string
    linkedin?: string
  }
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
    className,
    sections,
    socialLinks,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <section
      className={cn('w-full h-fit flex justify-center items-center bg-brand-dark-green', className)}
    >
      <div className="container py-10 md:py-32 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start ">
        {/* Left Column - Text content */}
        <div className="flex flex-col gap-10 justify-start items-start">
          <div className="flex flex-col gap-10 justify-start items-start">
            {enableIntro && introContent && !hasSubmitted && (
              <RichText className="text-white " data={introContent} enableGutter={false} />
            )}
          </div>

          {/* Dynamic Sections */}
          {sections && sections.length > 0 && (
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/10 rounded-2xl p-6 pb-8 flex flex-col gap-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center">
                      <IconComponent
                        name={section.icon || 'MessageSquare'}
                        className="text-brand-dark-green w-5 h-5"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                    {section.content && <p className="text-white">{section.content}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Default FAQ Card if no sections */}
          {(!sections || sections.length === 0) && (
            <div className="bg-white/10 rounded-2xl p-6 pb-8 flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center">
                  <IconComponent name="MessageSquare" className="text-brand-dark-green w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-white">Have questions?</h3>
                <p className="text-base text-white">
                  Find the answers to frequently asked questions here.
                </p>
              </div>
            </div>
          )}

          {/* Social Links */}
          {socialLinks && (
            <div>
              <p className="font-medium text-white">Follow us on</p>
              <div className="flex gap-4 mt-6">
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-lime w-12 h-12 border border-white rounded-full flex items-center justify-center hover:border-brand-lime group"
                  >
                    <Facebook />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-lime w-12 h-12 border border-white rounded-full flex items-center justify-center hover:border-brand-lime group"
                  >
                    <Twitter />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-lime w-12 h-12 border border-white rounded-full flex items-center justify-center hover:border-brand-lime group"
                  >
                    <Instagram />
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-lime w-12 h-12 border border-white rounded-full flex items-center justify-center hover:border-brand-lime group"
                  >
                    <Linkedin />
                  </a>
                )}
                {socialLinks.youtube && (
                  <a
                    href={socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-lime w-12 h-12 border border-white rounded-full flex items-center justify-center hover:border-brand-lime group"
                  >
                    <Youtube />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Form */}
        <div className="w-full h-full">
          <FormProvider {...formMethods}>
            {!isLoading && hasSubmitted && confirmationType === 'message' && (
              <div className="h-full flex justify-start items-center">
                <RichText data={confirmationMessage} />
              </div>
            )}
            {isLoading && !hasSubmitted && (
              <div className="h-full flex justify-start items-center">
                <p className="text-white">Loading, please wait...</p>
              </div>
            )}
            {error && (
              <div className="h-full flex justify-start items-center">
                <div className="text-red-500">{`${error.status || '500'}: ${error.message || ''}`}</div>
              </div>
            )}
            {!hasSubmitted && (
              <form
                id={formID}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 p-10 bg-brand-white rounded-3xl w-full"
              >
                <div className="grid grid-cols-1 gap-6">
                  {formFromProps &&
                    formFromProps.fields &&
                    formFromProps.fields?.map((field, index) => {
                      const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                      if (Field) {
                        return (
                          <Field
                            key={index}
                            form={formFromProps}
                            {...field}
                            {...formMethods}
                            control={control}
                            errors={errors}
                            register={register}
                          />
                        )
                      }
                      return null
                    })}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-lime text-brand-dark-green hover:bg-brand-lime/90 rounded-full"
                >
                  {submitButtonLabel || 'Submit'}
                </Button>
              </form>
            )}
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
