// 앱의 라우팅 설정을 위한 페이지
// 보통 main.js 페이지에서 이루어지는 경우가 대부분이지만
// vue-router를 설치하면 자동으로 router 디렉토리에 index.js로 라우팅 설정이 되어짐

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // * Dynamic import와 code splitting //
    // 동적 임포트로 component를 선언해줌
    component: () => import("../views/AboutView.vue"),
  },
];

// createRouter 함수를 통해 router 인스턴스 생성
// => routes 배열을 인자로 받아 경로와 컴포넌트 간의 매핑 정보 렌더링을 수행
// createWebHistory 함수를 통해 HTML5 History 모드를 사용하는 히스토리 객체를 생성

// 여기서 history는 쉽게 말해 URL 변경 관리를 도움
// process.env.BASE_URL는 Vue CLI 프로젝트에서 사용되는 설정 변수로,
// 프로젝트의 기본 URL 경로를 나타냄

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
