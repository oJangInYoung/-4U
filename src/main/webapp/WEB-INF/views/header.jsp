<%--
  Created by IntelliJ IDEA.
  User: dhwls
  Date: 2022-10-15
  Time: 오후 7:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<header>
    <div class="header-box">
        <div class="text-logo">
            <a href="#"><span><i>KoStyle4U</i></span></a>
        </div>
        <div class="search-form-box">
            <div>
                <form method="get">
                    <input class="search" type="search" name="search"  placeholder="검색">
                </form>
            </div>
        </div>
        <div class="ul-box">
            <ul>
                <li><a href="#"><span>마이페이지</span></a></li>
                <li class="line"></li>
                <li><a href="#"><span>로그인</span></a></li>
            </ul>
        </div>
    </div>
</header>
<nav>
    <div>
        <ul class="nav-ul">
            <li class="li-list" data-list="shop"><a class="list-color" href="#"><span>상품</span></a></li>
            <li class="li-list"><a href="#"><span>코디</span></a></li>
            <li class="li-list"><a href="#"><span>경매</span></a></li>
            <li class="li-list"><a href="#"><span>고객센터</span></a></li>
            <li class="li-list"><a href="#"><span>About Us</span></a></li>
        </ul>
    </div>
</nav>

<div class="all-category">
    <div class="top-category">
        <div class='top-category01'>
            <span class='title' data-title='clothes'><a href='#'>상의</a></span>
            <span class='title' data-title='outerwear'><a href='#'>아우터</a></span>
            <span class='title' data-title='pants'><a href='#'>바지</a></span>
            <span class='title' data-title='dress-skirt'><a href='#'>원피스/스커트</a></span>
        </div>
    </div>
    <div class="bottom-category">
    </div>
</div>