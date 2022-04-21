<template>
<div class=" w-[300px] px-4 flex flex-col">
  <h1 class="text-2xl font-bold my-2">Suggested beer</h1>
  <ul>
    <li  class="first-letter:uppercase 2xs:whitespace-normal  xs:whitespace-nowrap whitespace-nowrap" :key="item[0]" v-for="item in beerData"> <b>{{item[0]}}</b>: {{item[1]}}</li>
  </ul>
  <button :disabled="isLoading" @click="fetchData" class=" mt-2 bg-[#310062] text-white rounded-md w-[100%] h-12">I don't like this!</button>
</div>
</template>

<script>
import api from "../plugins/axios";

export default {
  name: "BeerSuggestion",
  data(){
    return{
      beerData:{},
      isLoading: false,
    }
  },
  methods:{
     fetchData(){
      this.isLoading = true
       api('beer/random_beer')
        .then(({data})=>{
          this.beerData = data
          delete this.beerData.uid
          delete this.beerData.id
          this.beerData = Object.entries(this.beerData)
          console.log(this.beerData)
        })
      .finally(()=>{
        this.isLoading = false
      })
    }
  },
  mounted(){
    api('beer/random_beer')
    .then(({data})=>{
      this.beerData = data
      delete this.beerData.uid
      delete this.beerData.id
      this.beerData = Object.entries(this.beerData)
      console.log(this.beerData)
    })
  },
};
</script>

<style scoped>

</style>