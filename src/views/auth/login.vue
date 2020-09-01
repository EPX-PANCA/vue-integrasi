<template>
<div class="login">




    <div class="w-full flex flex-wrap">

        <!-- Login Section -->
        <div class="mx-auto w-1/2 flex flex-col rounded overflow-hidden shadow-lg bg-gray-100">

            <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                    <div class="flex flex-col pt-4">
                        <label for="username" class="text-lg">Username</label>
                        <input type="text" id="username" placeholder="Username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" id="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
      
                    
                    <input type="submit" value="Log In" class="bg-teal-500 text-white font-bold text-lg hover:bg-teal-700 p-2 mt-8"/>
                
         
                </form>
                <div class="text-center pt-12 pb-12">
                    <p>Don't have an account? <router-link class="underline font-semibold" :to="{name:'Register'}">Register here.</router-link></p>
                </div>

                  <div class="text-center pt-12 pb-12">
                    <p>Tes Ke Dashboard <router-link class="underline font-semibold" :to="{name:'IndexDashboard'}">Dashboard</router-link></p>
                </div>
            </div>

        </div>
    </div>


</div>
</template>