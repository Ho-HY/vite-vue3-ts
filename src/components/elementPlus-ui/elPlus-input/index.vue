<script setup lang="ts">
import { onMounted, reactive } from 'vue'

const info = reactive({ iscollapse: 'true' })

onMounted(() => {
  // document.getElementsByClassName('el-input__inner')[0]
  const input_inner = document.getElementsByClassName('el-input__inner')
  for (let index = 0; index < input_inner.length; index++) {
    const element = input_inner[index]

    if (element.readOnly)
      element.parentElement!.parentElement!.classList.add('input-readonly')
  }
})
</script>

<template>
  <el-input v-bind="$attrs">
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name"></slot>
    </template>
  </el-input>
</template>

<style lang="scss" scoped>
.input-readonly {
  :deep .el-input__wrapper {
    background-color: var(--el-disabled-bg-color);
  }
}
</style>

<style lang="scss">
.el-input-group__append {
  padding: 0px;
}
</style>
