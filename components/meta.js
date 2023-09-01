import { siteMeta } from "lib/constants";
import Head from "next/head";
const {siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

const Meta = ({pageTitle}) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
    </Head>
  )
}

export default Meta