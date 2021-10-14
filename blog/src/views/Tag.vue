<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts";

export default {
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    console.log("setup");
    const route = useRoute();
    // tag in filter was not reactive for some reason
    // const tag = route.params.tag;

    const { posts, error, load } = getPosts();
    load();

    const tagPosts = computed(() => {
      return posts.value.filter((el) => el.tags.includes(route.params.tag));
    });
    return { tagPosts, error, posts };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>