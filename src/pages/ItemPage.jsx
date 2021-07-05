import React from 'react';
import Title from '../components/Title';
import AssetInfo from '../components/AssetInfo';
import AssetDisplay from '../components/AssetDisplay';
import Explore from '../components/Explore';
import Section from '../components/Section';

function ItemPage() {
  return (
    <main class="main">
      <div class="container">
        <div class="row row--grid">
          <Title title="Sometimes you like to see it" />
        </div>

        <div class="row">
          <div class="col-12 col-xl-6">
            <AssetDisplay />
          </div>

          <div class="col-12 col-xl-6">
            <AssetInfo />
          </div>
        </div>

        <Section>
          <Title title="Other Author Assets" />
          <Explore />
        </Section>
      </div>
    </main>
  );
}

export default ItemPage;
