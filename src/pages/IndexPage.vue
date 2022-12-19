<template>
  <q-page padding v-scroll="onScroll">

    <pre class="q-ma-none container">{{ scrollInfo }}</pre>
    <p v-for="n in 15" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const scrollInfo = ref({})
    // function onScroll (position) {
    //   console.log(position)
    //   // when this method is invoked then it means user
    //   // has scrolled the page to `position`
    //   //
    //   // `position` is an Integer designating the current
    //   // scroll position in pixels.
    // }

    return {
      scrollInfo,
      onScroll (info) {
        scrollInfo.value = info
      }
    }
  }
})
</script>
