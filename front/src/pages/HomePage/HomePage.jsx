import styled from "styled-components"
import HeaderComponent from "../../components/HeaderComponent"
import FooterComponent from "../../components/FooterComponent"
import { IonCheckbox } from "@ionic/react";
import AddTaskComponent from "../../components/AddTaskComponent";

export default function HomePage() {
    let tarefas = [
        "Lavar a louça",
        "Limpar o quarto",
        "Fazer compras no supermercado",
        "Pagar as contas",
        "Estudar programação",
        "Exercitar-se",
        "Ligar para um amigo",
        "Marcar consulta médica",
        "Trocar lâmpada da sala",
        "Regar as plantas"
    ];
    return (

        <HomePageContainer>
            <HeaderComponent />
            <AddTaskComponent />
            {tarefas.map((item) => <Tarefa>{item}</Tarefa>)}
            <FooterComponent />
        </HomePageContainer>
    )
}

const HomePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: red;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tarefa = styled.div`
    background-color: white;
    width: 450px;
    height: 60px;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: darkgray;
    }
`