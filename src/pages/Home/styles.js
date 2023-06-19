import styled from "styled-components";

export const Table = styled.table`
    width: 100%;

    th{
        background-color: #ffd219;
        color: #3e3e3e;
        padding: 10px;
    }

    td{
        background-color: f6f6f6;
        color: #3e3e3e;
        padding: 8px;
    }
`;

export const Container = styled.div`
    max-width: 60%;
    margin: 50px auto;
    box-shadow: 0 0 1em #6c757d;
`;

export const Titulo = styled.h1`
    color: 3e3e3e;
    font-size: 23px;
`;

export const Button = styled.button`
    width: 100%;
    background: #3e3e3e;
    color: #fff;    
    border: none;
    font-size: 16px;
    padding: 10px;
    
    :hover{
        background: #6c757d;
        cursor: pointer;
    }
`;

export const RegisterButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
`;

export const ButtonContainer = styled.div`
    td{
        display: flex;
        justify-content: space-around;
        text-decoration: none;
    }

    div{
        color: #fff;
        width: 80px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s;
    }

`;

export const ButtonVisu = styled.div`
    background-color: #1E90FF;

    :hover{
        background-color: #00CED1;
    }
`;

export const ButtonEdit = styled.div`
    background-color: #228B22;

    :hover{
        background-color: #5FAA5F;
    }
`;

export const ButtonDelete = styled.div`
    background-color: #B22222;
    cursor: pointer;

    :hover{
        background-color: #D86F6F;
    }
`;
