import styled from 'styled-components';
import Logo from "./../../images/logo/NHOM6.png"

import vaymidi1 from "./../../images/product/vaymidi1.jpg"
import "./sanpham.css"

function Sanphamhot() {
    const sanphamhot = [
        {
            id: 1,
            token: "sanphamhot-1",
            name: "Giày giả váy",
            img: vaymidi1,
            price: 900000,
        },
        {
            id: 2,
            token: "sanphamhot-2",
            name: "giày ultra",
            img: vaymidi1,
            price: 1000000,
        },
        {
            id: 3,
            token: "sanphamhot-3",
            name: "balo",
            img: vaymidi1,
            price: 800000,
        },
        {
            id: 4,
            token: "sanphamhot-4",
            name: "túi chéo",
            img: vaymidi1,
            price: 600000,
        },
    ];
    const renderProduct = () => {
        return sanphamhot.map((item, i) => {
            return (<div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                <div className="product__new-item">
                    <div className="card" style={{ width: "100%" }}>
                        <div>
                            <img className="card-img-top" src={item.img} alt="Card image cap" />

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
                                            <input type="radio" className="variant-1" id={`swatch-sanphamhot-${item.id}-1`} name="mau"
                                                value="S" />
                                            <label for={`swatch-sanphamhot-${item.id}-1`} className="sd"><span>38</span></label>
                                        </div>
                                        <div className="swatch-element" data-value="39">
                                            <input type="radio" className="variant-1" id={`swatch-sanphamhot-${item.id}-2`} name="mau"
                                                value="M" />
                                            <label for={`swatch-sanphamhot-${item.id}-2`} className="sd"><span>39</span></label>
                                        </div>
                                        <div className="swatch-element" data-value="40">
                                            <input type="radio" className="variant-1" id={`swatch-sanphamhot-${item.id}-3`} name="mau"
                                                value="L" />
                                            <label for={`swatch-sanphamhot-${item.id}-3`} className="sd"><span>40</span></label>
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

    return (
        <div>
            <div className="product__sale">
                <h3 className="product__sale title-product">Top sản phẩm hot</h3>
                <div className="row" id="listProductSale">
                    {renderProduct()}
                </div>
            </div>


        </div>
    );
}

export default Sanphamhot;
