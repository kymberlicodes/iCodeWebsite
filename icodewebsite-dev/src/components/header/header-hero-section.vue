<template>
  <header class="header-hero-section">
    <div class="container header-container">
      <div class="header-left">
        <h1>Hands-On STEM Education and Coding Classes for Kids</h1>
        <p>
          Get kids off their phones and into one of our fun STEM education and
          coding classes for kids!
        </p>
        <button class="btn btn-primary" href="location.html">
          Find a Location
        </button>
      </div>
      <div class="header-right">
        <img src="@/assets/hero-image.png" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-hero-section {
  position: relative;
  top: 5rem;
  overflow: hidden;
  height: 70vh;
  margin-bottom: 5rem;

  .header-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5rem;
    height: 100%;

    .header-left {
      p {
        margin: 1rem 0 2.4rem;
      }
    }
  }
}
</style>
