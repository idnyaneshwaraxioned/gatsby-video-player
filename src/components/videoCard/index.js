import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { VideoCardContainer } from "./videoCard.style"

const VideoCard = ({
  key,
  slug,
  title,
  videoSourceURL,
  videoImage,
  videoTitle,
  ...props
}) => {
  console.log(slug)
  return (
    <VideoCardContainer>
      <GatsbyImage image={getImage(videoImage)}/>
    </VideoCardContainer>
  )
}

export default VideoCard
