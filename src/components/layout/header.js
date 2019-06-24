import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Localize from '../containers/localize'
import LogoHeader from '../../images/svg/logo-header.svg'

const StyledHeader = styled.header`
    background-color: var(--background-color);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
`

const NavLeft = styled.div`
    width: 25%;
    text-align: left;
`

const NavCenter = styled.div`
    width: 50%;
    text-align: center;
`

const NavRight = styled.div`
    width: 25%;
    text-align: right;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: var(--white-color);
    text-decoration: none;
    padding: 1rem;
`

const NavButton = styled.button`
    border: 1px solid var(--main-color);
    color: var(--main-color);
    background-color: transparent;
    padding: 1rem;

    &:hover {
        background-color: var(--main-color);
        color: var(--white-color);
        cursor: pointer;
    }
`

const Header = () => (
    <StyledHeader>
        <Wrapper>
            <NavLeft>
                <Link to="/">
                    <LogoHeader />
                </Link>
            </NavLeft>
            <NavCenter>
                <StyledLink to="/trade">
                    <Localize translate="Trade" />
                </StyledLink>
                <StyledLink to="/about">
                    <Localize translate="About us" />
                </StyledLink>
                <StyledLink to="/contact">
                    <Localize translate="Help centre" />
                </StyledLink>
            </NavCenter>
            <NavRight>
                <NavButton>Login</NavButton>
            </NavRight>
        </Wrapper>
    </StyledHeader>
)

export default Header
