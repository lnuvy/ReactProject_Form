import React from 'react'
import Nav from './content/Nav'
import Section from './content/Section'
import Footer from './content/Footer'

export default function Home() {
    return (
        <div style={{width:'80%', margin: '0 auto'}}>
            <h1>코로나 현황과 고속도로 트래픽 변화</h1>
            <Nav></Nav>
            <Section></Section>
            <Footer></Footer>
        </div>
    )
}
