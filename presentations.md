---
layout: page
permalink: /presentations/index.html
title: Presentations
---

## Conference Presentations

**2025**<br>
- Microfluidic Model of Haemodynamics in Porous Media, oral presentation, [Osborne Reynolds Day](https://www.osbornereynolds.org/), Manchester UK, June 2025.<br>

<!-- ==================== 独占隔离版：带文字标签轮播图 ==================== -->
<div class="pub-carousel-container">
    <div class="pub-carousel-track" id="pub-track">
        
        <!-- 第一张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/OR_Day/OR_Day_0.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第二张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/OR_Day/OR_Day_1.jpg" alt="Publication Image 2">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第三张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/OR_Day/OR_Day_2.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第四张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/OR_Day/OR_Day_3.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第五张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/OR_Day/OR_Day_4.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>
    </div>

    <!-- 左右切换按钮 -->
    <button class="pub-carousel-btn pub-prev-btn" onclick="movePubSlide(-1)">&#10094;</button>
    <button class="pub-carousel-btn pub-next-btn" onclick="movePubSlide(1)">&#10095;</button>
</div>


<!-- 2. CSS 样式：全部加上了 pub- 前缀，绝对不会污染首页 -->
<style>
    .pub-carousel-container {
        position: relative;
        width: 100%;
        max-width: 650px;
        height: 450px;
        margin: 25px auto;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        background-color: #1a1a1a;
    }

    .pub-carousel-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.4s ease-in-out;
    }

    .pub-carousel-slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    /* 限制极其精准，只改轮播图内部的图片 */
    .pub-carousel-slide img {
        width: 100% !important; /* !important 确保不被主题自带的样式强行扭曲 */
        height: calc(100% - 40px) !important;
        object-fit: contain !important;
        display: block !important;
        margin: 0 auto !important;
    }

    /* 独占的文字标签样式 */
    .pub-carousel-text {
        height: 40px;
        background-color: rgba(255, 255, 255, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .pub-carousel-text p {
        margin: 0 !important;
        font-size: 14px !important;
        color: #333 !important;
        font-weight: 500;
    }

    /* 独占的按钮样式 */
    .pub-carousel-btn {
        position: absolute;
        top: calc(50% - 20px);
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.45);
        color: white;
        border: none;
        padding: 12px 16px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: 10;
    }

    .pub-carousel-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transform: translateY(-50%) scale(1.1);
    }

    .pub-prev-btn { left: 15px; }
    .pub-next-btn { right: 15px; }
</style>

<!-- 3. JavaScript 逻辑：函数名也进行了唯一化隔离 -->
<script>
    let currentPubIndex = 0;
    
    function movePubSlide(direction) {
        const track = document.getElementById('pub-track');
        if (!track) return;
        
        const totalSlides = track.children.length;
        
        currentPubIndex = currentPubIndex + direction;

        if (currentPubIndex < 0) {
            currentPubIndex = totalSlides - 1;
        } else if (currentPubIndex >= totalSlides) {
            currentPubIndex = 0;
        }

        track.style.transform = `translateX(-${currentPubIndex * 100}%)`;
    }
</script>

<!-- ==================== 轮播图结束 ==================== -->

**2023**<br>
- [Microfluidic model of micro-haemodynamics in porous media](https://meetings.aps.org/Meeting/DFD23/Session/J14.3), oral presentation, APS Division of Fluid Dynamics Annual Meeting, Washington USA, November 2023.<br>

- A microfluidic model of micro-haemorheology in complex porous media, oral presentation, International Congress on Rheology, Athens Greece, August 2023.<br>


<!-- ==================== 独占隔离版：带文字标签轮播图 ==================== -->
<div class="pub-carousel-container">
    <div class="pub-carousel-track" id="pub-track">
        
        <!-- 第一张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/ICR/ICR.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第二张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/ICR/ICR.jpg" alt="Publication Image 2">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第三张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/ICR/ICR.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第四张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/ICR/ICR.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>

        <!-- 第五张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/ICR/ICR.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Manchester, UK (2025)</p>
            </div>
        </div>
    </div>

    <!-- 左右切换按钮 -->
    <button class="pub-carousel-btn pub-prev-btn" onclick="movePubSlide(-1)">&#10094;</button>
    <button class="pub-carousel-btn pub-next-btn" onclick="movePubSlide(1)">&#10095;</button>
</div>


<!-- 2. CSS 样式：全部加上了 pub- 前缀，绝对不会污染首页 -->
<style>
    .pub-carousel-container {
        position: relative;
        width: 100%;
        max-width: 650px;
        height: 450px;
        margin: 25px auto;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        background-color: #1a1a1a;
    }

    .pub-carousel-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.4s ease-in-out;
    }

    .pub-carousel-slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    /* 限制极其精准，只改轮播图内部的图片 */
    .pub-carousel-slide img {
        width: 100% !important; /* !important 确保不被主题自带的样式强行扭曲 */
        height: calc(100% - 40px) !important;
        object-fit: contain !important;
        display: block !important;
        margin: 0 auto !important;
    }

    /* 独占的文字标签样式 */
    .pub-carousel-text {
        height: 40px;
        background-color: rgba(255, 255, 255, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .pub-carousel-text p {
        margin: 0 !important;
        font-size: 14px !important;
        color: #333 !important;
        font-weight: 500;
    }

    /* 独占的按钮样式 */
    .pub-carousel-btn {
        position: absolute;
        top: calc(50% - 20px);
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.45);
        color: white;
        border: none;
        padding: 12px 16px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: 10;
    }

    .pub-carousel-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transform: translateY(-50%) scale(1.1);
    }

    .pub-prev-btn { left: 15px; }
    .pub-next-btn { right: 15px; }
