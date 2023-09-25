<script setup>
import {computed} from 'vue';
import {useStore} from "vuex";
const store = useStore();
const items = computed(() => store.state.items);

</script>

<template>
  <div class="table">
    <div v-for="(item, key) in items" :key="key" class="table__row">
      <div class="table__column table__img">
        <img :src="item.img" :alt="item.desc">
      </div>
      <div class="table__column table__description">
        {{item.desc}}
      </div>
      <div class="table__column table__free-server">
        <template v-if="item.freeServ === ''">
          -
        </template>
        <template v-else>{{item.freeServ}}</template>
      </div>
      <div class="table__column table__sub-server">
        <template v-if="item.subServ === ''">
          -
        </template>
        <template v-else>{{item.subServ}}</template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .table{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    &__row{
      display: grid;
      grid-template-columns: 65px auto 120px 135px;
      gap: 20px;
      margin-bottom: 1px;
      border: 1px solid #671D007A;
      padding: 5px 6px;
      &:last-child{
        margin-bottom: 0;
      }
      @media screen and (max-width: 675px){
        grid-template-columns: 65px auto 80px 90px;
      }
      @media screen and (max-width: 475px){
        gap: 10px;
        grid-template-columns: 60px auto 60px 60px;
      }
    }
    &__column{
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Roboto", Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0;
      text-align: left;
      color: #ffffff;
      @media screen and (max-width: 475px){
        font-size: 14px;
        line-height: 16px;
      }
    }
    &__description{
      justify-content: flex-start;
      max-width: 229px;
    }
  }
</style>