import { siteMeta } from "lib/constants";
import Head from "next/head";
import { useRouter } from "next/router";
// 汎用OPG画像
import siteImg from 'images/ogp.jpg'

const {siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta
const Meta = ({pageTitle, pageDesc,pageImg,pageImgw,pageImgH}) => {
  // ページのタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  // ページの説明
  const desc = pageDesc ?? siteDesc
  // ページのURL
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  // OGP画像
  const img = pageImg || siteImg.src
  const imgW = pageImgw || siteImg.width
  const imgH = pageImgH || siteImg.height
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name='description' content={desc} />
      <meta property="og:description" content={desc} />

      <link rel="canonical" href={url} />
      <meta property="og:url" content={url}/>

      <meta property="og:site_name" content={siteTitle}/>
      <meta property="og:type" content={siteType}/>
      <meta property="og:locale" content={siteLocale}/>

      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
    </Head>
  )
}

export default Meta