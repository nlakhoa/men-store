import styled from 'styled-components';

const StyledHeader = styled.div`.header {
    background-color: var(--white-color);
    /* height: var(--header-height); */
    border-bottom: 1px solid #eee;
    /* position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999; */
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
}

.top-link {
    border-bottom: 1px solid #333;
    padding: 5px 0;
}

.social_link {
    display: flex;
    align-items: center;
}

.social-title {
    font-size: 13px;
    margin-right: 10px;
    text-align: center;
    align-items: center;
    font-weight: 500;
}

.login_link {}

.header_link {
    list-style: none;
    display: flex;
    font-size: 13px;
    font-weight: 500;
    vertical-align: middle;
    color: var(--black-color);
}

.header_link li a {
    text-decoration: none;
    color: #000;
}

.header_link li a:hover {
    color: var(--hover-color);
}

.input-search {
    border: 2px solid var(--black-color) !important;
    border-top-left-radius: 3px !important;
    border-bottom-left-radius: 3px !important;

}

.input-search:focus-visible {
    outline: none !important;
}

.search-btn {
    border: 2px solid var(--black-color) !important;
    background-color: var(--black-color) !important;
    border-top-right-radius: 3px !important;
    border-bottom-right-radius: 3px !important;
}

.nav__first {
    padding: 5px 0;
}

.nav-item__first {
    display: flex;
}


.nav-item__first-user {
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.nav-item__first-user:hover .nav-item__first-menu {
    display: block;
}

.nav-item__first-img {
    margin-left: 8px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-item__first-name {
    margin-left: 8px;
    font-size: 1.4rem;
    font-weight: 400;
}

.nav-item__first-menu {
    position: absolute;
    display: none;
    padding-left: 0;
    top: calc(100% + 4px);
    right: 0;
    width: 160px;
    border-radius: 1px;
    background-color: var(--black-color);
    list-style: none;
    z-index: 9;
    box-shadow: 0 2px 4px #e0e0e0;
}

.nav-item__first-menu::before {
    content: "";
    border-width: 17px 23px;
    border-style: solid;
    border-color: transparent transparent var(--black-color) transparent;
    position: absolute;
    right: 0px;
    top: -26px;
}

.nav-item__first-menu::after {
    content: "";
    display: block;
    position: absolute;
    top: -8px;
    right: 0;
    width: 65%;
    height: 8px;
    /* background-color: var(--hover-color); */
}

.nav-item__first-item a {
    text-decoration: none;
    color: var(--white-color);
    font-size: 1.4rem;
    display: block;
    padding: 4px 16px;
}

.nav-item__first-item a:first-child {
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
}

.nav-item__first-item a:first-child {
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
}

.nav-item__first-item a:hover {
    /* background-color: #fafafa; */
    color: var(--hover-color);
}

.fi-rs-bell {
    margin-top: 1px;
    margin-right: -10px;
    font-size: 12px;
}

.nav-link__first {
    color: var(--black-color);
    font-weight: 500;
    font-size: 12px;
    padding: 0 20px;
}

.nav-link__first:hover {
    color: var(--black-color);
}

.nav-link__first--separate {
    border-right: 2px solid var(--black-color);
}

.header__second {
    height: 120px;
    display: flex;
    align-items: center;
    margin-top: -10px;
}

.header__second__logo {
    margin-right: 40px;
}

.header__second__logo--img {
    margin-left: 50px;
}

.header__second__search {
    height: 50px;
    background-color: var(--white-color);
    border-radius: 2px;
    flex: 1;
    /* border: 1px solid #ddd; */
    margin-left: 66px;
    box-shadow: 1px 1px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
}

.header__second__search--input-wrap {
    flex: 1;
    position: relative;
}

.header__second__search-history {
    position: absolute;
    top: 210%;
    left: 0;
    width: calc(100% - 20px);
    background-color: var(--white-color);
    border-radius: 2px;
    box-shadow: 0 1px 5px #999;
    display: none;
    z-index: 9;
}

.header__second__search-history-heading {
    margin: 8px 14px;
    font-size: 1.4rem;
    color: #999;
    font-weight: 400;
}

.header__second__search-history-list {
    padding-left: 0;
    list-style: none;
    margin: 6px 0 0;
}

.header__second__search-history-item {
    height: 38px;
    padding: 0 12px;
}

.header__second__search-history-item:last-child {
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}

.header__second__search-history-item:hover {
    background-color: #fafafa;
}

.header__second__search-history-item a {
    text-decoration: none;
    font-size: 1.6rem;
    color: var(--text-color);
}

.header__second__search--input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.4rem;
    color: var(--text-color);
    padding: 0 16px;
}

.header__second__search--input:focus~.header__second__search-history {
    display: block;
}

.header__second__search--btn {
    background-color: var(--black-color);
    border: none;
    height: 38px;
    border-radius: 3px;
    padding: 10px 20px;
    margin-right: 4px;

}

.header__second__search--btn:hover {
    background-color: rgba(0, 0, 0, 0.7);
}

.header__second__search--btn-icon {
    font-size: 1.6rem;
    color: var(--white-color);
}

.header__second__cart {
    width: 100px;
    text-align: center;
}

.header__second__like {
    width: 100px;
    text-align: center;
    margin-left: 60px;
}

.header__second__cart--icon {
    font-size: 24px;
    color: var(--black-color);
    margin-right: 20px;
    position: relative;
}

.header__second__like--icon {
    font-size: 24px;
    color: var(--black-color);
    margin-left: 10px;
    position: relative;
}

.header__second__cart--icon:hover,
.header__second__like--icon:hover {
    text-decoration: none;
    color: var(--hover-color);
    /* background-color: var(--hover-color); */
    border-radius: 50%;
    padding: 3px 4px 3px 4px;
}

.header__second__like--notice {
    position: absolute;
    background-color: #d9121f;
    color: var(--white-color);
    padding: 1px 6px;
    font-size: 10px;
    border-radius: 50%;
    top: -3px;
    right: -7px;
}

.header__second__cart--notice {
    position: absolute;
    background-color: #d9121f;
    color: var(--white-color);
    padding: 1px 6px;
    font-size: 10px;
    border-radius: 50%;
    top: -3px;
    right: -7px;
}

.item-car {
    float: right;
    margin-left: 55px;
}

.item-like {
    float: right;
}

.header_nav {
    padding: 8px 0;
}

.header_nav-list {
    position: relative;
}

.header_nav-list-item {
    display: inline-block;
    margin: 0 5px;
    float: none;
}

.header_nav-list-item>a {
    padding: 8px 15px;
    color: var(--black-color);
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
}

.header_nav-list-item>a:hover {
    color: var(--hover-color);
}

/* .dropdown:hover {
    background-color: red;
} */
.mega-content {
    display: none;
    background: #fff none repeat scroll 0 0;
    text-align: left;
    margin: 0;
    padding: 10px;
    position: absolute;
    top: 24px;
    left: 0;
    z-index: 99;
    width: 100%;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
    max-height: 600px;
    overflow-y: auto;
}

.has-mega:hover>.mega-content {
    display: block;
    opacity: 1;
    visibility: visible;
    animation: growDown 500ms ease-in-out forwards;
    transform-origin: top center
}

@keyframes growDown {
    0% {
        transform: scaleY(0)
    }

    80% {
        transform: scaleY(1.1)
    }

    100% {
        transform: scaleY(1)
    }
}

.level0 {
    display: flex;
    flex-wrap: wrap;
}

.level1 {
    text-align: left;
    padding: 10px;
    list-style: none;
}

.hmega {
    color: var(--black-color) !important;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    display: inline-block;
    font-size: 13px;

}

.hmega:hover {
    color: var(--hover-color) !important;
    text-decoration: none;
    cursor: pointer;
}

ul .level1 {
    margin-bottom: 15px;
}

ul .level1 li a {
    text-transform: none !important;
    color: #666;
    font-size: 15px;
    line-height: 1.8;
    text-decoration: none !important;
}

ul .level1 li a:hover {
    color: var(--hover-color);
    border-bottom: 1px solid var(--hover-color);
}

#trigger-mobile {
    font-size: 30px;
    float: left;
    display: none;
    text-align: left;
    margin-top: 7px;
    margin-right: 5px;
    margin-bottom: 8px;
    cursor: pointer;
}

.mobile_cart {
    display: none;
}

.mobile-main-menu {
    height: 100%;
    overflow-y: auto;
    width: 290px;
    position: fixed;
    background-color: #fff;
    z-index: 999999 !important;
    top: 0 !important;
    left: 0 !important;
    transition: transform 0.8s;
    transform: translateX(-290px);
}

.xyz {
    transform: translateX(0);
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    cursor: pointer;
}

.drawer-header {
    background-color: #000;

}

.drawer-header a {
    text-decoration: none;
    color: #fff;
}

.drawer-header--auth {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 16px;
    margin-top: 0;
    padding: 15px 0;
}

._object {
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 50%;
    overflow: hidden;
}

._object img {
    border: 0 none;
    max-width: 100%;
    height: auto;
}

._body {
    font-size: 12px;
}

.ul-first-menu {
    flex: 1 1 auto;
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    padding-top: 8px;
    padding-bottom: 8px;
}

.ul-first-menu li {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;

}

.ul-first-menu li a {
    display: block;
    padding: 5px 10px;
    color: #000;
    width: 100%;
    line-height: 1.3;
    font-size: 14px;
    text-decoration: none;
}

.la-scroll-fix-infor-user {
    overflow: auto;
}

.la-title-nav-items {
    padding: 10px;
    color: #757575;
    font-size: 14px;
    text-transform: uppercase;
    padding-bottom: 0;
}

.la-nav-list-items {
    height: 55vh;
    position: relative;
    background: #fff;
    overflow-y: auto;
    padding: 0;
}

.ng-scope {
    width: 100%;
    float: left;
    padding: 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
    position: relative;
    overflow: hidden;
}

.ng-scope a {
    display: block;
    color: #444;
    font-size: 14px;
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-right: 20px;
    position: relative;
    text-decoration: none;
}

.ng-scope a i {
    padding: 3px 0;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
    height: 25px;
    width: 25px;
    line-height: 25px;
    color: #333;
    text-align: center;
}

.ul-has-child1 {
    display: none;
    padding-left: 10px;
}

.hidden {
    display: none;
}

.ng-has-child2 {
    border: none;
    width: 100%;
    float: left;
    padding: 0px;
    position: relative;
    overflow: hidden;
}

.ul-has-child2 {
    padding-left: 20px;
    /* display: none; */
}

.ul-has-child2 li {
    border: none;
}

.mobile-support {
    padding: 10px;
}

.mobile-support li {
    display: table;
    font-size: 16px;
}

.mobile-support li a:hover {
    color: var(--hover-color);
}

.mobile-support li a {
    color: #000;
}

.mobile-support li i {
    display: table-cell;
    width: 20px;
}

.drawer-text-support {
    color: #757575;
    font-size: 14px;
    text-transform: uppercase;
}

.list-like-noicte {
    position: relative;
}

/* end sửa header */
.header__third {}

.nav__third {
    justify-content: center;
    margin-top: -10px;
}

.nav-item__third {
    margin: 0 10px;
}

.nav-link__third {
    text-transform: uppercase;
    color: var(--black-color);
    font-weight: 600;
    font-size: 16px;
}

.nav-link__third:hover {
    color: var(--hover-color);
    /* border-bottom: 1px solid var(--hover-color); */
}

.fi-rs-caret-down {
    vertical-align: middle;
}

.sub-menu-1 {
    display: none;
    background-color: var(--white-color);
    margin-left: -15px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.sub-menu-1 ul {
    list-style: none;

}

.sub-menu-1--link {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 12px;
    color: var(--black-color);
    align-items: start;
    font-weight: 500;
    /* vertical-align: middle; */
}

.sub-menu-1--link:hover {
    text-decoration: none;
    color: var(--hover-color);
}

.header__third ul li:hover .sub-menu-1 {
    display: block;
    position: absolute;
}

.header__third ul li:hover .sub-menu-1 ul {
    display: block;
    margin: 10px;
}

.header__third ul li:hover .sub-menu-1 ul li {
    width: 150px;
    padding: 10px;
    border-bottom: 1px solid #000;
    background: transparent;
    border-radius: 0;
    text-align: left
}

.header__third ul li:hover .sub-menu-1 ul li:last-child {
    border-bottom: none;
}

.fi-rr-caret-right {
    display: right;
    font-size: 16px;
    margin-left: 10px;
    vertical-align: middle;
    /* margin-top: 5px; */
}

.sub-menu-2 {
    display: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--white-color);
}

.hover-me:hover .sub-menu-2 {
    position: absolute;
    display: block;
    margin-top: -40px;
    margin-left: 140px;
}

.img-icon {
    width: 20px;
    height: 20px;
    /* vertical-align: middle; */
    margin-right: 10px;
}

/* content */
/* slide show */
.awe-section-1 {
    margin-bottom: 0;
}

/* end slide show */
.carousel-inner img {
    width: 100%;
    height: 100%;

}

.content {
    margin-top: 160px;
}

/* .slideshow {
    background-color: rgba(0,0,0, 0.5)
} */
.carousel-caption {
    left: 60% !important;
    top: 70% !important;
}

.click-slideshow {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--white-color);
    border-radius: 5px;
    padding: 15px 15px;
    line-height: 36px;
    font-weight: 600;
    font-size: 14px;

}

.click-slideshow:hover {
    color: var(--hover-color);
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.5);
    text-decoration: none;
}

.fi-rs-arrow-right {
    font-size: 14px;
    color: var(--black-color);
    margin-left: 20px;
}

.click-slideshow:hover>.fi-rs-arrow-right {
    color: var(--white-color);
}

.active {
    color: var(--hover-color) !important;
}

/* sản phẩm phổ biến */
.title-product {
    text-align: start;
    margin: 40px 0;
    text-transform: uppercase;
    color: var(--black-color);
    font-weight: 600;
    font-size: 20px;
    border-bottom: 1px solid var(--black-color);
    padding-bottom: 4px;
    display: inline-flex;
}

.title-product1 {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin: 40px 0;
    text-transform: uppercase;
}

.btn-buynow {
    border: 1px solid var(--black-color);
    background: none;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin: auto;
    border-radius: unset;
    text-transform: uppercase;
    transition: 0.8s;
    color: var(--white-color);
    position: relative;
    overflow: hidden;
    /* border-radius: 4px; */
}

.btn-buynow::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: var(--black-color);
    transition: 0.8s;
    z-index: -1;
    border-radius: 50% 50% 0 0;
    bottom: 0;
    height: 180%;

}

.btn-buynow:hover {
    text-decoration: none;
    color: var(--black-color) !important;
}

.btn-buynow:hover::before {
    height: 0%;
}

.price-color {
    color: #d9121f;
    font-size: 16px;
}

.card {
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    transition: transform linear 0.1s;
    will-change: transform;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);
}

.sale-off {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 36px;
    background-color: rgba(255, 216, 64, 0.94);
    text-align: center;
}

.sale-off::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    border-width: 0 20px 6px;
    border-style: solid;
    border-color: transparent rgba(255, 216, 64, 0.94) transparent rgba(255, 216, 64, 0.94);
}

.sale-off-percent {
    color: red;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.6rem;
    position: relative;
}

.sale-off-label {
    color: var(--white-color);
    font-size: 1.2rem;
    line-height: 1.2rem;
}

.product__price {
    display: flex;
    justify-content: space-between;
}

.product__price p {
    margin: 0;
}

.product__price-old {
    color: var(--text-color);
    text-decoration: line-through;
}

.product__price-new {}

/* .shoesnews {
    background-color: #f5f5f7;
} */
.shoesnews__title {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    margin: 40px 0;
    border-bottom: 1px solid var(--black-color);
    padding-bottom: 4px;
}

.card-text {
    font-size: 16px;
}

.shoesnews__all {
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    /* background-color: var(--black-color); */
    margin-top: 20px;
    cursor: pointer;
}

.shoesnews__all-tittle {
    color: var(--black-color);
    font-weight: 500;
    font-size: 16px;
    margin-right: 8px;
    margin-top: -3px;
}

.shoesnews__all-tittle:hover {
    color: var(--black-color);
    text-decoration: none;
}

.fi-rs-angle-right {
    font-size: 16px;
}

/* footer */
.footer {
    border-top: 4px solid var(--black-color);
    margin-top: 50px;
    padding-top: 12px;
}

.footer__heading {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 10px;
}

.footer__list {
    padding-left: 0;
    list-style: none;
}

.footer__item {
    font-size: 18px;
    line-height: 1.5rem;
    vertical-align: middle;
}

.footer__item p {
    color: #737373;
}

.footer__item--link {
    font-size: 18px;
    color: #737373;
    padding: 2px 0;
    display: block;
    line-height: 3.2rem;
}

.footer__item-icon {
    margin-right: 10px;
    vertical-align: middle;
}

.footer__item--link-icon {
    margin-right: 12px;
}

.footer__item--link:hover {
    color: var(--hover-color);
    text-decoration: none;
}

.footer__bottom {
    padding: 10px 0;
    background-color: #f5f5f5;
    display: block;
}

.footer__text {
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
}

#go-to-top {
    position: fixed;
    width: 45px;
    height: 45px;
    background-color: var(--black-color);
    bottom: 75px;
    right: 10px;
    text-align: center;
    line-height: 50px;
    display: none;
    border-radius: 50%;
}

.btn-gototop {
    color: var(--white-color);
    font-size: 18px;


}

.btn-gototop:hover {
    text-decoration: none;
    color: var(--white-color);
}

.breadcrumb {
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
    background-color: #fff;
    color: var(--black-color);
}

.checkbtn {
    display: none;
    margin-right: 20px;
}

.checkdl1 {
    display: none;
}

/* list like */
.listlike {
    margin-top: 30px;
}

.hover-icon {
    background: #fff;
    border-radius: 25px;
    opacity: 0;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    padding: 5px;
    display: hidden;
    bottom: 40%;
    right: 0;
    position: absolute;
    margin-bottom: 0;
    z-index: 999;
}

.card:hover .hover-icon {
    right: 10px;
    opacity: 1;
    display: block;
}

.btn-add-to-cart {
    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
    width: 36px;
    height: 36px;
    padding: 0;
    -webkit-transition: .6s;
    transition: .6s;
    text-align: center;
    color: #333;
    border-radius: 100%;
    background: #fff;
    display: block;
}

.btn-add-to-cart:hover,
.quickview:hover {
    background-color: #000;
    color: #fff;
}

.quickview {

    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
    width: 36px;
    height: 36px;
    padding: 0;
    margin-top: 10px;
    -webkit-transition: .6s;
    transition: .6s;
    text-align: center;
    color: #333;
    border-radius: 100%;
    background: #fff;
    display: block;
}

.main-img-2 {
    position: relative;
    height: 400px;
    max-width: 500px;
}

.main-img-2 img {
    width: 370px;
    max-height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.all-img-2 {
    height: auto;
    opacity: 1;
    list-style: none;
    display: flex;
    padding: unset;
}

.all-img-2 li {
    display: inline block;
}

.img-item-2 img {
    width: 90px;
    cursor: pointer;
    padding: 5px 3px;
}

.shopnow2 {
    width: 250px;
    height: 40px;
    background: #000;
    color: var(--white-color);
    font-size: 16px;
    font-weight: 500;
    vertical-align: middle;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--black-color);
}

.shopnow2:hover {
    background: none;
    color: #000;
}

.circlecheck {
    margin: unset !important;
    width: 20% !important;
}

.product-name a {
    color: #000;
    text-decoration: none;
    font-size: 18px;
}

.status-product,
.infor-oder {
    font-size: 14px;
    padding: 5px 0;
}

.special-price {
    color: var(--hover-color);
    font-size: 16px;
    padding: 10px 0;
}

.price-old {
    font-size: 16px;
    color: #999;
    padding-bottom: 10px;
}

.product-description {
    font-size: 14px;
    height: 5.6rem;
    line-height: 1.8rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    padding-bottom: 10px;
}

.btn-default {
    position: absolute;
    right: -15px;
    top: -12px;
    width: 30px;
    font-size: 14px;
    height: 30px;
    text-align: center;
    line-height: 2px;
    border-radius: 50%;
    background: #000;
    color: #fff;
    padding: 0;
}

.awe-section-9 {
    margin-top: 45px;
}

.owl-policy-mobile {
    padding: 30px 0;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
}

.owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
}

.owl-stage {
    transform: translate3d(0px, 0px, 0px);
    transition: all 0s ease 0s;
    width: 1150px;

}

.owl-item {
    width: 287.5px;
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
}

.section_policy_content {
    position: relative;
}

.section_policy_content a {
    text-decoration: none;
}

.section_policy_content img {
    max-width: 40px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
}

.section-policy-padding {
    padding-left: 50px;
}

.section-policy-padding h3 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #000;
}

.section_policy_title {
    font-size: 12px;
    color: #333;
}

.card-title {
    text-transform: uppercase;
}

.home-product-item__action {
    justify-content: center;
    margin: 6px 10px 0;

}

.home-product-item__action .muangay {
    padding: 8px 14px;
    border-radius: 8px;
    color: black;
    text-decoration: none;
    background: #ccc;
    font-weight: 600;
}

.home-product-item__like {
    font-size: 1.4rem;
}

i.home-product-item__like-icon-fill {
    color: #d63d30;
    display: none;
}

.home-product-item__like--liked .home-product-item__like-icon-fill {
    display: inline-block;
}

.home-product-item__like--liked .home-product-item__like-icon-empty {
    display: none;
}

.home-product-item__rating {
    font-size: 1rem;
    transform: scale(0.8);
    transform-origin: right;
    color: #d5d5d5;
    margin: -1px 0 0 auto;
}

.home-product-item__star--gold {
    color: yellow;
}

.home-product-item__sold {
    margin-left: 6px;
    font-size: 1.2rem;
    color: var(--text-color);
}

.product__color {
    padding: 10px 0;
    margin-bottom: unset !important;
}

.product__item {
    max-height: 540px;
    margin-bottom: 24px;
}

.card-img-top {
    width: 100%;
    height: 208px;
    cursor: pointer;
}

.product_popular .card-img-top {
    height: 100%
}

.user {
    height: 60px;
}

.user i {
    font-size: 32px;
    line-height: 60px;
    color: black;
}

.search-box {
    width: 42px;
    height: 42px;
    background-color: #242628;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    border-radius: 15px;
    margin: auto 0;
}

.search-box.open {
    width: 420px;
}

.search-input {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
    color: #fff;
    padding: 20px 100px 20px 35px;
    font-size: 16px;
}

.btn-search {
    color: white;
    outline: none;
    border: none;
    width: 42px;
    height: 42px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    font-size: 30px;
}

.btn-search i {
    font-size: 24px;
    line-height: 50px;
}

.soluong,
.product__wap-change input {
    font-size: 18px;
    font-weight: bold;
    margin: auto;
}
.title{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}

.footer{
    font-weight: bold;
}`

function Header() {
    return (
        // <>
        <StyledHeader className="header">
            <div className="header__logo d-flex col-xl-12">
                <div href="#" className="div-img col-xl-3">
                    <a href="./trangchu" >  <a href="./index.html" ><img src="./../../public/logo192.png" alt="" /></a> </a>
                    <a href="#" className="trangchu">Trang chủ</a>
                </div>
                <div className="col-xl-6">
                    <div className="header__navbar ">
                        <a href="index.html" className="trangchu">Trang chủ</a>
                        <ul className="navbar__items d-flex">

                            <li className="navbar__item"> <a href="./ao.html" className="">Áo thời trang</a>

                            </li>
                            <li className="navbar__item"> <a href="./quan.html" className="">Quần thời trang</a>

                            </li>
                            <li className="navbar__item"> <a href="./giay.html" className="">Giày</a>

                            </li>
                            <li className="navbar__item"> <a href="#" className="">Cộng đồng</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 user">
                    <a href="dangnhap.html" className=""> <i className="fas fa-user-circle icon-user"></i></a>
                    <a href="giohang.html" className=""><i className="fas fa-shopping-cart icon-cart"></i></a>
                </div>
            </div>
        </StyledHeader>
    );
}

export default Header;
