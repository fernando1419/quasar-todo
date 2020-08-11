<template>
  <q-list bordered separator v-if="Object.keys(tasksTodoProp).length">
    <app-task
      v-for="(task, key) in tasksTodoProp"
      :key="key"
      :task="task"
      :id="key"
    ></app-task>
  </q-list>
</template>

<script>
import Task from 'components/Tasks/Task.vue';

export default {
  props: ['tasksTodoProp'],
  components: {
    appTask: Task
  }
};
</script>

<style></style>
