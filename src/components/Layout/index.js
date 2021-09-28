import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Headroom from 'react-headroom'
import { Layout } from "antd"
function LayoutFlow({children}) {
    const {Content} = Layout;
    return (
        <Layout >
        <Headroom
      upTolerance={10}
      downTolerance={10}
      style={{zIndex: '20', height: '6.5em'}}
    >
      <Header  />
    </Headroom>
    <Content style={{ padding: '0 50px', marginTop: '6.5em' }}>
    {children}
    </Content>
    <Footer />
    </Layout>
    )
}

export default LayoutFlow
