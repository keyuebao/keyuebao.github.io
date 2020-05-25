import React from 'react'
import CoverImage from './cover-image'
import { ABOUT_IMAGE_URL, NAME } from '../lib/constants'

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={NAME} src={ABOUT_IMAGE_URL} slug={'/'} />
      </div>
      <p className="text-lg leading-relaxed mb-4">Hi!</p>
      <p className="text-lg leading-relaxed mb-4">
        Currently a software engineer at Square SF, I graduated from UC San Diego with a B.S. in Computer Science (March 2018). Previously interned at Square, Google and Microsoft.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        In my spare time, I enjoy cooking, reading and skincare.
      </p>
    </section>
  )
}

export default AboutSection