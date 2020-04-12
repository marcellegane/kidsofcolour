import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const DocumentHead = ({ siteUrl, socialImage, title, description }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@kidsofcolourhq" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@roxylegane" />
      <meta name="twitter:image" content={socialImage} />

      {/* Open Graph data */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400"
        rel="stylesheet"
      />
    </Head>
  </>
)

DocumentHead.propTypes = {
  siteUrl: PropTypes.string,
  socialImage: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

DocumentHead.defaultProps = {
  siteUrl: 'http://kidsofcolour.com',
  socialImage: 'http://kidsofcolour.com/images/social.png',
  title: 'Kids of Colour',
  description:
    'A platform for kids of colour to explore their experiences of race, identity and culture in modern Britain',
}

export default DocumentHead
