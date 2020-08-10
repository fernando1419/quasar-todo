<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Edit Task</div>
      <q-space></q-space>
      <q-btn flat dense round icon="close" v-close-popup />
    </q-card-section>

    <!-- Form to Add a Task -->
    <form v-on:submit="submitForm()">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            label="Task name"
            autofocus
            hint="Provide a task name"
            dense
            :rules="[val => (val && val.length > 0) || 'Field is required.']"
            ref="name"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.name"
                name="close"
                @click="taskToSubmit.name = ''"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueDate"
            dense
            label="Due date"
            hint="Provide a Due Date"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueDate"
                name="close"
                @click="clearDueDate()"
                class="cursor-pointer"
              />
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm" v-if="taskToSubmit.dueDate">
          <q-input
            outlined
            v-model="taskToSubmit.dueTime"
            dense
            label="Due time"
            hint="Provide a Due Time"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                name="close"
                @click="taskToSubmit.dueTime = ''"
                class="cursor-pointer"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <!-- Button to save the task -->
      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['taskProp', 'idProp'],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions('moduleTasks', ['updateTaskAction']),
    submitForm() {
      // console.log('Submitting form..');
      this.$refs.name.validate(); // validates task name field.
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      // console.log('editing task..');
      this.updateTaskAction({
        id: this.idProp,
        updateData: this.taskToSubmit
      });
      this.$emit('closeForm');
    },
    clearDueDate: function() {
      this.taskToSubmit.dueDate = '';
      this.taskToSubmit.dueTime = '';
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.taskProp);
  }
};
</script>

<style></style>
