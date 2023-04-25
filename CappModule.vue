<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref, onMounted, onUpdated } from "vue";

const isAdmin = ref(false);
const notAdmin = computed(() => !isAdmin.value);
const route = useRoute();

const checkAdmin = () => {
  // @ts-ignore
  isAdmin.value = route?.name?.indexOf("admin.") === 0 ? true : false;
};

onMounted(() => {
  checkAdmin();
});

onUpdated(() => {
  checkAdmin();
});
</script>

<template>
  <div>
    <div v-if="notAdmin">
      <h2>Blog</h2>
      <RouterLink to="/blog">Blog Home</RouterLink>
      |
      <RouterLink :to="{ name: 'blog.main' }">Blog Home(n)</RouterLink>
      |
      <RouterLink :to="{ name: 'blog.post', params: { id: '2' } }">Post</RouterLink>
      |
      <RouterLink :to="{ name: 'admin.blog.main' }">Admin</RouterLink>
    </div>
    <router-view />
  </div>
</template>
