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



<!-- ==================== 完美自适应轮播图开始 ==================== -->
<!-- 1. HTML 结构：保持简单干净 -->
<div class="carousel-container">
    <div class="carousel-track" id="track">
        <img src="{{ site.baseurl }}/images/OR_Day.jpg" alt="Publication Image 1">
        <img src="{{ site.baseurl }}/images/OR_Day_2.jpg" alt="Publication Image 2">
    </div>

    <!-- 左右切换按钮 -->
    <button class="carousel-btn prev-btn" onclick="moveSlide(-1)">&#10094;</button>
    <button class="carousel-btn next-btn" onclick="moveSlide(1)">&#10095;</button>
</div>

<!-- 2. CSS 样式：核心修复比例问题 -->
<style>
    /* 轮播图外层大盒子 */
    .carousel-container {
        position: relative;
        width: 100%;            /* 宽度撑满父级容器 */
        max-width: 650px;       /* 限制最大宽度，防止在大屏幕上大得夸张 */
        height: 400px;          /* 【关键】固定轮播图的整体高度，你可以根据需要调整这个数值 */
        margin: 25px auto;      /* 上下留白，水平居中 */
        overflow: hidden;       /* 隐藏视窗外的其他图片 */
        border-radius: 8px;     /* 优雅的轻微圆角 */
        box-shadow: 0 4px 16px rgba(0,0,0,0.12); /* 淡淡的阴影，增加立体感 */
        background-color: #1a1a1a; /* 【关键】如果图片比例不一致，两侧/上下会自动补上高级的暗色背景 */
    }

    /* 内部滚动的长轨道 */
    .carousel-track {
        display: flex;
        width: 100%;
        height: 100%;           /* 撑满外层盒子高度 */
        transition: transform 0.4s ease-in-out; /* 平滑的切换动画 */
    }

    /* 【核心修复】图片样式 */
    .carousel-track img {
        width: 100%;            /* 每一张图在轨道里占满 100% 宽度 */
        height: 100%;           /* 每一张图在轨道里占满 100% 高度 */
        flex-shrink: 0;         /* 防止图片被无情挤压 */
        
        /* 🌟 核心魔法属性 🌟 */
        object-fit: contain;    /* 保持原图比例完整显示，绝不拉伸、绝不变形！ */
        
        display: block;
    }

    /* 左右按钮通用样式 */
    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%); /* 垂直完美居中 */
        background-color: rgba(0, 0, 0, 0.45); /* 半透明黑底 */
        color: white;
        border: none;
        padding: 12px 16px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 50%;     /* 完美的圆形按钮 */
        transition: all 0.3s ease;
        z-index: 10;            /* 确保按钮永远漂浮在图片上方 */
    }

    /* 鼠标悬停在按钮上时的视觉反馈 */
    .carousel-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transform: translateY(-50%) scale(1.1); /* 轻微放大，更有交互感 */
    }

    /* 定位左箭头与右箭头 */
    .prev-btn { left: 15px; }
    .next-btn { right: 15px; }
</style>

<!-- 3. JavaScript 逻辑：控制完美循环切换 -->
<script>
    let currentIndex = 0;
    
    function moveSlide(direction) {
        const track = document.getElementById('track');
        if (!track) return;
        
        const totalSlides = track.children.length;
        
        // 更新索引
        currentIndex = currentIndex + direction;

        // 边界循环保护
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // 第一张点左，跳到最后一张
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;               // 最后一张点右，回到第一张
        }

        // 计算平移百分比并应用
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
</script>
<!-- ==================== 完美自适应轮播图结束 ==================== -->

<!-- - A robust microfluidic device for fabricating deformable microcapsules based on water-oil-water double-emulsion templates, poster presentation, UK Fluids Conference, online, 2021.<br> -->


<br>
