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

    <div class="absolute-bottom text-right q-ma-lg">
      <q-btn
        @click="showAddTaskForm = true"
        round
        size="20px"
        color="primary"
        glossy
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTaskForm">
      <app-add-task />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from 'components/Tasks/Task.vue';
import AddTask from 'components/Tasks/Modals/AddTask.vue';

export default {
  data() {
    return {
      showAddTaskForm: true
    };
  },
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
    appTask: Task,
    appAddTask: AddTask
  }
};
</script>
