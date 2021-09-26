import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout({children}) {
    return (
        <>
        <Headroom
      upTolerance={10}
      downTolerance={10}
      style={{zIndex: '20', height: '6.5em'}}
    >
      <Header  />
    </Headroom>
    <Container text>{children}</Container>
    <Footer />
    </>
    )
}

export default Layout
