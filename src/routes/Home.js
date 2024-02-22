import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: #180045;

    /* & .searchForm{
        width: 80%;
        min-width: 200px;
        max-width: 360px;
        background: aliceblue;
        padding: 5px;
        border-radius: 20px;
        border: #cd70c6 1px solid;
        box-shadow: 2px 2px 6px #7a4174;

        & .search_input{
            border: none;
            background: none;
            outline: none;
            color: #b320b4;
        }
    
        & .search_btn {
            order: none;
            background: none;
            padding: 0;
            cursor: pointer;
            color: coral;
        }
    } */
`

export const SearchContainer = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1{
        color: #dfdfdf;
    }
 `