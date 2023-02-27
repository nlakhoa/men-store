import styled from 'styled-components';
import Logo from "./../images/logo/NHOM6.png"

import addidas1 from "./../images/product/addidas1.jpg"


function Sanphamphobien() {
    const sanphamphobien = [
        {
            id: 1,
            token: "sanphamphobien-1",
            name: "JOMA SUPER REGATE",
            img: addidas1,
            price: 1000000,
            des: `Phần trên được sản
        xuất bằng cách sử
        dụng sợi nhỏ, nylon và TPU chèn trên nylon để bảo vệ chống nứt nẻ
        . Joma Super Regate bao gồm công nghệ BẢO VỆ ở cổ chân để tăng cường sức đề kháng
        và sự ổn định cho đòn đánh. Joma Super Regate có hệ thống thông gió VTS cho phép thở
        và
        luồng không khí lớn hơn bên trong giày.
        Đế lót EVA định hình sẵn có thể điều chỉnh theo hình dạng của bàn chân.
        Đế được sản xuất bằng EVA tự nhiên góp phần tạo đệm cho giày bằng cách
        hấp thụ tác động từ bàn chân.`,
        },
        {
            id: 2,
            token: "sanphamphobien-2",
            name: "ADIDAS STAN SMITH",
            img: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/346234afc6624c3cab59ab7300cc9c57_9366/Giay_Stan_Smith_trang_FU9609_01_standard.jpg",
            price: 900000,
            des: `
        Đúng chất kinh điển.
        Trước đây, Stan Smith từng là ngôi sao lớn của làng quần vợt.
        Mang đôi giày adidas xứng tầm tên tuổi của ông, bạn sẽ là ngôi sao đường phố.
        Từ trên xuống dưới, đôi giày kinh điển này bắt trọn tinh hoa phong cách của kiểu
        dáng nguyên bản năm
        1971,
        với thiết kế bằng da tối giản và đường nét gọn gàng.
        `,
        },
    ];
    const renderProduct = () => {
        return sanphamphobien.map((item, i) => {
            return (<div className="col-lg-6 col-sm-12 mb-20">
                <div className="card" style={{ width: "100%" }}>
                    <div>
                        <img className="card-img-top" src={item.img} alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Joma Super Regate</h4>
                            <p className="card-text custom__name-product" style={{ fontWeight: "400" }}>{item.des}</p>
                            <div title="GIÀY ADIDAS 4D FUTURECRAFT"
                                className="btn btn-buynow" >Xem ngay <i className="fas fa-arrow-right"
                                    style={{ fontSize: "16px", marginLeft: "5px" }}></i></div>
                        </div>
                    </div>
                </div>
            </div>)
        })
    }

    return (
        <div>
            <div className="product">
                <div className="container">
                    <div className="product_popular">
                        <h3 className="product__popular title-product">Sản phẩm phổ biến</h3>
                        <div className="row" id="spphobien">
                            {renderProduct()}
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    );
}

export default Sanphamphobien;
