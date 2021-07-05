import React from 'react';
import Title from './Title';

function Section({ children, title }) {
  return (
    <section class="row row--grid">
      {title && <Title title={title} />}
      {children}
    </section>
  );
}

export default Section;
