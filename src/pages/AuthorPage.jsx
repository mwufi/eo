import React from 'react';
import ProfileTabs from '../components/ProfileTabs';
import Tabs from '../components/Tabs';
import Author from '../components/Author';

function AuthorPage() {
  return (
    <main class="main">
      <div class="main__author" data-bg="img/bg/bg.jpeg"></div>
      <div class="container">
        <div class="row row--grid">
          <div class="col-12 col-xl-3">
            <Author />
          </div>
          <div class="col-12 col-xl-9">
            <ProfileTabs />
            <Tabs />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AuthorPage;
