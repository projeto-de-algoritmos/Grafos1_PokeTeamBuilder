import { useEffect, useState } from "react";
import axios from 'axios';
import PokemonCard from "../../components/pokemonCard/Index";
import { ButtonText, CardsContainer, Container, Header, HeaderContainer, InputContainer, InputHeader, PokemonInput, RandomPokemon, RandomText, SearchContainer, Square, SubmitPokemon, texter } from './style';

const TeamBuilder = () => {

    const lastPoke = 300;
    const [pokemonList, setPokemonList] = useState([]);
    const [starterPokemonName, setStarterPokemonName] = useState();
    const [firstCard, setFirstCard] = useState([]);
    const [firstCardFill, setFirstCardFill] = useState(false);
    const [lastCardsFill, setLastCardsFill] = useState(false);

    const selectStarter = async (num) => {
        await clearCards();
        firstCard.push(pokemonList[num]?.data);
        if (firstCard) {
            setFirstCardFill(true);
        }
        console.log(firstCard);
    }

    const getRandomPokemon = () => {
        const rnd = Math.floor(Math.random() * lastPoke)
        console.log(rnd);
        selectStarter(rnd);
    }

    const getSelectedPokemon = () => {
        const pknum = pokemonList.findIndex(pkList => {
            return pkList.data.name === starterPokemonName.toLowerCase();
        })
        if (pknum >= 0) {
            console.log(pknum);
            selectStarter(pknum);
        } else {
            alert('The typed pokemon isn\'t available or doesn\'t exists');
        }
    }

    const clearCards = () => {
        while (firstCard.length > 0) {
            firstCard.pop();
        }
        setFirstCardFill(false);
        setLastCardsFill(false);
        setStarterPokemonName("");
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
                <PokemonCard
                    cardNumber={1}
                    fill={firstCardFill}
                    pokemonName={firstCard[0]?.name}
                    pokemonImage={firstCard[0]?.sprites.front_default}
                    pokemonType1={firstCard[0]?.types[0]?.type?.name}
                    pokemonType2={firstCard[0]?.types[1]?.type?.name}
                />
                <PokemonCard
                    cardNumber={2}
                    fill={lastCardsFill}
                    pokemonName={firstCard[1]?.name}
                    pokemonImage={firstCard[1]?.sprites.front_default}
                    pokemonType1={firstCard[1]?.types[0]?.type?.name}
                    pokemonType2={firstCard[1]?.types[1]?.type?.name}
                />
                <PokemonCard
                    cardNumber={3}
                    fill={lastCardsFill}
                    pokemonName={firstCard[2]?.name}
                    pokemonImage={firstCard[2]?.sprites.front_default}
                    pokemonType1={firstCard[2]?.types[0]?.type?.name}
                    pokemonType2={firstCard[2]?.types[1]?.type?.name}
                />
                <PokemonCard
                    cardNumber={4}
                    fill={lastCardsFill}
                    pokemonName={firstCard[3]?.name}
                    pokemonImage={firstCard[3]?.sprites.front_default}
                    pokemonType1={firstCard[3]?.types[0]?.type?.name}
                    pokemonType2={firstCard[3]?.types[1]?.type?.name}
                />
                <PokemonCard
                    cardNumber={5}
                    fill={lastCardsFill}
                    pokemonName={firstCard[4]?.name}
                    pokemonImage={firstCard[4]?.sprites.front_default}
                    pokemonType1={firstCard[4]?.types[0]?.type?.name}
                    pokemonType2={firstCard[4]?.types[1]?.type?.name}
                />
                <PokemonCard
                    cardNumber={6}
                    fill={lastCardsFill}
                    pokemonName={firstCard[5]?.name}
                    pokemonImage={firstCard[5]?.sprites.front_default}
                    pokemonType1={firstCard[5]?.types[0]?.type?.name}
                    pokemonType2={firstCard[5]?.types[1]?.type?.name}
                />
            </CardsContainer>
            <SearchContainer>
                <InputHeader>Select Starter Pokemon</InputHeader>
                <InputContainer>
                    <PokemonInput
                        placeholder="Enter pokemon"
                        onChange={(pokemonName) => { setStarterPokemonName(pokemonName.target.value) }}
                        value={starterPokemonName}
                    />
                    <SubmitPokemon onClick={getSelectedPokemon}>
                        <ButtonText>
                            Add Starter
                        </ButtonText>
                    </SubmitPokemon>
                </InputContainer>
                <RandomPokemon onClick={getRandomPokemon}>
                    <RandomText>
                        Random Starter
                    </RandomText>
                </RandomPokemon>
            </SearchContainer>
        </Container>
    )

}

export default TeamBuilder;