import React from 'react'
import Header from './HeaderComponent/Header'
import HeroCompo from './HeroCompo'
import ProductFashion from './ProductComponent/ProductFashion'
import ProductCategory from './ProductComponent/ProductCategory'
import ProductBrand from './ProductComponent/ProductBrand'
import ProductArrival from './ProductComponent/ProductArrival'
import ProductFlashSale from './ProductComponent/ProductFlashSale'
import ProductTopSelling from './ProductComponent/ProductTopSelling'
import ProductBestSeller from './ProductComponent/ProductBestSeller'
import ProductWeeklSale from './ProductComponent/ProductWeeklSale'
import Footer from './Footer'
import ProductBest from './ProductComponent/ProductBest'
import { useGetAllCategoriesQuery } from '../redux/slices/generalApi'
import { CategoryModal } from '../modals/categoryModal'





function Home() {





  return (
    <div>
      <Header></Header>
      <HeroCompo></HeroCompo>
      <ProductFashion></ProductFashion>
      <ProductCategory></ProductCategory>
      <ProductBrand></ProductBrand>
      <ProductArrival></ProductArrival>
      <ProductFlashSale></ProductFlashSale>
      <ProductTopSelling></ProductTopSelling>
      <ProductBestSeller></ProductBestSeller>
      <ProductWeeklSale></ProductWeeklSale>
      <ProductBest></ProductBest>
      <Footer></Footer>
    </div>
  )
}

export default Home