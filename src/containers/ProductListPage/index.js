
import { useLocation, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';

const ProductListPage = (props) => {

    let location = useLocation();
    let urlParams = useParams();

    const renderProduct = () => {
        const params = getParams(location.search);
        console.log(params);
        let content = null;
        switch (params.type) {
            case 'store':
                content = <ProductStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content = null;
        }
        console.log({content})
        return content;
    }
    return (
        <Layout>
            {renderProduct()}
        </Layout>

    )

}

export default ProductListPage;