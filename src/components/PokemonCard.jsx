import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';


export default function PokemonCard({ data }) {

    const number = data.url.split("/")[6];

    console.log(data)

    return (
        <Card sx={{
            maxWidth: 250,
            borderRadius: 5,
            border: '1px solid #ccc',
            margin: '10px auto',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)', 
                boxShadow: 6,
            },
        }}
        >
            <CardHeader
                sx={{
                    borderBottom: '1px solid #ccc',
                    textAlign: 'right',
                    backgroundColor: '#ef5350',
                    height: 50,
                    color: '#fff'
                }}
                title={'N°' + number}
            />

            <CardMedia
                sx={{ height: 170 }}
                image={data.img}
                title={data.name + '_img'}
            />

            <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'inline-block', position: 'relative', top: 4 }}>
                    <img src="/icons/pokemon_icon.png" alt="pokemon_icon" width="20"/>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', display: 'inline-block' }} >
                    {data.name}
                </Typography>
            </CardContent>

        </Card>
    );
}
