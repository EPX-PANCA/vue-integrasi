<template>
  <div class="w-full flex">
    <side-bar />
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
        <div class="w-4/5 mx-auto pt-8">
            <h1>User List</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/Sidebar/Index";
export default {
  name: "User",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>