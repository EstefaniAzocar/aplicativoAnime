import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 90%;
    min-width: 200px;
    max-width: 360px;
    background: aliceblue;
    padding: 10px 8px;
    border-radius: 20px;
    border: #cd70c6 1px solid;
    box-shadow: 2px 2px 6px #7a4174;
    display: flex;
    justify-content: space-between;

    & .search_input{
        border: none;
        background: none;
        outline: none;
        color: black;
    }

    & .search_btn {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
        color: #111671;
    }
`