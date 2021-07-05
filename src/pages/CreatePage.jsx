import React from 'react';
import CreateForm from '../components/CreateForm';
import Author from '../components/Author';

function CreatePage() {
  return (
    <main class="main">
      <div class="main__author" data-bg="img/bg/bg.jpeg"></div>
      <div class="container">
        <div class="row row--grid">
          <div class="col-12 col-xl-3">
            <Author />
          </div>

          <div class="col-12 col-xl-9">
            <div class="main__title main__title--create">
              <h2>Create collectible item</h2>
            </div>

            <CreateForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default CreatePage;
