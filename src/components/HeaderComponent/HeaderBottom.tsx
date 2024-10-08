import React, { useState } from 'react'
import { tooglmenu } from '../../functions/HelperFunctions'
import { Link } from 'react-router-dom'
import { generalApi, useAddCategoryMutation, useDeleteCategoryMutation, useGetAllCategoriesQuery, useGetCategoryByIdQuery, useUpdateCategoryMutation } from '../../redux/slices/generalApi';

import { memo } from 'react'
import { CategoryModal } from '../../modals/categoryModal';
import { ApiResponse } from '../../modals/apiModal';
import { skipToken } from '@reduxjs/toolkit/query';
import { Button } from '@mui/material';

function HeaderBottom() {
    const role = "admin"
    const { data: categories, error: categoriesError, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery();


    const [addCategory, { isSuccess, isError }] = useAddCategoryMutation();
    const [updateCategory, { isSuccess: updateSucces, isError: updateError }] = useUpdateCategoryMutation();
    const [deleteCategory, { isSuccess: deleteSucces, isError: deleteError }] = useDeleteCategoryMutation();
    const [categoryId, setCategoryId] = useState('3fa85f64-5717-4562-b3fc-2c963f66afa3');
    // const { data: categorie, error: categoryError, isLoading: isCategoryLoading } = useGetCategoryByIdQuery(categoryId);

    const findupdatedcat = categories?.data?.find(ct => ct.id === categoryId);
    const handleAddCategory = async () => {
        try {
            const result = await addCategory({
                id: categoryId, // Rastgele ID üretebilirsin
                name: 'nbr',
                status: true,
                description: 'okk tüyak.',
                products: [] // Products boş olabilir
            }).unwrap();
            console.log(result);
        } catch (error) {
            console.error('Kategori eklenirken bir hata oluştu:',);
        }
    };
    const handleUpdateCategory = async () => {
        try {
            if (findupdatedcat !== null && findupdatedcat !== undefined) {
                const updatedCategory: Partial<CategoryModal> = {
                    ...findupdatedcat,
                    description: 'tüyak adamdır',
                    name: 'emirii',
                };
                const result = await updateCategory(updatedCategory).unwrap();
                console.log(result);
            }
        } catch (error) {
            console.error('Kategori eklenirken bir hata oluştu:', error);
        }
    };
    const handleDeleteCategory = async () => {
        try {
            if (findupdatedcat !== null && findupdatedcat !== undefined) {
                const deletedCategory: Partial<CategoryModal> = {
                    ...findupdatedcat,
                };
                const result = await deleteCategory(deletedCategory).unwrap();
            }
        } catch (error) {
            console.error('Kategori eklenirken bir hata oluştu:', error);
        }
    };
    console.log(categories);


    // if (error) {
    //     console.log("buradayım");
    // }
    // if (isLoading) {
    //     console.log("loading");
    // }

    return (
        <>
            <div >
                <Button size='small' className='btn btn-outline-primary w-10 mx-2' onClick={handleAddCategory} variant="outlined" > {isSuccess ? 'Eklendi' : 'Ekle'}</Button>
                <Button size='small' className=' w-10 mx-2' onClick={handleUpdateCategory} variant="outlined" > {updateSucces ? 'Güncellendi' : 'Güncelle'}</Button>
                <Button size='small' className=' w-10 mx-2' onClick={handleDeleteCategory} variant="outlined" >  {deleteSucces ? 'Silindi' : 'Sil'}</Button>
            </div>



            <ul>
                {categories?.data?.map(category => (
                    <li key={category.id}> {/* Benzersiz key */}
                        <h3>{category.name}</h3>
                        <p>Status: {category.status ? 'Aktif' : 'Pasif'}</p>
                        <p>Description: {category.description}</p>
                    </li>
                ))}
            </ul>

            <div className="header-bottom d-lg-block d-none">
                <div className="container">
                    <div className="header-nav">
                        <div className="category-menu-section position-relative">
                            <div className="empty position-fixed" onClick={tooglmenu} />
                            <button className="dropdown-btn" onClick={tooglmenu}>
                                <span className="dropdown-icon">
                                    <svg width={14} height={9} viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width={14} height={1} />
                                        <rect y={8} width={14} height={1} />
                                        <rect y={4} width={10} height={1} />
                                    </svg>
                                </span>
                                <span className="list-text">
                                    All Categories
                                </span>
                            </button>
                            <div className="category-dropdown position-absolute" id="subMenu">
                                <ul className="category-list">
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item">
                                                <div className="dropdown-list-item">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/dresses.webp" alt="dress" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Dresses
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" fill="#1D1D1D" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" fill="#1D1D1D" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/bags.webp" alt="Bags" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Bags
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/sweaters.webp" alt="sweaters" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Sweaters
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/shoes.webp" alt="sweaters" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Boots
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/gift.webp" alt="gift" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Gifts
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/sneakers.webp" alt="sneakers" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Sneakers
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" fill="#1D1D1D" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" fill="#1D1D1D" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/watch.webp" alt="watch" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Watches
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/ring.webp" alt="ring" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Gold Ring
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/cap.webp" alt="cap" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Cap
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/glass.webp" alt="glass" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Sunglasses
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="category-list-item">
                                        <Link to={"/productsidebar"}>
                                            <div className="dropdown-item d-flex justify-content-between align-items-center">
                                                <div className="dropdown-list-item d-flex">
                                                    <span className="dropdown-img">
                                                        <img src="./assets/images/homepage-one/category-img/baby.webp" alt="baby" />
                                                    </span>
                                                    <span className="dropdown-text">
                                                        Baby Shop
                                                    </span>
                                                </div>
                                                <div className="drop-down-list-icon">
                                                    <span>
                                                        <svg width={6} height={9} viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <rect x="1.5" y="0.818359" width="5.78538" height="1.28564" transform="rotate(45 1.5 0.818359)" />
                                                            <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564" transform="rotate(135 5.58984 4.90918)" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header-nav-menu">
                            <ul className="menu-list">
                                <li>
                                    <Link to={"/"}>
                                        <span className="list-text">Home</span>
                                    </Link>
                                </li>
                                <li className="mega-menu">
                                    <Link to={"/productsidebar"}>
                                        <span className="list-text">Shop</span>
                                        <span>
                                            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_183)">
                                                    <path d="M2.37811 5.89491C1.88356 5.89491 1.38862 5.90351 0.894066 5.89218C0.443267 5.88202 0.108098 5.59451 0.0178597 5.17027C-0.0641747 4.7851 0.137786 4.36204 0.508895 4.20305C0.659291 4.13859 0.83586 4.11008 1.00071 4.10851C1.93786 4.09992 2.87539 4.10461 3.81254 4.10422C4.07075 4.10422 4.10357 4.07062 4.10396 3.80889C4.10474 2.85847 4.102 1.90843 4.10513 0.958001C4.10669 0.513061 4.336 0.177111 4.71218 0.0501527C5.30752 -0.151027 5.88567 0.278287 5.89387 0.937687C5.90168 1.56232 5.89582 2.18735 5.89582 2.81237C5.89582 3.14441 5.89504 3.47646 5.89621 3.80811C5.897 4.07023 5.92942 4.10422 6.18685 4.10422C7.13728 4.105 8.08732 4.10265 9.03774 4.10539C9.48503 4.10656 9.81941 4.33235 9.94872 4.70776C10.1534 5.30192 9.72605 5.88437 9.06782 5.89413C8.50803 5.90233 7.94825 5.89608 7.38846 5.89608C6.97829 5.89608 6.56851 5.89491 6.15833 5.89687C5.93918 5.89804 5.897 5.94023 5.8966 6.1625C5.89543 7.11918 5.89778 8.07625 5.89543 9.03293C5.89426 9.48216 5.67238 9.81577 5.29736 9.94741C4.70437 10.1552 4.11841 9.72983 4.10669 9.07316C4.09771 8.57861 4.10474 8.08367 4.10474 7.58912C4.10474 7.12035 4.10552 6.65197 4.10435 6.1832C4.10396 5.93398 4.06841 5.89726 3.82387 5.89687C3.34221 5.89569 2.86055 5.89647 2.37889 5.89647C2.37811 5.8953 2.37811 5.8953 2.37811 5.89491Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_185">
                                                        <rect width={10} height={10} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </Link>
                                    <div className="shop-menu">
                                        <div className="menu-wrapper">
                                            <div className="menu-list">
                                                <h5 className="menu-title">Dresses</h5>
                                                <ul>
                                                    <li><a href="product-sidebar.html">Shirt</a></li>
                                                    <li><a href="product-sidebar.html">Skart</a></li>
                                                    <li><a href="product-sidebar.html"> T-Shirt</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-list">
                                                <h5 className="menu-title">Bags</h5>
                                                <ul>
                                                    <li><a href="product-sidebar.html">HandBags</a></li>
                                                    <li><a href="product-sidebar.html">Mobile Bags</a></li>
                                                    <li><a href="product-sidebar.html">School Bags</a></li>
                                                </ul>
                                            </div>
                                            <div className="menu-list">
                                                <h5 className="menu-title">Cosmetics</h5>
                                                <ul>
                                                    <li><a href="product-sidebar.html">Liptics</a></li>
                                                    <li><a href="product-sidebar.html">Foundation</a></li>
                                                    <li><a href="product-sidebar.html"> Eye Liner</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="shop-menu-img">
                                            <img src="./assets/images/homepage-one/empty-wishlist.webp" alt="img" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="list-text">Pages</span>
                                        <span>
                                            <svg width={10} height={10} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_1_183)">
                                                    <path d="M2.37811 5.89491C1.88356 5.89491 1.38862 5.90351 0.894066 5.89218C0.443267 5.88202 0.108098 5.59451 0.0178597 5.17027C-0.0641747 4.7851 0.137786 4.36204 0.508895 4.20305C0.659291 4.13859 0.83586 4.11008 1.00071 4.10851C1.93786 4.09992 2.87539 4.10461 3.81254 4.10422C4.07075 4.10422 4.10357 4.07062 4.10396 3.80889C4.10474 2.85847 4.102 1.90843 4.10513 0.958001C4.10669 0.513061 4.336 0.177111 4.71218 0.0501527C5.30752 -0.151027 5.88567 0.278287 5.89387 0.937687C5.90168 1.56232 5.89582 2.18735 5.89582 2.81237C5.89582 3.14441 5.89504 3.47646 5.89621 3.80811C5.897 4.07023 5.92942 4.10422 6.18685 4.10422C7.13728 4.105 8.08732 4.10265 9.03774 4.10539C9.48503 4.10656 9.81941 4.33235 9.94872 4.70776C10.1534 5.30192 9.72605 5.88437 9.06782 5.89413C8.50803 5.90233 7.94825 5.89608 7.38846 5.89608C6.97829 5.89608 6.56851 5.89491 6.15833 5.89687C5.93918 5.89804 5.897 5.94023 5.8966 6.1625C5.89543 7.11918 5.89778 8.07625 5.89543 9.03293C5.89426 9.48216 5.67238 9.81577 5.29736 9.94741C4.70437 10.1552 4.11841 9.72983 4.10669 9.07316C4.09771 8.57861 4.10474 8.08367 4.10474 7.58912C4.10474 7.12035 4.10552 6.65197 4.10435 6.1832C4.10396 5.93398 4.06841 5.89726 3.82387 5.89687C3.34221 5.89569 2.86055 5.89647 2.37889 5.89647C2.37811 5.8953 2.37811 5.8953 2.37811 5.89491Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_18">
                                                        <rect width={10} height={10} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                    </a>
                                    <ul className="header-sub-menu">
                                        <li><Link to={"/productinfo"}>Product-details</Link></li>
                                        <li><a href="privacy.html">Privacy Policy</a></li>
                                        <li><a href="terms.html">Terms &amp; Condition</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><Link to={"/productsidebar"}>Shop Category Icon</Link></li>
                                        <li><Link to={"/productsidebar"}>Shop List View</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to={"/about"}>
                                        <span className="list-text">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/blogs"}>
                                        <span className="list-text">Blog</span>
                                    </Link>
                                    <ul className="header-sub-menu">
                                        <li><Link to={"/blogdetails"} >Blog-details</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to={"/user-profile"}>
                                        <span className="list-text">User Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contactus"}>
                                        <span className="list-text">Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header-vendor-btn">
                            <Link to={"/becomevendor"} className="shop-btn">
                                <span className="list-text shop-text">Became Vendor</span>
                                <span className="icon">
                                    <svg width={24} height={16} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.257 7.07205C20.038 7.07205 19.8474 7.07205 19.6563 7.07205C17.4825 7.07205 15.3086 7.07205 13.1352 7.07205C10.1545 7.07205 7.17336 7.0725 4.19265 7.0725C3.30392 7.0725 2.41519 7.07024 1.52646 7.07295C1.12124 7.07431 0.809811 7.25265 0.625785 7.62651C0.43866 8.00623 0.488204 8.37556 0.737704 8.70426C0.932347 8.96027 1.20529 9.08173 1.52867 9.08037C2.20948 9.07766 2.8903 9.07902 3.57111 9.07902C5.95285 9.07902 8.33415 9.07902 10.7159 9.07902C13.782 9.07902 16.8485 9.07902 19.9146 9.07902C20.0274 9.07902 20.1398 9.07902 20.2822 9.07902C20.1871 9.18332 20.1141 9.26865 20.0358 9.34857C19.5656 9.82672 19.0922 10.3022 18.6229 10.7812C18.1363 11.2779 17.6541 11.7791 17.1675 12.2757C16.4942 12.9634 15.8116 13.6415 15.1476 14.3391C14.9096 14.5893 14.8455 14.9157 14.9406 15.2575C15.156 16.0305 16.0567 16.2499 16.6119 15.6769C17.4342 14.8286 18.2655 13.9892 19.0927 13.1458C19.6948 12.5317 20.2968 11.9172 20.8985 11.3023C21.5952 10.5902 22.2911 9.87729 22.9878 9.1648C23.1059 9.04425 23.2249 8.9246 23.3435 8.8045C23.6903 8.45367 23.7239 7.84278 23.3943 7.4766C22.998 7.03683 22.5852 6.61241 22.1756 6.18573C21.7965 5.79066 21.4134 5.39965 21.0303 5.00909C20.6733 4.64473 20.3132 4.28306 19.9553 3.91915C19.6147 3.57284 19.2754 3.22563 18.9356 2.87887C18.5154 2.44948 18.0951 2.01964 17.6744 1.5907C17.2511 1.15861 16.8198 0.734188 16.4057 0.29261C16.0363 -0.101559 15.3697 -0.0816927 15.0344 0.257392C14.6238 0.672782 14.5999 1.26381 14.995 1.68552C15.3378 2.0517 15.6957 2.40342 16.0465 2.76192C16.929 3.66449 17.8111 4.56797 18.6937 5.47054C19.1829 5.97081 19.6735 6.47018 20.1632 6.97046C20.1885 6.99574 20.2123 7.02329 20.257 7.07205Z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default HeaderBottom
