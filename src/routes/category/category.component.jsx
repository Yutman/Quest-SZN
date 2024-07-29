import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoryContainer, Title } from './category.styles';


const Category = () => {
  const { category } = useParams();
  console.log('render/re-rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    console.log('effect fired calling setProducts')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products && // if products is undefined, it will not render the ProductCard components.
          products.map((product) => (
            <ProductCard key={product.id} product={product} /> // If products exist, it maps over the array and renders a ProductCard for each product, passing the product details as props.
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
// The component ensures that it always displays the correct products by updating the state whenever the URL parameter or categories map changes.
