import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from './components/SpinnerFullPage'
// ================ pages
// import Homepage from './pages/Homepage';
// import Pricing from './pages/Pricing';
// import Product from './pages/Product';
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// import  from ''

// dist/index.html                   0.51 kB │ gzip:   0.33 kB
// dist/assets/index-D51nla2L.css   29.89 kB │ gzip:   5.05 kB
// dist/assets/index-CiZBM71M.js   508.94 kB │ gzip: 148.72 kB

//================== after bundle optimaize
const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
//================== after bundle optimaize
// dist/index.html                      
//      0.51 kB │ gzip:   0.33 kB       
// dist/assets/Logo-C5FiXW-Q.css        
//      0.03 kB │ gzip:   0.05 kB       
// dist/assets/Login-BBiTewd0.css       
//      0.33 kB │ gzip:   0.21 kB       
// dist/assets/Product-DfpMerv2.css     
//      0.44 kB │ gzip:   0.26 kB       
// dist/assets/Homepage-D-ggyy2o.css    
//      0.47 kB │ gzip:   0.29 kB       
// dist/assets/PageNav-DEaVLmCH.css     
//      0.51 kB │ gzip:   0.28 kB       
// dist/assets/AppLayout-CYrbckfg.css   
//      1.89 kB │ gzip:   0.69 kB       
// dist/assets/index-o85oF702.css       
//     26.34 kB │ gzip:   4.41 kB       
// dist/assets/Product.module-D-NdWOO5.js    0.06 kB │ gzip:   0.07 kB       
// dist/assets/Logo-CuIKyiRm.js         
//      0.21 kB │ gzip:   0.19 kB       
// dist/assets/PageNotFound-CY745hd_.js 
//      0.23 kB │ gzip:   0.20 kB       
// dist/assets/PageNav-Dui7Af70.js      
//      0.46 kB │ gzip:   0.26 kB       
// dist/assets/Pricing-CwCWdnLk.js      
//      0.65 kB │ gzip:   0.42 kB       
//      1.02 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-2nAjs8Qj.js       156.91 kB │ gzip:  46.21 kB
// dist/assets/index-DJIGDQrz.js           350.38 kB │ gzip: 102.22 kB


function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            {/*or <Route index element={<Homepage/>}></Route> */}
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="*" element={<PageNotFound />} />

            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              {/* Nested Routes */}
              {/* index Route default  child Route*/}
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>

            <Route path="login" element={<Login />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
