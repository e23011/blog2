import { getPostBySlug,getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-text'
import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header'
import Image from 'next/legacy/image'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import PostBody from 'components/post-body'
import ConvertBody from 'components/convert-body'
import Postcategories from 'components/post-categories'
// import { getPlaiceholder } from 'plaiceholder'

const Post = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle='Blog Article' publish={publish} />
        <figure>
          <Image
            src={eyecatch.url}
            alt=''
            priority
            sizes='(min-width: 1152px) 1152px, 100vw'
            layout='responsive'
            width={eyecatch.width}
            height={eyecatch.height}
            // placeholder='blur'
            // blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              {/* {content} */}
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Postcategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
      </article>
    </Container>
  )
}

const getStaticPaths = async () => {
  const allSlugs = await getAllSlugs()
  return {
    paths: allSlugs.map(({slug}) => `/blog/${slug}`),
    fallback: false
  }
}
const getStaticProps = async context => {
  const slug = context.params.slug
  const post = await getPostBySlug(slug)
  const description = extractText(post.content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  // const {base64} = await getPlaiceholder(eyecatch.url)
  // eyecatch.blurDataURL = base64
  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description
    }
  }
}

export { getStaticProps }
export { getStaticPaths }
export default Post
