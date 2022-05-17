<template>
  <div class="news-section">
    <h2>Extra, extra! Read all about us!</h2>
    <div class="container news-container">
        <news-blog-post v-for="item in news" :key="item.id" :news="item" class="blog"/>
    </div>
  </div>
</template>

<script>
const NewsBlogPost = () => import('@/components/news/news-blog-post');
export default {
  components: {
      'news-blog-post': NewsBlogPost
  },

  data() {
    return {
      news: [
        {
          id: 1,
          title: "New Location – Mabank",
          description: "Our latest franchise location will be opening it's doors in Mabank, Texas! Classes begin June 2023.",
          image: require('../../assets/mabank-icode.jpeg'),
          altText: "Interior photo of the latest iCode Franchise in Mabank, Texas!"
        },
        {
          id: 2,
          title: "2022 Superbowl Drone Show",
          description:
            "Our students programmed drones to 'dance' to epic movie soundtracks and made it to the Superbowl Halftime Show!",
          image: require('../../assets/class-picture.jpeg'),
          altText: "Class of children who participated in the Superbowl Halftime Drone Show."
        },
        {
          id: 3,
          title: "Meet the Director: Mir",
          description:
            "Mir started with iCode West Frisco in 2019 as the Branch Director and is making a huge impact in many kid's lives.",
          image: require('../../assets/mir-rizvi.jpeg'),
          altText: "Portrait of Mir Rizvi, director of iCode West Frisco."
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.news-section {
    background-color: #424890;
    padding: 4rem;
    margin-top: 11rem;
    text-align: center;

    h2 {
        margin-bottom: 2rem;
    }

    .news-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}
</style>
