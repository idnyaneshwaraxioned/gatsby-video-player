import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { Wrapper } from "../style/common.style"
import VideoCard from "../components/videoCard"

const HomePage = ({ data, ...props }) => {
  const image = getImage(data.homebackground)
  const bgImage = convertToBgImage(image)
  const videoData = data.videodata.nodes
  console.log(videoData, "videoData")

  return (
    <Layout>
      <BackgroundImage tag="section" {...bgImage} preserveStackingContext>
        <Wrapper>
          {videoData &&
            videoData.map(videoMap => (
              <VideoCard
                key={videoMap.frontmatter.slug}
                slug={videoMap.frontmatter.slug}
                title={videoMap.frontmatter.title}
                videoSourceURL={videoMap.frontmatter.videoSourceURL}
                videoImage={videoMap.frontmatter.videoImage}
                videoTitle={videoMap.frontmatter.videoTitle}
              />
            ))}
        </Wrapper>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query videoplayer {
    homebackground: file(relativePath: { eq: "deepika-padukon2.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    videodata: allMarkdownRemark {
      nodes {
        frontmatter {
          videoImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          title
          date
          videoSourceURL
          videoTitle
        }
      }
    }
  }
`

export default HomePage
