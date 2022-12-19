<template>
  <q-page padding v-scroll="onScroll">

    <pre class="q-ma-none container">{{ scrollInfo }}</pre>
    <p v-for="n in 15" :key="n">
      {{ scrollInfo }} <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { debounce } from 'quasar'

const scrollInfo = ref({})
function  onScroll (info) {
  console.log("il y ascrolle")
  scrollInfo.value = info
}

function scrollDebounce(){
  debounce(onScroll, 200)
}


// export default {
//   setup () {
//     return {
//       scrollInfo,
//       onScroll: debounce(onScroll, 200)
//     }
//   }
// }
</script>
