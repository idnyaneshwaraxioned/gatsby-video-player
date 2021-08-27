import styled from 'styled-components';
import {Link} from 'gatsby';
import { Wrapper } from '../../style/common.style';

export const HeaderContainer = styled.header`
  background-color:gray; 
`
export const LogoLink = styled(Link)`
  padding: 20px;
  text-decoration:none;
  font-size: 35px;
  color:#fff;
`
export const HeaderWrapper = styled(Wrapper)`
  padding: 20px;
  background-color:red;
`