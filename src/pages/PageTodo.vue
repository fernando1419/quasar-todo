<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <app-task
        v-for="(task, key) in getTasks"
        :key="key"
        :task="task"
        :id="key"
      ></app-task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from 'components/Tasks/Task.vue';

export default {
  computed: {
    ...mapGetters('moduleTasks', ['getTasks'])
    /*
      // another way to do this (to use the tasks computed prop. change the "getTasks" to "tasks" in the v-for at line 5)
      tasks: function() {
        return this.$store.getters['moduleTasks/getTasks']
      }
    */
  },
  components: {
    appTask: Task
  }
};
</script>
