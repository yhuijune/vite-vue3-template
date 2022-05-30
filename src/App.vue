<script setup lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const handleSwitchLocale = (val: string) => {
    locale.value = val;
};
</script>

<template>
    <!-- <el-config-provider></el-config-provider> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <p>{{ $t('常用.登录') }}</p>
    <el-button @click="handleSwitchLocale('zhCn')">中文</el-button>
    <el-button @click="handleSwitchLocale('en')">英文</el-button>
</template>

<style>
/* #app {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
} */
</style>
