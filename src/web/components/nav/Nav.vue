<template>
  <nav class="row navbar">
    <div class="col-3 logo">
      LEDGER DOMAIN
    </div>
    <div class="tabs col-9">
      <div class="tab" v-for="tab in tabs" :key="tab.id">
        <Tab :tab="tab" />
      </div>
    </div>
  </nav>
</template>

<style scoped>

.tabs {
  display: flex;
  flex-direction: row;
  justify-content: right;

  padding-right: 40px;
}

.tab {
  margin: 0 10px;
}

.navbar {
  padding: 2vh;

  border-style: solid;
  border-width:  0 0 1px 0;
  border-color: #eeeeeeee;
}

.logo {
  display: flex;
  align-items: center;

  padding: 1vw 2vw;

  font-family: 'Tapestry', cursive;
  font-size: 1vw;
}

</style>

<script>

import Tab from './Tab.vue'
import {GlobalState} from '../../state.js'

export default {
  components: {Tab},
  data() {
    return {
      tabs: GlobalState.tabs.options
    }
  }
}
</script>