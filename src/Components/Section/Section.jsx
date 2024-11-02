import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Button, Typography } from '@mui/material';
import MediaCard from '../Card/card';

const Section = ({ title }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsed, setCollapsed] = useState(false); 
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setAlbums(response.data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#121212', borderRadius: '10px', margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5" style={{ color: 'white' }}>{title}</Typography>
        <Button variant="text" style={{ color: '#1db954' }} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? 'Expand' : 'Collapse'}
        </Button>
      </div>
      {!collapsed && (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={album.id}>
              <MediaCard album={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Section;
