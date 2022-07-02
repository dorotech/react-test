import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Lens } from '@mui/icons-material'
import './CharCard.style.scss'
import { CharacterModel } from '../../domain/models'

interface IProps {
  char: CharacterModel
}

export const CharCard = ({ char }: IProps) => {
  return (
    <Card className='card'>
      <CardMedia component='img' alt='green iguana' height='200' image={char.image} />
      <div
        style={{
          width: '100%',
          marginTop: '185px',
          position: 'absolute',
        }}
      >
        <CardContent className='containerContent'>
          <Typography gutterBottom variant='h5' component='div' color='black'>
            {char.name}
          </Typography>
          <Typography variant='body1' color='black' className='charDescription'>
            <Lens className={char.status === 'Alive' ? 'alive' : 'dead'} />
            Status: {char.status === 'Alive' ? 'Vivo' : 'Morto'}
          </Typography>
          <Button color='secondary' fullWidth variant='contained' size='medium'>
            Ver
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
