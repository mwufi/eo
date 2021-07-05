import React, { useState, useEffect } from 'react';
import Title from './Title';
import Carousel from './Carousel';

function LiveAuctions() {
  return (
    <section class="row row--grid">
      <Title title="Live Auctions2" />
      <Carousel id="live"/>
    </section>
  );
}

export default LiveAuctions;
