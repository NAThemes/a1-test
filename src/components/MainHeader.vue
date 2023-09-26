<script setup>

</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img src="~@/assets/images/logo.png" alt="logo">
    </div>
    <div class="header__main">
      <div class="header__maf maf_left">
        <img src="~@/assets/images/maf_left.png" alt="maf 1">
      </div>
      <div class="header__boxes">
        <img class="header__boxes-img" src="~@/assets/images/boxes.png" alt="boxes">
        <h1 class="header__title">
          КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ
        </h1>
        <p class="header__description">
          Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
        </p>
      </div>
      <div class="header__maf maf_right">
        <img src="~@/assets/images/maf_right.png" alt="maf 2">
      </div>
    </div>
    <div class="header__glow-bottom"></div>
    <div class="header__glow-line"></div>
  </header>
</template>

<style lang="scss" scoped>
  .header{
    position: relative;
    background: url('~@/assets/images/headerBg.webp') top center no-repeat, url("~@/assets/images/glow_boxes.png") top center no-repeat;
    background-size: cover;
    background-blend-mode: screen;
    &::before, &::after{
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      max-width: 465px;
      width: 100%;
      z-index: 6;
      @media screen and (max-width: 875px) {
        max-width: 265px;
      }
      @media screen and (max-width: 550px) {
        max-width: 170px;
      }
    }
    &::before{
      left: 0;
      background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    }
    &::after{
      right: 0;
      background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    }
    &__logo{
      position: relative;
      margin: 0 auto 0 auto;
      z-index: 15;
      text-align: center;
      img{
        cursor: pointer;
        width: 200px;
        @media screen and (max-width: 450px) {
          width: 150px;
        }
        @media screen and (max-width: 350px) {
          width: 120px;
        }
      }
    }
    &__maf{
      position: relative;
      bottom: 0;
      z-index: 5;
      img{
        width: 100%;
      }
    }
    &__maf.maf_left{
      left: 0;
      img{
        max-width: 577px;
      }
    }
    &__maf.maf_right{
      right: 0;
      img{
        max-width: 678px;
      }
    }
    &__main{
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-top: -5rem;
      @media screen and (max-width: 875px) {
        margin-top: -1rem;
      }
      @media screen and (max-width: 550px) {
        margin-top: 4rem;
      }
      @media screen and (max-width: 450px) {
        margin-top: 9rem;
      }
    }
    &__boxes{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      margin: 0 auto;
      z-index: 10;
      background-blend-mode: screen;
      padding-bottom: 45px;
      @media screen and (max-width: 1000px) {
        width: 80%;
      }
      @media screen and (max-width: 875px) {
        padding-bottom: 25px;
      }
      @media screen and (max-width: 550px) {
        padding-bottom: 5rem;
      }
      @media screen and (max-width: 450px) {
        padding-bottom: 12rem;
      }
    }
    &__boxes-img{
      width: 100%;
      display: block;
      margin: 0 auto;
    }
    &__title{
      margin-bottom: 25px;
      font-family: "RobotoCondensed", Arial, sans-serif;
      font-size: 42px;
      font-weight: 700;
      line-height: 49px;
      letter-spacing: 0;
      text-align: center;
      color: #ffffff;

      @media screen and (max-width: 675px) {
        font-size: 28px;
        line-height: 35px;
      }
      @media screen and (max-width: 380px) {
        font-size: 20px;
        line-height: 25px;
      }
    }
    &__description{
      font-family: "Roboto", Arial, sans-serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0;
      text-align: center;
      color: #ffffff;
      @media screen and (max-width: 675px) {
        font-size: 18px;
        line-height: 21px;
      }
      @media screen and (max-width: 380px) {
        font-size: 16px;
        line-height: 19px;
      }
    }
    &__glow-bottom{
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 100%;
      height: 380px;
      background: url("~@/assets/images/bottom_glow.png") bottom center no-repeat;
      mix-blend-mode: multiply;
    }
    &__glow-line{
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 100%;
      height: 172px;
      background: url("~@/assets/images/glow.png") bottom center no-repeat;
    }
  }
</style>