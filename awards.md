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

<!-- ==================== 终极隔离自适应轮播图 ==================== -->
<div id="pub-carousel-root" style="position: relative; width: 100%; max-width: 650px; height: 420px; margin: 25px auto; overflow: hidden; border-radius: 8px; background-color: #1a1a1a; box-shadow: 0 4px 12px rgba(0,0,0,0.15); box-sizing: border-box;">
    
    <!-- 滚动轨道 -->
    <div id="pub-track" style="display: flex; width: 100%; height: 100%; transition: transform 0.4s ease-in-out; margin: 0; padding: 0;">
        
        <!-- 第一张图 + 标签组合 -->
        <div style="width: 100%; height: 100%; flex-shrink: 0; display: flex; flex-direction: column; margin: 0; padding: 0; box-sizing: border-box;">
            <img src="{{ site.baseurl }}/images/OR_Day.jpg" style="width: 100% !important; height: 380px !important; object-fit: contain !important; margin: 0 !important; padding: 0 !important; display: block !important; background: transparent;">
            <div style="height: 40px; background-color: #ffffff; display: flex; align-items: center; justify-content: center; color: #333333; font-size: 14px; font-weight: 500; border-top: 1px solid #eeeeee;">
                Manchester, UK, (2025)
            </div>
        </div>

        <!-- 第二张图 + 标签组合 -->
        <div style="width: 100%; height: 100%; flex-shrink: 0; display: flex; flex-direction: column; margin: 0; padding: 0; box-sizing: border-box;">
            <img src="{{ site.baseurl }}/images/OR_Day_2.jpg" style="width: 100% !important; height: 380px !important; object-fit: contain !important; margin: 0 !important; padding: 0 !important; display: block !important; background: transparent;">
            <div style="height: 40px; background-color: #ffffff; display: flex; align-items: center; justify-content: center; color: #333333; font-size: 14px; font-weight: 500; border-top: 1px solid #eeeeee;">
                Singapore, (2026)
            </div>
        </div>

    </div>

    <!-- 左切换按钮（带悬停微动特效） -->
    <button onclick="movePubSlide(-1)" onmouseover="this.style.background='rgba(0,0,0,0.8)'" onmouseout="this.style.background='rgba(0,0,0,0.45)'" style="position: absolute; left: 15px; top: 190px; background: rgba(0,0,0,0.45); color: #ffffff; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; transition: background 0.2s; outline: none;">&#10094;</button>
    
    <!-- 右切换按钮（带悬停微动特效） -->
    <button onclick="movePubSlide(1)" onmouseover="this.style.background='rgba(0,0,0,0.8)'" onmouseout="this.style.background='rgba(0,0,0,0.45)'" style="position: absolute; right: 15px; top: 190px; background: rgba(0,0,0,0.45); color: #ffffff; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 18px; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; transition: background 0.2s; outline: none;">&#10095;</button>
</div>

<!-- 极其安全的纯独立 JS 肌肉 -->
<script>
    (function() {
        let currentIdx = 0;
        window.movePubSlide = function(direction) {
            const track = document.getElementById('pub-track');
            if (!track) return;
            const slidesCount = track.children.length;
            // 完美的数学循环取模运算，替代繁琐的 if-else
            currentIdx = (currentIdx + direction + slidesCount) % slidesCount;
            track.style.transform = `translateX(-${currentIdx * 100}%)`;
        };
    })();
</script>
<!-- ==================== 轮播图结束 ==================== -->
<!-- ==================== 轮播图结束 ==================== -->

<!-- - A robust microfluidic device for fabricating deformable microcapsules based on water-oil-water double-emulsion templates, poster presentation, UK Fluids Conference, online, 2021.<br> -->


<br>
