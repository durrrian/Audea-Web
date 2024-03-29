'use client'

import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { usePathname } from 'next/navigation'
import { renderNamePath, getTitle, renderAccountPath } from '../../script'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  router: AppRouterInstance
  token: string
}

export default function Navigation({ router, token }: Props) {
  const [title, setTitle] = useState('')
  const pathname = usePathname()

  const arrayOfPath = pathname.split('/').filter((v) => {
    if (v) return v
  })

  useEffect(() => {
    if (arrayOfPath.length > 2 && arrayOfPath[1] === 'saved') {
      const fetchTitle = async () => {
        const response = await getTitle(token, arrayOfPath[2])

        if (response && response.title) setTitle(response.title)
        else setTitle('No title')
      }

      fetchTitle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div className='w-full max-w-[700px] h-fit flex items-center gap-4 select-none print:hidden'>
      {arrayOfPath.map((v, i) => {
        if (i === 0) {
          return (
            <Fragment key={i}>
              <motion.button
                key={i}
                className='flex items-center gap-2 text-base px-2 py-1 rounded-lg font-medium text-foreground'
                onClick={() => router.push('/app')}
                whileHover={{
                  scale: [null, 1.2, 1.05],
                  backgroundColor: 'hsl(var(--accent))',
                  color: 'hsl(var(--accent-foreground))',
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 700,
                  damping: 30,
                }}
              >
                <Home className='w-4 h-4' />
                Home
              </motion.button>
              <p className='text-base font-extrabold'>/</p>
            </Fragment>
          )
        } else if (i === 1) {
          const namePath = renderNamePath(v)
          const Icon = namePath.icon

          return (
            <Fragment key={i}>
              <motion.button
                className='flex items-center gap-2 text-base px-2 py-1 rounded-lg font-medium text-foreground min-h-fit flex-nowrap'
                onClick={() => router.push(`/app/${v}`)}
                whileHover={{
                  scale: [null, 1.2, 1.05],
                  backgroundColor: 'hsl(var(--accent))',
                  color: 'hsl(var(--accent-foreground))',
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: 'spring',
                  stiffness: 700,
                  damping: 30,
                }}
              >
                <Icon className='w-4 h-4' />
                {namePath.name}
              </motion.button>
              <p className='text-base font-extrabold'>/</p>
            </Fragment>
          )
        } else if (i === 2) {
          if (arrayOfPath[1] === 'saved') {
            return (
              <Fragment key={i}>
                <motion.button
                  className='flex items-center gap-2 text-base px-2 py-1 rounded-lg font-medium text-foreground'
                  onClick={() => router.push(`/app/saved/${v}`)}
                  whileHover={{
                    scale: [null, 1.2, 1.05],
                    backgroundColor: 'hsl(var(--accent))',
                    color: 'hsl(var(--accent-foreground))',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 700,
                    damping: 30,
                  }}
                >
                  <p className='w-full lg:max-w-[350px] max-w-[200px] truncate'>{title}</p>
                </motion.button>
                <p className='text-base font-extrabold'>/</p>
              </Fragment>
            )
          } else if (arrayOfPath[1] === 'accounts') {
            return (
              <Fragment key={i}>
                <motion.button
                  className='flex items-center gap-2 text-base px-2 py-1 rounded-lg font-medium text-foreground'
                  onClick={() => router.push(`/app/accounts/${v}`)}
                  whileHover={{
                    scale: [null, 1.2, 1.05],
                    backgroundColor: 'hsl(var(--accent))',
                    color: 'hsl(var(--accent-foreground))',
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 700,
                    damping: 30,
                  }}
                >
                  <p className='w-full lg:max-w-[350px] max-w-[200px] truncate'>{renderAccountPath(v)}</p>
                </motion.button>
                <p className='text-base font-extrabold'>/</p>
              </Fragment>
            )
          }
        } else {
          return <></>
        }
      })}
    </div>
  )
}
