<template>
  <nav id="nav" class="nav-bar">
    <div class="container nav-container">
      <a href="index.html">
        <div class="logo-container"></div>
      </a>
      <ul class="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="programs.html">Programs</a></li>
        <li><a href="locations.html">Locations</a></li>
        <li><a href="courses.html">Contact</a></li>
      </ul>
      <nav-open-button class="nav-btn" />
      <nav-close-button class="nav-btn" />
    </div>
  </nav>
</template>

<script>
const NavOpenButton = () => import("@/components/nav/nav-open-button");
const NavCloseButton = () => import("@/components/nav/nav-close-button");

window.addEventListener("scroll", () => {
  document.getElementById("nav").classList.toggle('window-scroll', window.scrollY > 0);
});

export default {
  components: {
    "nav-open-button": NavOpenButton,
    "nav-close-button": NavCloseButton,
  },
};
</script>

<style lang="scss">
.nav-bar {
  width: 100vw;
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 11;
  background-color: transparent;

  .logo-container {
    content: "";
    background-image: url("../../assets/logo.png");
    width: 179px;
    height: 50px;
  }

  .nav-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-btn {
    display: none;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .nav-menu a {
    font-size: 0.9rem;
    transition: all 400ms linear;
  }

  .nav-menu a:hover {
    color: #424890;
  }

  &.window-scroll {
    background-color: #6363ff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
}
</style>
