import styled from 'styled-components'
import Box from './box'
import device from 'themes/device'

const Container = styled(Box)`
    margin: 0 auto;
    display: flex;
    align-items: ${(props) => (props.align ? props.align : 'center')};
    justify-content: ${(props) => (props.justify ? props.justify : 'center')};
    flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
    width: 80%;

    @media ${device.desktop} {
        max-width: 1200px;
    }
    @media ${device.laptopL} {
        width: 84%;
    }
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

export default Container
