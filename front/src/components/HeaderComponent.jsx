import styled from "styled-components"

export default function HeaderComponent() {
    return (
        <HeaderContainer>
            <h1>HEADER COMPONENT</h1>
            <img src={"https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"}/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: blue;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    h1 {
        color: white;
    }
    img {
        width: 50px;
        border-radius: 50%;
        cursor: pointer;
    }
`