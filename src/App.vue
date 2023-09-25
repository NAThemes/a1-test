<template>
  <MainHeader></MainHeader>
  <SectionCard></SectionCard>
</template>

<script setup>
import MainHeader from "@/components/MainHeader.vue";
import SectionCard from "@/components/SectionCard.vue";
</script>

<style lang="scss">
  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),   url('~@/assets/fonts/Roboto-Regular.ttf') format("truetype");
  }
  @font-face {
    font-family: "RobotoCondensed";
    src: local("RobotoCondensed"),   url('~@/assets/fonts/RobotoCondensed-Bold.ttf') format("truetype");
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
