import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products && // if products is undefined, it will not render the ProductCard components.
          products.map((product) => (
            <ProductCard key={product.id} product={product} /> // If products exist, it maps over the array and renders a ProductCard for each product, passing the product details as props.
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
// The component ensures that it always displays the correct products by updating the state whenever the URL parameter or categories map changes.
