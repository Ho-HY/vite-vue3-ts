<script setup lang="ts">
import zhtw from 'element-plus/lib/locale/lang/zh-tw'
const locale = zhtw
</script>

<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
