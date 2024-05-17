import Directory from './components/directory/directory.component';




const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Accessories',
      imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/US/FX/DC/119904249/electronic-gadgets-500x500.jpg',
    },
    {
      id: 2,
      title: 'Cameras',
      imageUrl: 'https://images.pexels.com/photos/3497126/pexels-photo-3497126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Monitors',
      imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Laptops',
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',
    },
    {
      id: 5,
      title: 'Phones',
      imageUrl: 'https://i.pinimg.com/564x/1e/c9/9c/1ec99c1719180c0db1e6a7628285066a.jpg',
    },
  ]

  return ( 
  <Directory categories={categories}/>
  );
};

export default App;
