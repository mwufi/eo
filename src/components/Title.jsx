import React from 'react';

function Title({ title, link = 'title.html', children }) {
  return (
    <div class="col-12">
      <div class="main__title">
        <h2>
          <a href={link}>{title}</a>
        </h2>

        {children}
      </div>
    </div>
  );
}

export default Title;
