import styled from 'styled-components';
import Logo from "./../images/logo/NHOM6.png"

import ambush1 from "./../images/product/ambush1.jpg"
import aohoodie1 from "./../images/product/aohoodie1.jpg"
import aonguc from "./../images/product/ao-nguc.jpg"
import aogio from "./../images/product/Ao_Gio_Adicolor_Classics_DJen_GN2780_21_model.jpg"
import "./sanpham.css"

function Sanphammoi() {
    const sanphammoi = [
        {
            id: 1,
            token: "sanphammoi-1",
            name: "áo bloolyn",
            img: ambush1,
            price: 800000,
        },
        {
            id: 2,
            token: "sanphammoi-2",
            name: "hoodie adidas",
            img: aohoodie1,
            price: 900000,
        },
        {
            id: 3,
            token: "sanphammoi-3",
            name: "áo khoác adidas",
            img: aogio,
            price: 1000000,
        },
        {
            id: 4,
            token: "sanphammoi-4",
            name: "đồ gym",
            img: aonguc,
            price: 500000,
        },
    ];
    const renderProduct = () => {
        return sanphammoi.map((item, i) => {
            return (<div className="col-lg-3 col-md-6 col-sm-12 mb-20">
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
                                            <input type="radio" className="variant-1" id={`swatch-sanphamoi-${item.id}-1`} name="mau"
                                                value="S" />
                                            <label for={`swatch-sanphamoi-${item.id}-1`} className="sd"><span>38</span></label>
                                        </div>
                                        <div className="swatch-element" data-value="39">
                                            <input type="radio" className="variant-1" id={`swatch-sanphamoi-${item.id}-2`} name="mau"
                                                value="M" />
                                            <label for={`swatch-sanphamoi-${item.id}-2`} className="sd"><span>39</span></label>
                                        </div>
                                        <div className="swatch-element" data-value="40">
                                            <input type="radio" className="variant-1" id={`swatch-sanphamoi-${item.id}-3`} name="mau"
                                                value="L" />
                                            <label for={`swatch-sanphamoi-${item.id}-3`} className="sd"><span>40</span></label>
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

            <div className="product__new">
                <h3 className="product__ne title-product">Sản phẩm mới</h3>
                <div className="row" id="listProductNew">
                    {renderProduct()}
                </div>

            </div>


        </div>
    );
}

export default Sanphammoi;
