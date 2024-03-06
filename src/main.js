// 앱이 실행되기 위한 최초 진입점 파일
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 모든 Vue 앱은 createApp 함수를 사용하여 새로운 앱 인스턴스를 생성하는 것으로 시작된다.
createApp(App).use(router).mount("#app");

/* Vue CLI는 해당 Vue 인스턴스를 'public/index.html' 파일 내의
특정 DOM 요소 (id가 app인 요소)에 마운트(mount)한다. */

// 1. Vue 애플리케이션을 생성 (createApp)
// 2. Vue 라우터를 사용 (use)
// 3. #app이라는 DOM 엘리먼트에 애플리케이션을 마운트 (mount)
