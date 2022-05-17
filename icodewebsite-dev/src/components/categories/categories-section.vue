<template>
  <div class="categories-section">
    <div class="categories-container">
      <div class="container categories-left">
        <h1>Stem and Coding Camps for Kids and Teens</h1>
        <p>
          Whether it's summer, spring break, or just a school holiday, we've got
          a camp for that!
        </p>
        <a href="#" class="btn btn-primary">Request Info</a>
      </div>
      <div class="container categories-right">
        <category-course
          v-for="course in courses"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </div>
</template>

<script>
const CategoryCourse = () => import("@/components/categories/category-course");

export default {
  components: {
    "category-course": CategoryCourse,
  },

  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Battle Bots",
          description: "Build your own battlebot and put it to the test!",
          icon: "robot",
        },
        {
          id: 2,
          title: "Java with Minecraft",
          description:
            "Build your own mods for your Minecraft server with Java!",
          icon: "brackets-curly",
        },
        {
          id: 3,
          title: "Cryptocurrencies",
          description:
            "Dive into the world of crypto, smart contracts, and more!",
          icon: "bitcoin-circle",
        },
        {
          id: 4,
          title: "Youtube Production",
          description: "Become the star of your own youtube channel!",
          icon: "clapper-board",
        },
        {
          id: 5,
          title: "Music Production",
          description:
            "Record your first original single and explore Garage Band!",
          icon: "headphones",
        },
        {
          id: 6,
          title: "Android Apps",
          description: "Develop your own app for your android phone!",
          icon: "android-alt",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.categories-section {
  background-color: #2e3267;
  padding: 50px 0;
  height: 26rem;

  h1 {
    line-height: 1;
    margin-bottom: 3rem;
  }

  .container {
    width: 75%;
  }

  .categories-container {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  .categories-left {
    margin-right: 0rem;
  }

  .categories-left p {
    margin: 1rem 0 3rem;
  }

  .categories-right {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  .btn-primary {
    background-color: #00bf8e;
    &:hover {
      background-color: transparent;
    }
  }
}
</style>
