

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Laptops',
      image: 'https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024',
    },
    {
      id: 2,
      title: 'Phones',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QoWQUGvTHv2S150JNC9Ml5cf6EYfFWA-NXj1q1Gszw&s',
    },
    {
      id: 3,
      title: 'Accessories',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/US/FX/DC/119904249/electronic-gadgets-500x500.jpg',
    },
    {
      id: 4,
      title: 'Bags',
      image: 'https://cyberguy.com/wp-content/uploads/2023/10/CGO-10-best-laptop-bags.jpg',
    },
    {
      id: 5,
      title: 'Monitors',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]

  return ( 
  <div className="categories-container">
    {categories.map(({title}) =>  (
    <div className="category-container">
    <div className="background-image"/>
  <div className="category-body-container">
    <h2>{title}</h2>
    <p>Shop Now</p>
  </div>
  </div>
))}
 </div>
  );
};

export default App;
