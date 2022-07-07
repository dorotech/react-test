import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Lens } from '@mui/icons-material'
import { CharacterModel } from '../../domain/models'
import { useNavigate } from 'react-router-dom'
import styles from './CharCard.module.scss'

interface IProps {
  char: CharacterModel
}

export const CharCard = ({ char }: IProps) => {
  const navigate = useNavigate()
  return (
    <Card className={styles.card}>
      <CardMedia
        sx={{
          borderRadius: '50%',
          width: 'min-content',
          alignSelf: 'center',
          position: 'absolute',
          zIndex: '1',
        }}
        component='img'
        alt='green iguana'
        height='200'
        image={char.image}
      />
      <div className={styles.cardContent}>
        <CardContent className={styles.containerContent}>
          <Typography gutterBottom variant='h5' component='div' color='black'>
            {char.name}
          </Typography>
          <Typography variant='body1' color='black' className={styles.charDescription}>
            <Lens className={char.status === 'Alive' ? styles.alive : styles.dead} />
            Status: {char.status === 'Alive' ? 'Vivo' : 'Morto'}
          </Typography>
          <Button
            color='secondary'
            fullWidth
            variant='contained'
            size='medium'
            onClick={() => {
              navigate(`/character/${char.id}`)
            }}
          >
            Ver
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
