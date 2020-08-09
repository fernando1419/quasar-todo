<template>
  <q-item
    @click="
      updateTaskAction({ id: id, updateData: { completed: !task.completed } })
    "
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

    <q-item-section v-if="task.dueDate" side>
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

    <q-item-section side>
      <q-btn
        flat
        round
        dense
        color="red"
        icon="delete"
        @click.stop="promptToDelete(id)"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['task', 'id'], // 'id' prop. is created for handling update and delete operations later on.
  methods: {
    ...mapActions('moduleTasks', ['updateTaskAction', 'deleteTaskAction']),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Really delete?',
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          // console.log('Deleted!.');
          this.deleteTaskAction(id);
        });
    }
  }
};
</script>

<style></style>
