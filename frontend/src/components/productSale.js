import styled from 'styled-components';

import imgGiay from "./../images/product/g10.jpg"
import imgAo from "./../images/product/aohoodie1.jpg"
import imgQuan from "./../images/product/q2.jpg"
import { useEffect, useState } from 'react';

function ProductSale() {
    const [localPath, setLocalPath] = useState()
    useEffect(() => {
        async function fetchData() {
            console.log(window.location.pathname);
            setLocalPath(window.location.pathname)
        }
        // console.log(contractStakingETH, account);
        fetchData();
    }, [window.location.pathname]);

    const giaySale = [
        {
            id: 1,
            token: "giay-1",
            name: "Giày Cổ Thấp Forum",
            img: imgGiay,
            price: 600000,
        },

        {
            id: 2,
            token: "giay-2",
            name: "Giày NMD_R1",
            img: imgGiay,
            price: 900000,
        },
        {
            id: 3,
            token: "giay-3",
            name: "Giày Cổ Thấp Forum",
            img: imgGiay,
            price: 800000,
        },
        {
            id: 4,
            token: "giay-4",
            name: "Giày UltraBoost 22",
            img: imgGiay,
            price: 600000,
        },
        {
            id: 5,
            token: "giay-5",
            name: "Giày Forum Exhibit Low",
            img: imgGiay,
            price: 700000,
        },
        {
            id: 6,
            token: "giay-6",
            name: "Giày Forum Exhibit Low",
            img: imgGiay,
            price: 800000,
        },

        {
            id: 7,
            token: "giay-7",
            name: "Giày mule Stan Smith",
            img: imgGiay,
            price: 900000,
        }]
    const aoSale = [
        {
            id: 1,
            token: "ao-1",
            name: "Áo gió Adicolor",
            img: imgAo,
            price: 700000,
        },

        {
            id: 2,
            token: "ao-2",
            name: "Áo Runner 2",
            img: imgAo,
            price: 800000,
        },
        {
            id: 3,
            token: "ao-3",
            name: "Áo Runner 3",
            img: imgAo,
            price: 900000,
        },
        {
            id: 4,
            token: "ao-4",
            name: "Áo Runner 4",
            img: imgAo,
            price: 700000,
        },
        {
            id: 5,
            token: "ao-5",
            name: "Ambush",
            img: imgAo,
            price: 900000,
        },
        {
            id: 6,
            token: "ao-6",
            name: "Áo Runner 1",
            img: imgAo,
            price: 800000,
        },
        {
            id: 7,
            token: "ao-7",
            name: "Áo khoác Street",
            img: imgAo,
            price: 600000,
        },
        {
            id: 8,
            token: "ao-8",
            name: "Áo Hoodie",
            img: imgAo,
            price: 900000,
        }
    ];

    const quanSale = [
        {
            id: 1,
            token: "quan-1",
            name: "Quần gió Adicolor",
            img: imgQuan,
            price: 800000,
        },

        {
            id: 2,
            token: "quan-2",
            name: "Quần Runner 2",
            img: imgQuan,
            price: 900000,
        },
        {
            id: 3,
            token: "quan-3",
            name: "Quần Runner 3",
            img: imgQuan,
            price: 600000,
        },

        {
            id: 4,
            token: "quan-4",
            name: "Quần Runner 4",
            img: imgQuan,
            price: 1000000,
        },
        {
            id: 5,
            token: "quan-5",
            name: "Quần Runner 4",
            img: imgQuan,
            price: 700000,
        },
        {
            id: 6,
            token: "quan-6",
            name: "Ambush",
            img: imgQuan,
            price: 600000,
        },

        {
            id: 7,
            token: "quan-7",
            name: "Quần Runner 1",
            img: imgQuan,
            price: 900000,
        },
        {
            id: 8,
            token: "quan-8",
            name: "Quần khoác Street",
            img: imgQuan,
            price: 800000,
        }
    ];

    const renderProductSale = () => {
        console.log('localPath', localPath)
        if (localPath == '/ao') {
            return aoSale.map((item, i) => {
                return (<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                <div className="product__new-item">
                    <div className="card" style={{ width: "100%" }}>
                        <div>
                            <img className="card-img-top" src={item.img} alt={item.img} />

                        </div>
                        <div className="card-body">
                            <h5 className="card-title custom__name-product">
                                {item.name}
                            </h5>
                            <div className="product__price">
                                <p className="card-text price-color product__price-old">
                                    {item.price + 200000}
                                    đ</p>
                                <p className="card-text price-color product__price-new">

                                    {item.price}
                                </p>
                            </div>
                            <div className="home-product-item__action">

                                <div className="product__size d-flex" style={{ alignItems: "center" }}>
                                    <div className="title" style={{ fontSize: "16px", marginRight: "10px" }}>
                                        Kích thước:
                                    </div>
                                    <div className="select-swap">
                                        <div className="swatch-element" data-value="38" >
                                            <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-1`} name="mau"
                                                value="S" />
                                            <label for={`swatch-giay-${item.id}-1`} className="sd"><span>38</span></label>
                                        </div>
                                        <div className="swatch-element" data-value="39">
                                            <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-2`} name="mau"
                                                value="M" />
                                            <label for={`swatch-giay-${item.id}-2`} className="sd"><span>39</span></label>
                                        </div>
                                        <div className="swatch-element" data-value="40">
                                            <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-3`} name="mau"
                                                value="L" />
                                            <label for={`swatch-giay-${item.id}-3`} className="sd"><span>40</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__wrap">
                                <div className="product__amount w-100">
                                    <div className="product__wap-change d-flex justify-content-center">
                                        <p for="" className="soluong">Nhập số lượng: </p>
                                        <input type="text" value="1" className="text-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="product__shopnow">
                                <button className="shopnow2" >Mua ngay</button>
                            </div>
                        </div>
                        <div className="sale-off">
                            <span className="sale-off-percent">20%</span>
                            <span className="sale-off-label">GIẢM</span>
                        </div>
                    </div>
                </div>
            </div>)
            })
        }
        else if (localPath == '/quan') {
            return quanSale.map((item, i) => {
                return (<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                    <div className="product__Sale-item">
                        <div className="card" style={{ width: "100%" }}>
                            <div>
                                <img className="card-img-top" src={item.img} alt={item.img} />

                            </div>
                            <div className="card-body">
                                <h5 className="card-title custom__name-product">
                                    {item.name}
                                </h5>
                                <div className="product__price">
                                    <p className="card-text price-color product__price-old">
                                        {item.price + 200000}
                                        đ</p>
                                    <p className="card-text price-color product__price-Sale">

                                        {item.price}
                                    </p>
                                </div>
                                <div className="home-product-item__action">

                                    <div className="product__size d-flex" style={{ alignItems: "center" }}>
                                        <div className="title" style={{ fontSize: "16px", marginRight: "10px" }}>
                                            Kích thước:
                                        </div>
                                        <div className="select-swap">
                                            <div className="swatch-element" data-value="38" >
                                                <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-1`} name="mau"
                                                    value="S" />
                                                <label for={`swatch-giay-${item.id}-1`} className="sd"><span>38</span></label>
                                            </div>
                                            <div className="swatch-element" data-value="39">
                                                <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-2`} name="mau"
                                                    value="M" />
                                                <label for={`swatch-giay-${item.id}-2`} className="sd"><span>39</span></label>
                                            </div>
                                            <div className="swatch-element" data-value="40">
                                                <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-3`} name="mau"
                                                    value="L" />
                                                <label for={`swatch-giay-${item.id}-3`} className="sd"><span>40</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrap">
                                    <div className="product__amount w-100">
                                        <div className="product__wap-change d-flex justify-content-center">
                                            <p for="" className="soluong">Nhập số lượng: </p>
                                            <input type="text" value="1" className="text-input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="product__shopnow">
                                    <button className="shopnow2" >Mua ngay</button>
                                </div>
                            </div>
                            <div className="sale-off">
                                <span className="sale-off-percent">20%</span>
                                <span className="sale-off-label">GIẢM</span>
                            </div>
                        </div>
                    </div>
                </div>)
            })
        }
        else {
            return giaySale.map((item, i) => {
                return (<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                    <div className="product__Sale-item">
                        <div className="card" style={{ width: "100%" }}>
                            <div>
                                <img className="card-img-top" src={item.img} alt={item.img} />

                            </div>
                            <div className="card-body">
                                <h5 className="card-title custom__name-product">
                                    {item.name}
                                </h5>
                                <div className="product__price">
                                    <p className="card-text price-color product__price-old">
                                        {item.price + 200000}
                                        đ</p>
                                    <p className="card-text price-color product__price-Sale">

                                        {item.price}
                                    </p>
                                </div>
                                <div className="home-product-item__action">

                                    <div className="product__size d-flex" style={{ alignItems: "center" }}>
                                        <div className="title" style={{ fontSize: "16px", marginRight: "10px" }}>
                                            Kích thước:
                                        </div>
                                        <div className="select-swap">
                                            <div className="swatch-element" data-value="38" >
                                                <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-1`} name="mau"
                                                    value="S" />
                                                <label for={`swatch-giay-${item.id}-1`} className="sd"><span>38</span></label>
                                            </div>
                                            <div className="swatch-element" data-value="39">
                                                <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-2`} name="mau"
                                                    value="M" />
                                                <label for={`swatch-giay-${item.id}-2`} className="sd"><span>39</span></label>
                                            </div>
                                            <div className="swatch-element" data-value="40">
                                                <input type="radio" className="variant-1" id={`swatch-giay-${item.id}-3`} name="mau"
                                                    value="L" />
                                                <label for={`swatch-giay-${item.id}-3`} className="sd"><span>40</span></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product__wrap">
                                    <div className="product__amount w-100">
                                        <div className="product__wap-change d-flex justify-content-center">
                                            <p for="" className="soluong">Nhập số lượng: </p>
                                            <input type="text" value="1" className="text-input" />
                                        </div>
                                    </div>
                                </div>
                                <div className="product__shopnow">
                                    <button className="shopnow2" >Mua ngay</button>
                                </div>
                            </div>
                            <div className="sale-off">
                                <span className="sale-off-percent">20%</span>
                                <span className="sale-off-label">GIẢM</span>
                            </div>
                        </div>
                    </div>
                </div>)
            })
        }

    }

    return (
        <div className="product__Sale">
            <h3 className="product__ne title-product1"><ins>Sản phẩm bán chạy</ins></h3>
            <div className="row" id="quanmoive">
                {renderProductSale()}
            </div>
        </div>
    );
}

export default ProductSale;
