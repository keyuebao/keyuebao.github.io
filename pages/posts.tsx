import React from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Index: React.FC<Props> = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Keyue Bao's Blog</title>
        </Head>
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <a
              className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
              href="#"
            >
              About
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-gray-500 hover:text-black-800 font-semibold"
              href="#"
            >
              Posts
            </a>
          </li>
        </ul>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
