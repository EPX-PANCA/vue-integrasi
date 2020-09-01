<template>
  <div class="w-full flex">
    <side-bar />


    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
        <div class="pt-12">
          <h1>INDEX DASHBOARD</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/Sidebar/Index";
export default {
  name: "Dashboard",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.color-tab-navigation {
  color: #4299e1;
}

.main-content {
  background-color: #f6f6f6;
}

.main {
  margin-top: 8%;
  height: 80%;
  width: 90%;
}

.icon-dashboard:hover {
  fill: #4299e1;
}
</style>
