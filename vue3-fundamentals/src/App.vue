<script>
// https://www.sitepoint.com/vue-3-beginner-guide/ + docs
export default {
  data() {
    return {
      counter: 0,
      title: "My To Do App",
      test: true,
      newTask: "",
      logoURL:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80",
      logoCaption: "A photo by Kelly Sikkema on Unsplash showing post-it notes",
      tasks: [
        { id: 1, name: "Learn Vue JS", finished: true },
        { id: 2, name: "Build a Vue application", finished: false },
        { id: 3, name: "Write an article about Vue JS", finished: false },
      ],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length < 1) return;

      this.tasks.push({
        id: this.tasks.length + 1,
        name: this.newTask,
        finished: false,
      });

      this.newTask = "";
    },
    removeTask(taskID) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskID;
      });
    },
    finishTask(task) {
      task.finished = !task.finished;
    },
    counterPlus() {
      this.counter++;
    },
  },
  computed: {
    allTasks() {
      return this.tasks.length;
    },
    latest() {
      // reverse mutates array, computed props cannot do that
      return [...this.tasks].reverse();
    },
  },
};
</script>

<template>
  <h3 v-show="test">{{ counter }}</h3>
  <button @click="counterPlus">Dodaj</button>
  <!-- v-bind:src === :src -->
  <img v-bind:src="logoURL" :alt="logoCaption" width="200" height="200" />
  <h1>{{ title }}</h1>
  <h2>Add a new task</h2>

  <div>
    <input
      type="text"
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Add a new task"
    />
    <!-- v-on:click === @click -->
    <button v-on:click="addTask" :disabled="newTask.length < 1">
      Add task
    </button>
  </div>

  <div v-if="newTask.length > 0">
    <h3>New task preview</h3>
    <p>{{ newTask }}</p>
  </div>

  <ul>
    <li
      v-for="(task, index) in latest"
      :key="task.id"
      @click="finishTask(task)"
      :class="{ strikeout: task.finished }"
    >
      {{ index + 1 }}. {{ task.name }}

      <div v-if="task.finished">
        <button @click="removeTask(task.id)">Delete task</button>
      </div>
    </li>
  </ul>
  <span
    >You have {{ allTasks }} {{ allTasks > 1 ? "tasks" : "task" }} at the
    moment</span
  >
</template>

<style>
.strikeout {
  text-decoration: line-through;
}
</style>
