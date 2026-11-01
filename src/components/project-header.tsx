'use client'

import { motion } from 'motion/react'

const animation = {
  hide: { x: -30, opacity: 0 },
  show: { x: 0, opacity: 1 },
}

type ProjectHeaderProps = {
  title: string
  description: string
}

export function ProjectHeader(props: ProjectHeaderProps) {
  const { title, description } = props

  return (
    <div className='space-y-8 pt-10'>
      <motion.div className='flex items-center gap-3' initial={animation.hide} animate={animation.show}>
        <div className='flex flex-col gap-3'>
          <h1 className='text-3xl font-semibold'>{title}</h1>
          <h2 className='text-muted-foreground'>{description}</h2>
        </div>
      </motion.div>
    </div>
  )
}
