import React from 'react';
import Section from '../Section/Section';
const TopAlbums = () => <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />;
const NewAlbums = () => <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />;

const AlbumsPage = () => {
  return (
    <div>
      <TopAlbums />
      <NewAlbums />
    </div>
  );
};

export default AlbumsPage;
