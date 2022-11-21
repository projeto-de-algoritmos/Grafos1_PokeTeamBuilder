import React from "react";
import { PokemonInput, Container } from "./Style";

const AddPokemonField = (
    setPokemonName
) => {
    return (
        <Container>
            <PokemonInput
                placeholder="Enter pokemon"
                onChange={(pokemonName) => { setPokemonName(pokemonName.target.value) }}
            />
        </Container>
    )
}

export default AddPokemonField;