import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Button, Typography } from '@mui/material';
import MediaCard from '../Card/card';
import Carousel from '../Carousel/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Section = ({ title, apiEndpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsed, setCollapsed] = useState(true); // Default to collapsed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        // Ensure data structure matches Carousel expectations
        const formattedData = response.data.map((item) => ({ ...item })); // Assuming necessary mapping
        setData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const toggleView = () => {
    setCollapsed(!collapsed);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#121212', borderRadius: '10px', margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h5" style={{ color: 'white' }}>{title}</Typography>
        <Button variant="text" style={{ color: '#1db954' }} onClick={toggleView} aria-label="Show all albums">
          {collapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>
      {collapsed ? (
        <Carousel
          items={data}
          renderItem={(item) => <MediaCard album={item} />}
        />
      ) : (
        // <Grid container spacing={2}>
        //   {data.map((item) => (
        //     <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
        //       <MediaCard album={item} />
        //     </Grid>
        //   ))}
        // </Grid>
        <Grid container spacing={2} data-testid="show-all-grid">
  {data.map((item) => (
    <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
      <MediaCard album={item} />
    </Grid>
  ))}
</Grid>


      )}
    </div>
  );
};

export default Section;