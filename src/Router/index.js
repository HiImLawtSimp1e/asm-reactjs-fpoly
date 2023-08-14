import { Routes, Route } from 'react-router-dom';

import CartController from '../Controller/cartController';
import ContactController from '../Controller/contactController';
import HomeController from '../Controller/homeController';
import ManagerController from '../Controller/managerController';
import DetailsController from '../Controller/detailsController';
import AboutController from '../Controller/aboutController';
import ServicesController from '../Controller/servicesController';
import ShopSearchController from '../Controller/shopSearchController';
import ProductController from '../Controller/productController';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomeController />} />
            <Route path="/shop" element={<ProductController />} />
            <Route path="/shop/:param" element={<ShopSearchController />} />
            <Route path="/contact" element={<ContactController />} />
            <Route path="/cart" element={<CartController />} />
            <Route path="/manager" element={<ManagerController />} />
            <Route path="/about" element={<AboutController />} />
            <Route path="/service" element={<ServicesController />} />
            <Route path="/detail/:id" element={<DetailsController />} />
        </Routes>
    )
}

export default Router;