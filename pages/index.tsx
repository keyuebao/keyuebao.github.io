import React from 'react'
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import Post from '../types/post'
import AboutSection from '../components/about-section'

type Props = {
  about: string
}

const Index: React.FC<Props> = ({ about }) => {
  return (
    <Layout>
      <Head>
        <title>{NAME}</title>
      </Head>
      {/* <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold" href="#">About</a>
        </li>
        <li className="mr-1">
          <a className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-black-800 font-semibold" href="#">Posts</a>
        </li>
      </ul> */}
      <Container>
        <Intro />
        <AboutSection />
      </Container>
    </Layout>
  )
}

export default Index