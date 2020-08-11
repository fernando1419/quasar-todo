<template>
  <q-list bordered separator v-if="Object.keys(tasksCompletedProp).length">
    <app-task
      v-for="(task, key) in tasksCompletedProp"
      :key="key"
      :task="task"
      :id="key"
    ></app-task>
  </q-list>
</template>

<script>
import Task from 'components/Tasks/Task.vue';

export default {
  props: ['tasksCompletedProp'],
  components: {
    appTask: Task
  }
};
</script>

<style></style>
