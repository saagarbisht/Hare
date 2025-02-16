import React, { Suspense, lazy } from "react";
import Loader from "./components/Common/Loader";

import { Routes, Route, Navigate } from "react-router";
import UserLayout from './components/Layout/UserLayout';
import AdminLayout from './components/Layout/AdminLayout';
import AuthLayout from "./components/Layout/AuthLayout";
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const Profile = lazy(() => import("./pages/Profile"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const ProductDetails = lazy(() => import("./components/Products/ProductDetails"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<Suspense fallback={<Loader />}><HomePage /></Suspense>} />
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Navigate to={"login"} replace />} />
            <Route path="login" index element={<Suspense fallback={<Loader />}><LoginPage /></Suspense>} />
            <Route path="register" element={<Suspense fallback={<Loader />}><RegisterPage /></Suspense>} />
          </Route>
          <Route path="profile" element={<Suspense fallback={<Loader />}><Profile /></Suspense>} />
          <Route path="collections/:collection" element={<Suspense fallback={<Loader />}><CollectionPage /></Suspense>} />
          <Route path="product/:id" element={<Suspense fallback={<Loader />}><ProductDetails /></Suspense>} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

export default App;
