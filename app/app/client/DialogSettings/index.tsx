'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { IGetContentSettings } from '../../graphql'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import cn from '@/utils/cn'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { OutputLanguage, TypeOfPrompt, WritingStyle } from './Sequence'
import { toast } from 'react-hot-toast'
import { updateContentSettings } from './script'
import ErrorToast from '@/components/ErrorToast'

interface Props {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  contentSettings: IGetContentSettings
  token: string
  // eslint-disable-next-line no-unused-vars
  onFinish: (_outputLanguage: string, _writingStyle: string, _typeOfPromptId: string) => void
}

export default function DialogSettings({ isOpen, setIsOpen, contentSettings, token, onFinish }: Props) {
  let sequence = [
    { value: 'output-language', displayName: 'Output Language' },
    { value: 'writing-style', displayName: 'Writing Style' },
    { value: 'type-of-prompt', displayName: 'Type of Note' },
  ]

  if (contentSettings.outputLanguage !== 'ASK') {
    sequence = sequence.filter((v) => v.value !== 'output-language')
  }

  if (contentSettings.writingStyle !== 'ASK') {
    sequence = sequence.filter((v) => v.value !== 'writing-style')
  }

  if (contentSettings.typeOfPromptId !== '647391c118e8a4e1170d3ec9') {
    sequence = sequence.filter((v) => v.value !== 'type-of-prompt')
  }

  let outputLanguageExist: boolean = false
  let writingStyleExist: boolean = false
  let typeOfPromptExist: boolean = false

  for (let i = 0; i < sequence.length; i++) {
    const element = sequence[i]

    if (element.value === 'output-language') {
      outputLanguageExist = true
    }

    if (element.value === 'writing-style') {
      writingStyleExist = true
    }

    if (element.value === 'type-of-prompt') {
      typeOfPromptExist = true
    }
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSequence, setCurrentSequence] = useState(sequence[currentIndex])

  const [outputLanguage, setOutputLanguage] = useState<string>(
    outputLanguageExist ? '' : (contentSettings.outputLanguage as string),
  )
  const [writingStyle, setWritingStyle] = useState(writingStyleExist ? '' : contentSettings.writingStyle)
  const [typeOfPromptId, setTypeOfPromptId] = useState(
    typeOfPromptExist ? '646a2fc687e737835670b7b3' : contentSettings.typeOfPromptId,
  )

  const [outputLanguageDb, setOutputLanguageDb] = useState<string>(
    outputLanguageExist ? '' : contentSettings.outputLanguage,
  )

  const [savedOutputLanguage, setSavedOutputLanguage] = useState(false)
  const [savedWritingStyle, setSavedWritingStyle] = useState(false)
  const [savedTypeOfPrompt, setSavedTypeOfPrompt] = useState(false)

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className={cn('flex flex-row items-center justify-between gap-4')}>
          <AlertDialogTitle>{currentSequence.displayName}</AlertDialogTitle>
          <AlertDialogCancel className={cn('w-fit h-fit p-2')}>
            <X />
          </AlertDialogCancel>
        </AlertDialogHeader>

        {(() => {
          if (currentSequence.value === 'output-language') {
            return (
              <OutputLanguage
                setValue={setOutputLanguage}
                value={outputLanguage}
                setValueDb={setOutputLanguageDb}
                setSaved={setSavedOutputLanguage}
                saved={savedOutputLanguage}
              />
            )
          } else if (currentSequence.value === 'writing-style') {
            return (
              <WritingStyle
                setValue={setWritingStyle}
                value={writingStyle}
                setSaved={setSavedWritingStyle}
                saved={savedWritingStyle}
              />
            )
          } else if (currentSequence.value === 'type-of-prompt') {
            return (
              <TypeOfPrompt
                setValue={setTypeOfPromptId}
                value={typeOfPromptId}
                setSaved={setSavedTypeOfPrompt}
                saved={savedTypeOfPrompt}
              />
            )
          } else {
            return <></>
          }
        })()}

        {sequence.length > 0 && (
          <AlertDialogFooter>
            <section className='w-full h-fit grid grid-cols-2 gap-4 mt-8'>
              <Button
                type='button'
                variant='default'
                className={cn(
                  'w-full h-full flex items-center justify-between',
                  currentIndex === 0 ? 'border-none p-0 bg-background' : '',
                )}
                disabled={currentIndex === 0}
                onClick={() => {
                  if (currentIndex > 0) {
                    setCurrentIndex(currentIndex - 1)
                    setCurrentSequence(sequence[currentIndex - 1])
                  }
                }}
              >
                {currentIndex !== 0 ? (
                  <>
                    <ChevronLeft />
                    <p className='flex flex-col items-end gap-1'>
                      <span className='font-medium text-right'>{sequence[currentIndex - 1].displayName}</span>
                      <span className='text-xs font-normal'>Previous</span>
                    </p>
                  </>
                ) : (
                  ''
                )}
              </Button>

              <Button
                type='button'
                variant='default'
                className={cn('w-full h-full flex items-center justify-between')}
                onClick={() => {
                  if (currentIndex < sequence.length - 1) {
                    setCurrentIndex(currentIndex + 1)
                    setCurrentSequence(sequence[currentIndex + 1])
                  } else {
                    setIsOpen(false)

                    if (savedOutputLanguage || savedTypeOfPrompt || savedWritingStyle) {
                      toast
                        .promise(
                          updateContentSettings({
                            token,
                            writingStyle: savedWritingStyle ? writingStyle : null,
                            outputLanguage: savedOutputLanguage ? outputLanguageDb : null,
                            typeOfPromptId: savedTypeOfPrompt ? typeOfPromptId : null,
                          }),
                          {
                            loading: 'Saving your settings...',
                            success: 'Settings saved!',
                            error: 'Error saving your settings!',
                          },
                        )
                        .then(() => {
                          onFinish(outputLanguageDb, writingStyle, typeOfPromptId)
                        })

                        .catch((error) => {
                          ErrorToast({ action: 'saving content settings', error })
                        })
                    } else {
                      onFinish(outputLanguageDb, writingStyle, typeOfPromptId)
                    }
                  }
                }}
                disabled={(() => {
                  if (currentSequence.value === 'output-language' && outputLanguage === '') {
                    return true
                  } else if (currentSequence.value === 'writing-style' && writingStyle === '') {
                    return true
                  } else {
                    return false
                  }
                })()}
              >
                <p className='flex flex-col items-start gap-1'>
                  <span className='font-medium text-left'>
                    {currentIndex < sequence.length - 1 ? sequence[currentIndex + 1].displayName : 'Generating Content'}
                  </span>
                  <span className='text-xs font-normal'>Next</span>
                </p>
                <ChevronRight />
              </Button>
            </section>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  )
}
