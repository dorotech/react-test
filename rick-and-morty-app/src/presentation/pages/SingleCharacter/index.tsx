import React, { useEffect, useState } from 'react'
import { Lens } from '@mui/icons-material'
import { Card, CardContent, CardMedia, IconButton, LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterModel } from '../../../domain/models'
import { makeRemoteGetCharacterById } from '../../../main/fatories/usecases'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Header } from '../../components/Header'
import styles from './Single.module.scss'

export const SingleCharacter = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [character, setCharacter] = useState<CharacterModel>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (params.id) {
      setLoading(true)
      makeRemoteGetCharacterById()
        .perform({ id: +params.id })
        .then((data) => {
          setLoading(false)
          setCharacter(data)
        })
    }
  }, [])

  return (
    <Box className='body'>
      <Header />

      <Box className={styles.main}>
        {loading ? (
          <LinearProgress />
        ) : (
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
              height='300'
              image={character?.image}
            />
            <div className={styles.cardContent}>
              <CardContent className={styles.containerContent}>
                <Typography gutterBottom variant='h5' component='div' color='black'>
                  {character?.name}
                </Typography>

                <Typography
                  gutterBottom
                  variant='body1'
                  color='black'
                  component='div'
                  className={styles.charDescription}
                >
                  <Lens className={character?.status === 'Alive' ? styles.alive : styles.dead} />
                  <b>Status:</b> {character?.status === 'Alive' ? 'Vivo' : 'Morto'}
                </Typography>

                <Typography gutterBottom variant='body1' component='div' color='black'>
                  <b>Espécie:</b> {character?.species}
                </Typography>

                <Typography gutterBottom variant='body1' component='div' color='black'>
                  <b>Gênero:</b> {character?.gender}
                </Typography>

                <Typography gutterBottom variant='body1' component='div' color='black'>
                  <b>Origem:</b> {character?.origin.name}
                </Typography>

                <Typography gutterBottom variant='body1' component='div' color='black'>
                  <b>Última localização:</b> {character?.location.name}
                </Typography>
                <IconButton
                  onClick={() => {
                    navigate('/')
                  }}
                  aria-label='back'
                >
                  <ArrowBackIcon fontSize='large' color='primary' />
                </IconButton>
              </CardContent>
            </div>
          </Card>
        )}
      </Box>
    </Box>
  )
}
