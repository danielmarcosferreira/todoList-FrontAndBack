import { Link } from "react-router-dom"
import styled from "styled-components"

export default function FooterComponent() {
    return (
        <FooterContainer>
            <h1>HOME</h1>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/add-button-1753400-1499367.png?f=webp"/>
            <Link to={"/"}><h1>SAIR</h1></Link>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: blue;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    h1 {
        color: white;
        cursor: pointer;
    }
    img {
        width: 50px;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            background-color: white;
        }
    }
`