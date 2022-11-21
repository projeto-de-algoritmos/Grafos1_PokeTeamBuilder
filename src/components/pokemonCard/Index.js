import * as React from 'react';
import { CardNumber, EmptyCard, FilledCard, PokeImage, PokeName, PokeType } from './style';

const PokemonCard = ({
    fill,
    pokemonName,
    pokemonType1,
    pokemonType2,
    pokemonImage,
    cardNumber
}) => {
    return (
        <>
            {fill ?
                (
                    <FilledCard>
                        <PokeImage src={pokemonImage} alt="new" />
                        <PokeName>
                            {pokemonName}
                        </PokeName>
                        {pokemonType2 ? <PokeType>
                            {pokemonType1}, {pokemonType2}
                        </PokeType> : <PokeType variant="body2" color="text.secondary">
                            {pokemonType1}
                        </PokeType>}
                    </FilledCard>
                ) :
                <EmptyCard>
                    <CardNumber>
                        {cardNumber}
                    </CardNumber>
                </EmptyCard>
            }
        </>
    );
}

export default PokemonCard;