<template>
  <!-- event modifiers - react only, when clicked directly on element -->
  <div class="backdrop" @click.self="closeModal">
    <!-- dynamic css classes object -->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- getting default slot -->
      <slot>Display that, it nothink appered in default slot</slot>
      <div class="actions">
        <!-- getting named slot -->
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      // emiting custom event
      this.$emit("close");
    },
  },
};
</script>

// style scoped for component
// cannot style named slots (urls) with named styles
<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}

/* https://stackoverflow.com/questions/68041956/vue-scoped-styling-not-working-with-elements-that-have-been-added-inside-a-slot */
:deep(.actions) {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
:deep(.actions a) {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.sale {
  background: crimson;
  color: white;
}
.sale h1 {
  color: white;
}
:deep(.sale .actions) {
  color: white;
}

:deep(.sale .actions a) {
  color: white;
}
</style>