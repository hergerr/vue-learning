<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <!-- listenig to custom event emited in Modal -->
    <Modal theme="sale" @close="toggleModal">
      <!-- passing default slot -->
      <h1>Top giveaway</h1>
      <p>Nimm bevor es zu spät sein wird</p>
      <!-- passing named slot -->
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
    </Modal>
  </div>

  <!-- second modal -->
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Hello dog</h1>
    </Modal>
  </div>
  <!-- event modifier (alt) -->
  <button @click.alt="toggleModal">open modal 1 (alt + click)</button>
  <button @click="toggleModalTwo">open modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "First Vue App",
      header: "Sign up for the giveaway",
      text: "Kauf was",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      console.log("toggle");
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
