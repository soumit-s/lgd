<template>
  <div class="tab" :class="TabStyleMap[tab.type]">
    <label class="content">
      <a>{{tab.name}}</a>
      <button style="display: none"></button>
    </label>
  </div>
</template>

<style scoped>

.tab {

  font-family: 'Montserrat', sans-serif;

  padding: 1vw 2vw;

  font-size: 1vw;
}

.content:hover {
  cursor: pointer;
}

.normal {
  font-weight: 300;
}

.menu{
  
}

.highlight {
  color: white;
  background: black;

  border-radius: 4px;

  font-weight: 500;
}

</style>

<script>

import {TabType} from '../../state.js'

export default {
  props: ['tab'],
  data() {
    let TabStyleMap = {}
    Object.getOwnPropertyNames(TabType).forEach(v => {
      TabStyleMap[TabType[v]] = v.toLowerCase()
    })

    return {
      TabStyleMap
    }
  }
}
</script>