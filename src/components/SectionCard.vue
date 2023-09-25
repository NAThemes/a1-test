<script setup>
/* eslint-disable */
import CardTable from "@/components/CardTable.vue";

</script>

<template>
  <main class="card">
    <div class="card__inner">
      <h2 class="card__title">
        НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»
      </h2>
      <div class="card__flex">
        <div class="card__img">
          <img src="~@/assets/images/vitoCard.png" alt="Vito">
        </div>
        <div class="card__main">

          <ul class="card__header">
            <li class="card__header-item">Бесплатные сервера</li>
            <li class="card__header-item">Подписочный сервер</li>
          </ul>
          <CardTable></CardTable>
          <div class="card__box">
            <div class="card__box-inner">
              <span class="card__price">399 ₽</span>
              <button class="card__button">ПРИОБРЕСТИ</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card__glow-line"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .card{
    position: relative;
    background: url("@/assets/images/bgWall.webp") left top no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 40px;
    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url("@/assets/images/elipse.svg") 11% 30px no-repeat;
      background-size: 50%;
      z-index: 15;
      @media screen and (max-width: 1000px){
        background: url("@/assets/images/elipse.svg") 45% 100px no-repeat;
        background-size: 100%;
      }
    }
    &__inner{
      max-width: 1415px;
      margin: 0 auto;
      @media screen and (max-width: 1435px){
        padding: 0 20px;
      }
    }
    &__flex{
      display: flex;
      align-items: center;
      gap: 30px;
      @media screen and (max-width: 1000px){
        flex-direction: column;
      }
    }
    &__img,&__main{
      flex-basis: 50%;
    }
    &__img{
      position: relative;
      z-index: 40;
      img{
        display: block;
        margin: 0 auto;
        @media screen and (max-width: 1000px){
          width: 80%;
        }
      }
    }
    &__title{
      width: 50%;
      margin-left: auto;
      margin-bottom: 40px;
      font-family: "RobotoCondensed", Arial, sans-serif;
      font-size: 30px;
      font-weight: 700;
      line-height: 35px;
      letter-spacing: 0;
      text-align: left;
      color: #416DF4;
      @media screen and (max-width: 1000px){
        width: 100%;
      }
      @media screen and (max-width: 675px){
        font-size: 24px;
        line-height: 30px;
        text-align: center;
      }
    }
    &__header{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      list-style: none;
    }
    &__header-item{
      max-width: 150px;
      border: 1px solid #671D00;
      padding: 6px 11px;
      font-family: "Roboto", Arial, sans-serif;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      letter-spacing: 0;
      text-align: center;
      color: #671D00;
      @media screen and (max-width: 675px){
        max-width: 100px;
      }
      @media screen and (max-width: 475px){
        padding: 3px 7px;
        max-width: 75px;
        font-size: 10px;
        line-height: 12px;
        text-align: right;
      }
    }
    &__box{
      position: relative;
      max-width: 445px;
      min-height: 325px;
      background: url("@/assets/images/box.png") left bottom no-repeat;
      @media screen and (max-width: 1000px){
        margin: 0 auto;
      }
      @media screen and (max-width: 475px){
        min-height: 425px;
        background: url("@/assets/images/box.png") -50% 0 no-repeat;
      }
    }
    &__box-inner{
      position: absolute;
      right: 0;
      bottom: 55px;
      z-index: 25;
      @media screen and (max-width: 475px){
        right: 50%;
        transform: translateX(50%);
        bottom: 0;
      }
    }
    &__price{
      display: block;
      margin-bottom: 10px;
      font-family: "Roboto", Arial, sans-serif;
      font-size: 50px;
      font-weight: 400;
      line-height: 59px;
      letter-spacing: 0;
      text-align: left;
      color: #ffffff;
    }
    &__button{
      width: 180px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      border-radius: 7px;
      font-family: "Roboto", Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0;
      text-align: center;
      background: #FCFF00;
      color: #000000;
      cursor: pointer;
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