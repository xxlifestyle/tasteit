<template>
  <div class="bg-[url('https://static.tildacdn.com/tild6662-3535-4365-a461-303532383133/73801a98a2de4e14edd0.jpg')] h-[100%] flex items-center">
    <div class="overflow-y-auto rounded-md 2xs:p-1 xs:p-4 bg-white mt-4 h-[90%] w-10/12 xs:w-11/12 items-center mx-auto flex justify-around flex-wrap" id="wrapper">
      <User></User>
      <BeerSuggestion></BeerSuggestion>
    </div>
  </div>

</template>

<script>
import Header from "./components/Header.vue";
import User from "./components/User.vue";
import BeerSuggestion from "./components/BeerSuggestion.vue";
export default {
  name: "App",
  components: { BeerSuggestion, Header, User },
  data() {
    return {

    };
  },
  computed: {

  },
  watch() {},
  methods: {

  },
  async mounted() {
  },
};
</script>

<style>
@import "./assets/base.css";


</style>
