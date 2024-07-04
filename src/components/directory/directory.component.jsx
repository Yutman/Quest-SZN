import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

 const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route: 'shop/hats'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      route: 'shop/jackets'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.pinimg.com/236x/b7/7a/c7/b77ac7f967d867f441ce07879cd458ba.jpg',
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.pinimg.com/564x/b1/cd/0a/b1cd0a6d917c7aface273adbcad1ff2a.jpg',
      route: 'shop/womens'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.pinimg.com/564x/10/74/8a/10748ae3edd8c1b8948dce20bb617467.jpg',
      route: 'shop/mens'
    },
  ]


const Directory = () => {
  
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;