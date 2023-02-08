import { useParams } from 'react-router-dom';
//import data from '../data';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
      {/* <div className="product-page">
        {data.products.map((product) => (
          <div className=""></div>
        ))}
      </div> */}
    </div>
  );
}

export default ProductScreen;
