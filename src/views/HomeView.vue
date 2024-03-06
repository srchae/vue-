<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src (@는 src를 의미하는 별칭)
import HelloWorld from "@/components/HelloWorld.vue";

// export 할 때 name은 해당 컴포넌트명을 의미하고, component는 같이 export 되어야 할 컴포넌트를 의미
// 즉, 여기에서는 HomeView.vue를 내보낼 때 HelloWorld.vue도 같이 component로 export 된다.
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
