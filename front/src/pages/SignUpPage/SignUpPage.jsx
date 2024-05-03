import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SignUpPage() {
    return (
        <PageContainer>
            <Form>
                <h1>Sign Up Page</h1>
                <input placeholder="Name" type="text" name="name" required />
                <input placeholder="Perfil Image" type="url" name="image" required />
                <input placeholder="Email" type="email" name="email" required />
                <input placeholder="Password" type="password" name="password" required />
                <button type="submit">
                    Cadastrar
                </button>
                <h2>Já tem conta? Clique <LinkContainer to={"/"}>AQUI</LinkContainer> !</h2>
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
        background-color: darkgray;
        width: 300px;
        height: 30px;
        font-family: 30px;
        margin-top: 5px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        &:hover {
            color: white;
            background-color: black;
        } 
    }
     h2 {
        color: white;
        font-size: 15px;
        margin-bottom: 10px;
        margin-top: 10px;
        :link{
            color: white;
        }
    }
`

const LinkContainer = styled(Link)`
    color: white;
    font-weight: bolder;
    text-decoration: none;
    &:hover {
        color: black;
    }
`