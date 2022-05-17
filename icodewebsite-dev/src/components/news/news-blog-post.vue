<template>
  <article class="news-blog-post">
      <div class="course-image">
          <img :src="news.image" :alt="news.altText" class="news-image" />
      </div>
    <h4 class="title">{{ news.title }}</h4>
    <p class="info">{{ news.description }}</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </article>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.news-blog-post {
  background: #2e3267;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 0.9rem;
  padding-bottom: 4rem;
  position: relative;

  .news-image {
    border-top-left-radius: 0.9rem;
    border-top-right-radius: 0.9rem;
    max-height: 12rem;
    margin-bottom: 3rem;
  }

  .info {
    padding: 1rem 2rem 3rem 2rem;
  }

  .btn {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    margin-left: -79px;
  }

  &:hover {
    box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    .btn {
      background-color: transparent;
      border: 1px solid #fff;
    }
  }
}
</style>
