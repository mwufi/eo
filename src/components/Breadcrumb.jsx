import React from 'react';

function Breadcrumb() {
  return (
    <div class="col-12">
      <ul class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="index.html">Home</a>
        </li>
        <li class="breadcrumb__item">
          <a href="author.html">Author</a>
        </li>
        <li class="breadcrumb__item breadcrumb__item--active">Item</li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
