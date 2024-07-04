import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
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
