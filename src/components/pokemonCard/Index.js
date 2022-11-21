import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CardNumber, EmptyCard } from './style';

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
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={pokemonImage}
                                alt={`${pokemonName} image`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pokemonName}
                                </Typography>
                                {pokemonType2 ? <Typography variant="body2" color="text.secondary">
                                    {pokemonType1}, {pokemonType2}
                                </Typography> : <Typography variant="body2" color="text.secondary">
                                    {pokemonType1}
                                </Typography>}
                            </CardContent>
                        </CardActionArea>
                    </Card>
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