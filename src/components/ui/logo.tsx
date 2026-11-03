import type { ImgHTMLAttributes } from 'react'

import logo from '../../../public/logo.png'

type LogoProps = ImgHTMLAttributes<HTMLImageElement>

/* oxlint-disable next/no-img-element */
export function Logo({ width, height, ...props }: LogoProps) {
  return (
    <img
      src={logo.src}
      alt=''
      width={width ?? height ?? logo.width}
      height={height ?? width ?? logo.height}
      {...props}
    />
  )
}
/* oxlint-enable next/no-img-element */
