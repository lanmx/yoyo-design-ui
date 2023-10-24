<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SliderMenu from './components/layout/SilderMenu.vue';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';

</script>

<template>
  <a-layout>
    <a-layout-header>
      <Header></Header>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="slider">
        <SliderMenu></SliderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content >
          <div class="content">
            <RouterView />
          </div>
        </a-layout-content>
        <a-layout-footer>
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<style>
.arco-layout {
  height: 100vh;
  width: 100vw;
}
.arco-layout-sider {
  padding-top: 50px;
}
.arco-layout-content {
  padding-top: 60px;
  padding-right: 10px;
  padding-left: 10px;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.logo-text {

}
</style>
