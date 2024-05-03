import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SignInPage() {
    return (
        <PageContainer>
            <Form>
                <h1>Login Page</h1>
                <input placeholder="email" type="email" name="email" />
                <input placeholder="password" type="password" name="password" />
                <LinkContainer to={"/homePage"}>
                    <button type="submit">Login</button>
                </LinkContainer>
                <h2>Não tem conta? Se cadastre clicando <LinkContainer to={"/signUpPage"}>AQUI</LinkContainer> !</h2>
            </Form>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: red;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        color: white;
        font-size: 50px;
        margin-bottom: 10px;
    }
    input {
        width: 300px;
        height: 30px;
        margin: 5px;
        border-radius: 5px;
        border: none;
        cursor: text;
        &:hover {
            background-color: darkgray;
        }
    }
    button {
        width: 300px;
        height: 30px;
        margin-top: 5px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: darkgray;
        }
        
    }
    h2 {
        color: white;
        font-size: 15px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
`

const LinkContainer = styled(Link)`
    color: white;
    font-weight: bolder;
    text-decoration: none;
    &:hover {
        color: black;
        cursor: pointer;
    }
`