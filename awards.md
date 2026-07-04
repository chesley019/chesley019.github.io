---
layout: page
permalink: /awards/index.html
title: Awards
---

## Competitions

- Nov 2025：Runner-up of Osborne Reynolds 2025

<div class="one">
    <img src="/images/OR_Day.jpg">
    <div class="text-content">
        <p>Manchester, UK, (2025)</p>
    </div>
</div>



<!-- ==================== 轮播图开始 ==================== -->
<!-- 1. HTML 结构：请确保图片名字和后缀完全正确 -->
<div class="carousel-container">
    <div class="carousel-track" id="track">
        <img src="{{ site.baseurl }}/images/OR_Day.jpg" alt="Publication Image 1">
        <img src="{{ site.baseurl }}/images/OR_Day_2.jpg" alt="Publication Image 2">
    </div>

    <!-- 左右切换按钮 -->
    <button class="carousel-btn prev-btn" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-btn next-btn" onclick="moveSlide(1)">&#10095;</button>
</div>

<!-- 2. CSS 样式：仅作用于本页面的轮播图 -->
<style>
    .carousel-container {
        position: relative;
        width: 100%;       /* 撑满论文列表的宽度 */
        max-width: 650px;  /* 限制最大宽度，防止大屏幕上图片过大 */
        margin: 20px auto; /* 上下留出间距，水平居中 */
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .carousel-track {
        display: flex;
        transition: transform 0.4s ease-in-out;
        width: 100%;
    }

    .carousel-track img {
        width: 100%;
        display: block;
        height: auto;
    }

    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
        padding: 10px 14px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 50%;
        transition: background 0.3s;
    }

    .carousel-btn:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .prev-btn { left: 10px; }
    .next-btn { right: 10px; }
</style>

<!-- 3. JavaScript 逻辑：控制图片切换 -->
<script>
    let currentIndex = 0;
    
    function moveSlide(direction) {
        const track = document.getElementById('track');
        const totalSlides = track.children.length;
        
        currentIndex = currentIndex + direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
</script>
<!-- ==================== 轮播图结束 ==================== -->

<!-- - A robust microfluidic device for fabricating deformable microcapsules based on water-oil-water double-emulsion templates, poster presentation, UK Fluids Conference, online, 2021.<br> -->


<br>
