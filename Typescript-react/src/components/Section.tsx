// since react 18, a lot of the react typescript integration is obsolte
// when using "children" we need to specify what will be the children, in this case reactnodes
import React, { ReactNode } from 'react'

type SectionProps = {
  // makes title optional, but we need to provide a default title
  title?: string;
  children: ReactNode
}


// use default parameter in the title if title is not provided, is not a default prop.
export const Section = ({ children, title = "My subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

