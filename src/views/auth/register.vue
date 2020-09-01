<template>
<div class="register">




    <div class="w-full flex flex-wrap">

        <!-- Register Section -->
        <div class="mx-auto w-1/2 flex flex-col rounded overflow-hidden shadow-lg bg-gray-100">
           <div role="alert" class="mb-4" v-if="alert.length>0">
                <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">Alert</div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>{{alert.join(",\r\n")}}</p>
            </div>
        </div>

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <form class="flex flex-col pt-3 md:pt-8" @submit="checkForm">
                    <div class="flex flex-col pt-4">
                        <label for="fullname" class="text-lg">Full Name</label>
                        <input type="text" id="fullname" placeholder="Full name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="full_name"
                        />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="username" class="text-lg">Username</label>
                        <input type="text" id="username" placeholder="Username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="username"
                        />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="password"
                        />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="email"
                        />
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="phonenumber" class="text-lg">Phone Number</label>
                        <input type="text" id="phonenumber" placeholder="+62....." class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                        v-model="phone_number"
                        />
                    </div>
    
                    <input type="submit" value="Register" class="bg-teal-500 text-white font-bold text-lg hover:bg-teal-700 p-2 mt-8">
                </form>
                <div class="text-center pt-12 pb-12">
                    <p>Already have an account? <router-link class="underline font-semibold" :to="{name:'Login'}">Log in here.</router-link></p>
                </div>
            </div>
        </div>
    </div>


</div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "register",
  data() {
    return {
      full_name: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
      alert: [],
    };
  },
  methods: {
    checkForm(e) {
      let error = [];

      if (this.full_name === "") error.push("Full name Required");
      if (this.username === "") error.push("Username Required");
      if (this.password === "") error.push("Password name Required");
      if (this.email === "") error.push("email name Required");
      if (this.phone_number === "") error.push("Phone number Required");
      console.log({ error });
      if (error.length > 0) {
        this.alert = error;
      } else {
        const payload = {
          full_name: this.full_name,
          username: this.username,
          password: this.password,
          email: this.email,
          phone_number: this.phone_number,
        };

        this.registerAction(payload);
      }
      e.preventDefault();
      return false;
    },
    ...mapActions(["registerAction"]),
  },
  computed: {},
};
</script>