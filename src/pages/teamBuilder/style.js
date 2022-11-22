import styled from "styled-components";
import img from '../../background/BG3.webp';

export const Container = styled.div`

    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-flow: column;
    overflow: hidden;
    background-image: url(${img});
    background-size: 100% 100%;
`;

export const CardsContainer = styled.div`

    display: flex;
    width: 90%;
    height: 40%;
`
export const Header = styled.h1`

    align-self: center;
    font-size: 30px;
`

export const HeaderContainer = styled.div`

    display: flex;
    justify-content: space-between;
    width: 87%;
    height: 10%;
    margin-top: 4%;
    margin-left: 5%;
    margin-right: 5%;
    flex-flow: wrap;
`

export const SearchContainer = styled.div`

    display: flex;
    width: 50%;
    height: 35%;
    margin-top: 2%;
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
    width: 20%;
    margin-left: 1%;
    border-radius: 10px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #999;
        color: #444444;
    }
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

    height: 100%;
    width: 20%;
    margin-left: 1%;
    border-radius: 10px;
    border: 3px solid #000;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: #CCC;
        color: #999;
    }
`

export const RandomText = styled.p`
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bolder;
    color: #000;
    text-align: center;
    margin-top: 10%;
`
export const GenerateButton = styled.div`
    
    height: 25%;
    width: 25%;
    margin-top: 5%;
    border-radius: 10px;
    background-color: #000;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #999;
        color: #444444;
    }
`

export const GenerateButtonText = styled.p`
    width: 100%;
    height: 100%;
    font-size: 25px;
    font-weight: bolder;
    color: #FFF;
    text-align: center;
`
export const Clear = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background-color: #000;
    align-self: center;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #999;
        color: #444444;
    }
`

export const X = styled.p`
    font-size: 25px;
    font-weight: bolder;
    color: #FFF;
    margin-top: 15%;
`

export const GraphText = styled.p`
    font-size: 21px;
    font-weight: bolder;
    color: #000;
`