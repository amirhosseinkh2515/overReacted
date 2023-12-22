import type { GetStaticProps, NextPage } from 'next'
import HomeLayout from '@/layouts/homeLayout'
import { SEO } from '@/utils/seo'
import { getPosts } from '@/services/posts'

interface HomeProps {
  data: any;
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      <SEO
        title={"over reacted"}
        description={"home page for a test"}
        image={""}
        canonical={``}
      />
      <HomeLayout posts={data}/>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const { data } = await getPosts();
    
    return {
      props: {
        data,
      },
      revalidate: 604800, // 1 week in seconds (60 seconds * 60 minutes * 24 hours * 7 days)
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home
