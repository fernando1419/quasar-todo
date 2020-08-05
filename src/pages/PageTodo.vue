<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="(task, key) in getTasks"
        :key="key"
        v-on:click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough': task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label caption class="row justify-end">
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label caption class="row justify-end">
                <small> {{ task.dueTime }} </small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('moduleTasks', ['getTasks'])
    /*
      // another way to do this, and change the getTasks by tasks in the v-for at line 5
      tasks: function() {
        return this.$store.getters['moduleTasks/getTasks']
      }
    */
  }
};
</script>
