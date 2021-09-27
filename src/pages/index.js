import React from 'react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const StoreIndex = () => {
   const title = 'Store'
  return (
    <Layout >
      <SEO title={siteTitle} />
      <ProductList />
    </Layout>
  )
}

export default StoreIndex
