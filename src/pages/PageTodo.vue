<template>
  <q-page class="q-pa-md">
    <app-no-tasks v-if="!Object.keys(getTasksTodo).length" />

    <app-tasks-todo :tasksTodoProp="getTasksTodo" v-else />

    <app-tasks-completed
      :tasksCompletedProp="getTasksCompleted"
      v-if="Object.keys(getTasksCompleted).length"
    />

    <div class="absolute-bottom text-center q-ma-lg">
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
      <app-add-task @closeForm="showAddTaskForm = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import TasksTodo from 'components/Tasks/TasksTodo.vue';
import TasksCompleted from 'components/Tasks/TasksCompleted.vue';
import NoTasks from 'components/Tasks/NoTasks.vue';
import AddTask from 'components/Tasks/Modals/AddTask.vue';

export default {
  data() {
    return {
      showAddTaskForm: false
    };
  },
  computed: {
    ...mapGetters('moduleTasks', ['getTasksTodo', 'getTasksCompleted'])
    /*
      // another way to do this (to use the tasks computed prop. change the "getTasks" to "tasks" in the v-for at line 5)
      tasks: function() {
        return this.$store.getters['moduleTasks/getTasks']
      }
    */
  },
  mounted() {
    // listen to the global event using bus comunication with quasar.
    this.$root.$on('showAddTaskForm', () => {
      this.showAddTaskForm = true;
    });
  },
  components: {
    appAddTask: AddTask,
    appTasksTodo: TasksTodo,
    appTasksCompleted: TasksCompleted,
    appNoTasks: NoTasks
  }
};
</script>
