import React from 'react';

function Profile() {
  return (
    <div class="profile">
      <ul class="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="tab"
            href="#tab-1"
            role="tab"
            aria-controls="tab-1"
            aria-selected="true"
          >
            On Sale
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#tab-2"
            role="tab"
            aria-controls="tab-2"
            aria-selected="false"
          >
            Created
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#tab-3"
            role="tab"
            aria-controls="tab-3"
            aria-selected="false"
          >
            My Activity
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="tab"
            href="#tab-4"
            role="tab"
            aria-controls="tab-4"
            aria-selected="false"
          >
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
