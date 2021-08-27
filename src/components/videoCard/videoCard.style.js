import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const VideoCardContainer = styled.div`
  width: 235px;;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,.5);

  @media (max-width: 576px) {
    width : 65%; 
  }
` 
export const VideoLink = styled(Link)`
  padding:5px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-decoration:none;
`
export const CardHeading = styled.h2`
  padding:5px 0;
  color:#fff;
  font-size: 16px;
`
export const CardFigure = styled.figure`
  width:100%;
  margin:0;
`
export const StyledImage = styled(GatsbyImage)`
  border-radius: 5px;
`