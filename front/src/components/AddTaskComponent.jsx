import styled from "styled-components"

export default function AddTaskComponent() {
    return (
        <AddContainer>
            <AddForm>
                <input placeholder="New Task" name="name" type="text"  />
                <button type="submit">Add new Task</button>
            </AddForm>
        </AddContainer>
    )
}

const AddContainer = styled.div`
    background-color: white;
    padding: 10px;
    width: 450px;
    height: 100px;
    border-radius: 10px;
    margin-top: 10px;
    display: ;
`

const AddForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    input {
        width: 100%;
        height: 40px;
        border-radius: 10px;
    }

    button {
        width: 130px;
        height: 30px;
        border-radius: 10px;
        margin-top: 10px;
        cursor: pointer;
        &:hover {
            background-color: darkgray;
        }
    }
`