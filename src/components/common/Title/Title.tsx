import Head from 'next/head'

interface TitleProps {
  title: string
  suffix?: string
}

const Title: React.FC<TitleProps> = ({ suffix, title }) => {
  const fullTitle = title + (suffix ? ` - ${suffix}` : '')
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="twitter:title" property="twitter:title" content={fullTitle} />
    </Head>
  )
}

export default Title
