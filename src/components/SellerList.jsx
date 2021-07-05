import React from 'react';

const sellers = [
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: 'miriuuu',
    price: '214.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: 'sc00ty',
    price: '205.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar3.jpg',
    link: 'author.html',
    displayname: 'redalert',
    price: '137.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: '1one',
    price: '214.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: 'kateblank',
    price: '214.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: 'kateblank',
    price: '214.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: 'llily',
    price: '214.22 ETH',
  },
  {
    avatar: 'img/avatars/avatar.jpg',
    link: 'author.html',
    displayname: 'kateblank',
    price: '214.22 ETH',
  },
];

function SellerList() {
  return (
    <div class="col-12">
      <ul class="sellers-list">
        {sellers.map(({ avatar, link, displayname, price }, i) => (
          <li key={displayname + i.toString()}>
            <span class="sellers-list__number">{i}</span>
            <div class="sellers-list__author sellers-list__author--verified">
              <img src={avatar} alt="" />
              <a href={link}>{displayname}</a>
              <span>{price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SellerList;