</style>

<!-- 3. JavaScript 逻辑：函数名也进行了唯一化隔离 -->
<script>
    let currentPubIndex = 0;
    
    function movePubSlide(direction) {
        const track = document.getElementById('pub-track');
        if (!track) return;
        
        const totalSlides = track.children.length;
        
        currentPubIndex = currentPubIndex + direction;

        if (currentPubIndex < 0) {
            currentPubIndex = totalSlides - 1;
        } else if (currentPubIndex >= totalSlides) {
            currentPubIndex = 0;
        }

        track.style.transform = `translateX(-${currentPubIndex * 100}%)`;
    }
</script>

<!-- ==================== 轮播图结束 ==================== -->

**2022**<br>
- [Microfluidic model of micro-haemodynamics](https://meetings.aps.org/Meeting/DFD22/Session/L05.2), oral presentation, APS Division of Fluid Dynamics Annual Meeting, Indianapolis USA, November 2022.<br>

- Microfluidic model of micro-haemodynamics, oral presentation, IOP workshop: Microrheology and Transport in Complex Biological Media, Edinburgh UK, May 2022.<br>

- [Microfluidic model of micro-haemodynamics](https://sites.google.com/view/tjp80/home), poster presentation, Biological Fluids & Flows: A Conference to Celebrate the 80th Birthday of Prof. Tim Pedley, Cambridge UK, March 2022.<br>


<!-- ==================== 独占隔离版：带文字标签轮播图 ==================== -->
<div class="pub-carousel-container">
    <div class="pub-carousel-track" id="pub-track">
        
        <!-- 第一张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/T80/TP80.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Cambridge, UK (2022)</p>
            </div>
        </div>

        <!-- 第二张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/T80/TP80_2.jpg" alt="Publication Image 2">
            <div class="pub-carousel-text">
                <p>Cambridge, UK (2022)</p>
            </div>
        </div>

        <!-- 第三张图 + 标签 -->
        <div class="pub-carousel-slide">
            <img src="{{ site.baseurl }}/images/T80/TP80_3.jpg" alt="Publication Image 1">
            <div class="pub-carousel-text">
                <p>Cambridge, UK (2022)</p>
            </div>
        </div>

    <!-- 左右切换按钮 -->
    <button class="pub-carousel-btn pub-prev-btn" onclick="movePubSlide(-1)">&#10094;</button>
    <button class="pub-carousel-btn pub-next-btn" onclick="movePubSlide(1)">&#10095;</button>
</div>


<!-- 2. CSS 样式：全部加上了 pub- 前缀，绝对不会污染首页 -->
<style>
    .pub-carousel-container {
        position: relative;
        width: 100%;
        max-width: 650px;
        height: 450px;
        margin: 25px auto;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.12);
        background-color: #1a1a1a;
    }

    .pub-carousel-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.4s ease-in-out;
    }

    .pub-carousel-slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    /* 限制极其精准，只改轮播图内部的图片 */
    .pub-carousel-slide img {
        width: 100% !important; /* !important 确保不被主题自带的样式强行扭曲 */
        height: calc(100% - 40px) !important;
        object-fit: contain !important;
        display: block !important;
        margin: 0 auto !important;
    }

    /* 独占的文字标签样式 */
    .pub-carousel-text {
        height: 40px;
        background-color: rgba(255, 255, 255, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .pub-carousel-text p {
        margin: 0 !important;
        font-size: 14px !important;
        color: #333 !important;
        font-weight: 500;
    }

    /* 独占的按钮样式 */
    .pub-carousel-btn {
        position: absolute;
        top: calc(50% - 20px);
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.45);
        color: white;
        border: none;
        padding: 12px 16px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: 10;
    }

    .pub-carousel-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
        transform: translateY(-50%) scale(1.1);
    }

    .pub-prev-btn { left: 15px; }
    .pub-next-btn { right: 15px; }
</style>

<!-- 3. JavaScript 逻辑：函数名也进行了唯一化隔离 -->
<script>
    let currentPubIndex = 0;
    
    function movePubSlide(direction) {
        const track = document.getElementById('pub-track');
        if (!track) return;
        
        const totalSlides = track.children.length;
        
        currentPubIndex = currentPubIndex + direction;

        if (currentPubIndex < 0) {
            currentPubIndex = totalSlides - 1;
        } else if (currentPubIndex >= totalSlides) {
            currentPubIndex = 0;
        }

        track.style.transform = `translateX(-${currentPubIndex * 100}%)`;
    }
</script>

<!-- ==================== 轮播图结束 ==================== -->

**2021**<br>
- A robust microfluidic device for fabricating deformable microcapsules based on water-oil-water double-emulsion templates, poster presentation, UK Fluids Conference, online, 2021.<br>

  <br>


