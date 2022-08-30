import React from 'react'
import { Card, CardContent, CardMedia, Rating, Typography } from '@mui/material';

const DishCard = ({ dish }) => {
    const [rank, setRank] = React.useState(0)
    const handleRank = (event, newRank) => {
        switch (newRank) {
            case 1:
                console.log('id', dish.id, 10);
                break;
            case 2:
                console.log('id', dish.id, 20);
                break;
            case 3:
                console.log('id', dish.id, 30);
                break;
            case null:
                console.log('id', dish.id, 0);
                break;
            default:
                break;
        }
    }

    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardMedia
                component='img'
                height='200'
                image={dish.image}
            />
            <CardContent>
                <Typography gutterBottom component='div' variant='h5'>
                    {dish.dishName}
                </Typography>
                <Typography variant='body2' color='InfoText'>
                    {dish.description}
                </Typography>
                <hr />
                <Rating
                    size='large'
                    name='ranking'
                    value={rank}
                    max={3}
                    onChange={(event, newRank) => {
                        setRank(newRank)
                        handleRank(event, newRank)
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default DishCard