<template>
  <div class=" w-full md:w-[365px] lg:w-[460px] flex flex-col p-3 sm:px-8 md:p-5 lg:p-[47px] bg-white dark:bg-[#17294E]">
    <!--===== Aside header =====-->
    <Head />

    <!--===== Current Location =====-->
    <CurrentLocation />
    <!--===== More Location =====-->
    <p v-if="searchBar">
    <MoreLocation v-for="i in 2" :key="i" :index="i - 1" />
    </p>
  
  </div>
</template>

<script>
import Head from "./wrapper/_head.vue";
import CurrentLocation from "./wrapper/_currentLocation.vue";
import MoreLocation from "./wrapper/_moreLocation.vue";
import _airQuality from '../theMain/wrapper/_airQuality.vue';
// import { Flags } from '../../utils/flags'

export default {
  data () {
    return {
      // isDev: process.env.NODE_ENV === 'development',
      // searchBar: Flags.searchBar.isEnabled(),
      // airQuality: Flags.airQuality.isEnabled(),
    }
  },  
  name: "aside-wrapper",
  components: {
    Head,
    CurrentLocation,
    MoreLocation,
    _airQuality,
  },
};
</script>

<style></style>
