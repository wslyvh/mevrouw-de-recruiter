import React from 'react'
import styles from './tag.module.scss'

interface Props {
  text: string
  asLink?: boolean
  className?: string
}

export function Tag(props: Props) {
  let className = `${styles.container}`
  if (props.asLink) className += ` ${styles.link}`
  if (props.className) className += ` ${props.className}`

  return (
    <span className={className}>
      {props.text}
    </span>
  )
}
