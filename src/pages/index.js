
import React from 'react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
const StoreIndex = () => {
  return (
    <Layout >
      <SEO title="Store" />
      <ProductList />
    </Layout>
  )
}

export default StoreIndex
