<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>()
const count = ref(0)
const inputcount = ref(0)
const input = ref('element-plus')
const input1 = ref('element-plus1234')
const input2 = ref('')
const input3 = ref('')
const curDate = ref('')
const curDate1 = ref('')
const toast = () => {
  ElMessage.success('Hello')
}
</script>

<template>
  <h1>資料、訊息 {{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for more
    information.
  </p>
  <p>姓名電話地址</p>

  <!-- example components -->
  <el-button @click="toast">El Message</el-button>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <el-button type="success" @click="count++">count is: {{ count }}</el-button>
  <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
  <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
  <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  <br />
  <elPlus-input v-model="input" style="width: 200px; margin: 20px" />
  <elPlus-input v-model="input1" readonly style="width: 200px; margin: 20px" />
  <elPlus-input v-model="inputcount" style="width: 200px; margin: 20px">
    <template #append>
      <el-button icon="Search" @click="inputcount++" />
    </template>
  </elPlus-input>
  <elPlus-input v-model="input1" disabled style="width: 200px; margin: 20px" />
  <el-tag>資料、訊息 1</el-tag>

  <el-form label-width="150px">
    <el-form-item label="姓名、電話、地址">
      <el-input v-model="input3" />
    </el-form-item>
  </el-form>
  <br />
  <el-date-picker v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>
  <el-date-picker v-model="curDate" align="right" type="dates" placeholder="Pick a day" />

  <p>For example, we can custom primary color to 'green'.</p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a href="https://github.com/element-plus/element-plus-vite-starter" target="_blank"
      >element-plus-vite-starter</a
    >
    | On demand Example:
    <a href="https://github.com/element-plus/unplugin-element-plus" target="_blank"
      >unplugin-element-plus/examples/vite</a
    >
  </p>
</template>

<style lang="scss" scoped>
.el-button {
  margin: 4px;
}
</style>
