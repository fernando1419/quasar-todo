<template>
  <div class="q-mt-lg">
    <app-list-header bgColor="bg-green-4">Completed</app-list-header>
    <q-list bordered separator>
      <app-task
        v-for="(task, key) in tasksCompletedProp"
        :key="key"
        :task="task"
        :id="key"
      ></app-task>
    </q-list>
  </div>
</template>

<script>
import Task from 'components/Tasks/Task.vue';
import ListHeader from 'components/Shared/ListHeader.vue';

export default {
  props: ['tasksCompletedProp'],
  components: {
    appTask: Task,
    appListHeader: ListHeader
  }
};
</script>

<style></style>
