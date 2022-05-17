<template>
  <div id="app">
    <nav-bar />
    <header-hero-section />
    <categories-section />
    <news-section />
    <!-- <map-section />
    <footer-section /> -->
  </div>
</template>

<script>
import "../public/stylesheets/main.scss";
const NavBar = () => import("@/components/nav/nav-bar");
const HeaderHeroSection = () =>
  import("@/components/header/header-hero-section");
const CategoriesSection = () =>
  import("@/components/categories/categories-section");
const NewsSection = () =>
  import("@/components/news/news-section");

export default {
  components: {
    "nav-bar": NavBar,
    "header-hero-section": HeaderHeroSection,
    "categories-section": CategoriesSection,
    "news-section": NewsSection,
  },
};
</script>

<style lang="scss"></style>
