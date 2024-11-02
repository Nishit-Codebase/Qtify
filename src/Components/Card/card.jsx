import * as React from 'react';
import Card from '@mui/material/Card';
import {Chip } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./card.module.css";

export default function MediaCard({album}) {
  return (
    <Card className="album-card" variant="outlined" style={{ backgroundColor: '#181818', color: 'white', borderRadius: '10px' }}>
      <CardMedia
        component="img"
        alt={album.name}
        height="180"
        image={album.image}
        style={{ borderRadius: '10px 10px 0 0' }}
      />
      <CardContent style={{ padding: '10px', textAlign: 'center' }}>
        <Typography>{album.title}</Typography>
        <Chip
          label={`${album.follows} Follows`}
          style={{ backgroundColor: 'black', color: 'white', marginBottom: '8px' }}
          size="small"
        />
        <Typography variant="body2" component="div" style={{ fontWeight: 'bold' }}>
          {album.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
