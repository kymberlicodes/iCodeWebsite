<template>
  <div id="app">
    <nav-bar />
    <header-hero-section />
    <categories-section />
  </div>
</template>

<script>
import "../public/stylesheets/main.scss";
const NavBar = () => import("@/components/nav/nav-bar");
const HeaderHeroSection = () =>
  import("@/components/header/header-hero-section");
const CategoriesSection = () =>
  import("@/components/categories/categories-section");

export default {
  components: {
    "nav-bar": NavBar,
    "header-hero-section": HeaderHeroSection,
    "categories-section": CategoriesSection,
  },
};
</script>

<style lang="scss"></style>
