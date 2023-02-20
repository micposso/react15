import React, { ReactElement } from 'react'

// define the type first
type HeadingProps = { title: string };

// destructure the heading prop object

const Heading = ({ title }: HeadingProps): ReactElement => {
  return <h1>{title}</h1>
}

export default Heading;  