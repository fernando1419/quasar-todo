<template>
  <div>
    <app-list-header bgColor="bg-orange-4">Todo</app-list-header>
    <q-list bordered separator>
      <app-task
        v-for="(task, key) in tasksTodoProp"
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
  props: ['tasksTodoProp'],
  components: {
    appTask: Task,
    appListHeader: ListHeader
  }
};
</script>

<style></style>
