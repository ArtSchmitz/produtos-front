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
        border: solid .5px;
        text-align: center;
    }

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
