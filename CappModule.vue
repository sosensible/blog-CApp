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
    <h2 v-if="notAdmin">Blog</h2>
    <router-view />
  </div>
</template>
