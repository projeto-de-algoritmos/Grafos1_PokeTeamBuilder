import { useEffect, useState } from "react";
import axios from 'axios';
import PokemonCard from "../../components/pokemonCard/Index";
import { ButtonText, CardsContainer, Container, Header, HeaderContainer, InputContainer, InputHeader, PokemonInput, SearchContainer, Square, SubmitPokemon, texter } from './style';

const TeamBuilder = () => {

    const lastPoke = 300;
    const [pokemonList, setPokemonList] = useState([]);
    const [starterPokemonName, setStarterPokemonName] = useState();

    const selectStarter = () => {
        console.log(starterPokemonName);
    }

    const getPokemons = async () => {
        var pokemons = [];
        for (let i = 1; i <= lastPoke; i++) {
            pokemons.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        await axios.all(pokemons.map((pokemon) => axios.get(pokemon))).then((res) => setPokemonList(res)).then(
            console.log(pokemonList)
        );
    };

    useEffect(() => {
        getPokemons();
    }, [])

    return (
        <Container>
            <HeaderContainer>
                <Header>
                    Your team:
                </Header>
            </HeaderContainer>
            <CardsContainer>
                <PokemonCard cardNumber={1}></PokemonCard>
                <PokemonCard cardNumber={2}></PokemonCard>
                <PokemonCard cardNumber={3}></PokemonCard>
                <PokemonCard cardNumber={4}></PokemonCard>
                <PokemonCard cardNumber={5}></PokemonCard>
                <PokemonCard cardNumber={6}></PokemonCard>
            </CardsContainer>
            <SearchContainer>
                <InputHeader>Select Starter Pokemon</InputHeader>
                <InputContainer>
                    <PokemonInput
                        placeholder="Enter pokemon"
                        onChange={(pokemonName) => { setStarterPokemonName(pokemonName.target.value) }}
                    />
                    <SubmitPokemon onClick={selectStarter}>
                        <ButtonText>
                            Add Starter
                        </ButtonText>
                    </SubmitPokemon>
                </InputContainer>
            </SearchContainer>
        </Container>
    )

}

export default TeamBuilder;