<template>
  <div class="basic-layout">
    <div class="app-header">
        <div class="left">
            <img src="https://www.scu.edu.cn/__local/B/67/25/DFAF986CCD6529E52D7830F180D_C37C7DEE_4340.png" alt="logo">
            <h2 class="title">图书管理系统</h2>
        </div>
        <div class="right">
            <div class="hello-message">你好, xxx</div>
            <div class="logout">退出</div>
        </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
        <div class="left">
            <app-nav />
        </div>

        <div class="right">
            <router-view />
        </div>

    </div>

  </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
