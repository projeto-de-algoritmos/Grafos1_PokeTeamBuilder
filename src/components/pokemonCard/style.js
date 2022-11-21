import styled from "styled-components";

export const EmptyCard = styled.div`
    width: 15%;
    height: 100%;
    background-color: #000;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 1.5%;
    text-align: center;
`;

export const CardNumber = styled.p`

    font-weight: bolder;
    color: #FFF;
    font-size: 100px;
`

export const FilledCard = styled.div`
    width: 15%;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 1.5%;
    text-align: center;
    flex-flow: column;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`

export const PokeImage = styled.img`
    width: 100%;
    height: 60%;
`

export const PokeName = styled.p`
    font-weight: bold;
    font-size: 20px;
`

export const PokeType = styled.p`
    font-size: 15px;
`