<!-- vue의 최상위 Root 인스턴스 -->
<template>
  <nav>
    <!-- <router-link> : 클릭 가능한 링크를 생성하고, 라우터를 통해 페이지 간의 전환을 해줌 -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!-- <router-view> : 라우팅 될 컴포넌트를 렌더링 (라우팅 설정에 따른 페이지 이동 가능) -->
  <!-- 무조건 router-link 컴포넌트와 따라 붙는 필수적인 컴포넌트임 -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* router-link-exact-active : Vue Router에서 제공하는 클래스 이름 중 하나로, 
 현재 활성화된 라우트에 해당하는 링크 요소를 스타일링하기 위해 사용됨 */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
