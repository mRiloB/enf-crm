<script lang='ts' setup>
import { ref } from 'vue'
import { _put } from '@/services/axios'

const retorno = ref("sem retorno")
const _createVoucher = async () => {
  try {
    const ret = await _put({
    name: 'aaaa',
    password: '123',
    server: 'all',
    profile: '1h',
    'limit-uptime': '2d'
  })
  retorno.value = ret
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <v-container>
    <v-btn block size="large" @click="_createVoucher">1h</v-btn>
    <pre class="mt-5">
    {{ retorno }}
    </pre>
  </v-container>
</template>

<style lang='scss' scoped>
</style>
