import React from 'react'
import  { useStaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet"

function SEO({description,lang,title}) {
   const {site} =  useStaticQuery(
      graphql`
        query  {
          site(siteMetadata: {}) {
            siteMetadata {
              author
              description
              title
            }
          }
        }
      `
    )

    return (
         <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {name: 'msapplication-TileColor', content: '#da532c'},
        {name: 'theme-color', content: '#ffffff'},
      ]
        .concat(meta)}
    >
        {/* just to learn  */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href='/favicons/wall-clock.png'
      />
      </Helmet>
    )
}

SEO.defaultProps = {
  lang: `en`
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}


export default SEO
