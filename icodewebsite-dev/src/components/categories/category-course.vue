<template>
  <article class="category-course">
    <span class="category-icon">
      <i class="uil" :class="course.icon ? `uil-${course.icon}` : ''"></i>
    </span>
    <h5>{{ course.title }}</h5>
    <p>{{ course.description }}</p>
  </article>
</template>

<script>
export default {
  name: "category-course",

  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.category-course {
  background-color: #424890;
  padding: 2rem;
  border-radius: 2rem;
  transition: all 400ms ease;

  &:nth-child(2) .category-icon {
    background-color: #f7c94b;
  }

  &:nth-child(3) .category-icon {
    background-color: #00bf8e;
  }

  &:nth-child(4) .category-icon {
    background-color: #f75842;
  }

  &:nth-child(6) .category-icon {
    background-color: #f7c94b;
  }

  .category-icon {
    background: #6363ff;
    padding: 0.7rem;
    border-radius: 0.9rem;
  }

  h5 {
    margin: 2rem 0 1rem;
  }

  p {
    font-size: 0.85rem;
  }

  &:hover {
    box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.3);
  }
}
</style>
