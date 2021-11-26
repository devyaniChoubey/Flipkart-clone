
import { useLocation, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';
import ClothingAndAccessories from './ClothingAndAccessories'

const ProductListPage = (props) => {

    let location = useLocation();
    let urlParams = useParams();
    let { slug } = useParams();

    const renderProduct = () => {
        const params = getParams(location.search);
        
        
        let content = null;
        switch (params.type) {
            case 'store':
                content = <ProductStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content = <ClothingAndAccessories/>;
        }

        if((slug === 'bannerClicked' || slug === 'productClicked') && params.type === 'page'){
            content = <ClothingAndAccessories/>;
        }
        return content;
    }
    return (
        <Layout>
            {renderProduct()}
        </Layout>

    )

}

export default ProductListPage;