<template>
  <div v-if="!isLoading" class="max-w-[300px]">
    <img
      class="rounded-md mb-2 bg-center bg-[url('https://www.restoclub.ru/uploads/place_thumbnail_big/2/c/9/f/2c9fab279aac7b2104e07ac0007587a1.jpg')]"
      :src="userData.avatar"
      alt="Фото"
    />
    <div class="flex flex-col ">
    <div class="flex justify-between flex-wrap items-center xs:justify-center">
        <span class="font-bold text-2xl xs:text-xl pr-1  ">{{
            userData.first_name + " " + userData.last_name
          }}</span>
      <span class=" font-bold xs:text-xl text-2xl">{{ userData.age + ' ' + 'y.o'}}</span>
    </div>
      <span class="text-center">{{userData.employment.title}}</span>
    </div>
  </div>
</template>

<script>
import api from "../plugins/axios";

export default {
  name: "User",
  data() {
    return {
      userData: {},
      isLoading:true,
    };
  },
  methods: {
    getAge(dateString) {
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
  },
  async mounted() {
   await api("users/random_user ").then(({ data }) => {
      this.userData = data;
      this.userData.age = this.getAge(data.date_of_birth)
    })
    .finally(()=>{
      this.isLoading = false
    })

  },
};
</script>

<style scoped></style>