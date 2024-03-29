import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: #180045;
`

export const SearchContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1{
        color: #dfdfdf;
        font-size: 2.2em;
        
        
    }
`

export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #FFFFFF;
`

export const NoAnimesMessage = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`