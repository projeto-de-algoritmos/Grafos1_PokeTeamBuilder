import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-flow: column;
    overflow: hidden;
`;

export const CardsContainer = styled.div`

    display: flex;
    width: 90%;
    height: 40%;
`
export const Header = styled.h1`

    font-size: 30px;
`

export const HeaderContainer = styled.div`

    display: flex;
    justify-content: flex-start;
    padding-left: 11.5%;
    width: 100%;
    height: 10%;
    margin-top: 5%;
`

export const SearchContainer = styled.div`

    display: flex;
    width: 50%;
    height: 35%;
    margin-top: 5%;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
`

export const PokemonInput = styled.input`
    width: 74%;
    height: 100%;
    display: flex;
    border: 2px solid #000000;
    border-radius: 10px;
    font-size: 27px;
    text-indent: 10px;
    box-sizing: border-box;
    outline: 0;
`

export const InputHeader = styled.h1`

    align-self: flex-start;
    font-size: 25px;
`

export const SubmitPokemon = styled.div`

    height: 100%;
    width: 25%;
    margin-left: 1%;
    border-radius: 10px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const InputContainer = styled.div`
    
    display: flex;
    width: 100%;
    height: 20%;
    flex-flow: row;
`
export const ButtonText = styled.p`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bolder;
    color: #FFF;
    text-align: center;
`

export const RandomPokemon = styled.div`

    margin-top: 1%;
    height: 19%;
    width: 24.5%;
    margin-left: 1%;
    border-radius: 10px;
    border: 3px solid #000;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: flex-end;
`

export const RandomText = styled.p`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bolder;
    color: #000;
    text-align: center;
`