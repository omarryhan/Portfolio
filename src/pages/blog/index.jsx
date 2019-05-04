import React from "react"

import SEO from "../../components/seo"
import { H1 } from "../../components/CommonStyled"

import GlobalStyles from "../../components/CommonStyled/GlobalStyles"


const IndexPage = () => (
    <>
        <GlobalStyles />
        <SEO title="Omar Ryhan" keywords={[`omarryhan`, `omarfryhan`, `omar ryhan`, `blog`]} />
        <H1>Omar Ryhan's Blog</H1>
    </>
)

export default IndexPage
