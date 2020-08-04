<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
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
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to the shop',
          completed: false,
          dueDate: '2020/08/05',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Go to the park',
          completed: false,
          dueDate: '2020/08/06',
          dueTime: '14:00'
        },
        {
          id: 3,
          name: 'Feed the cat',
          completed: false,
          dueDate: '2020/08/14',
          dueTime: '10:00'
        }
      ]
    };
  }
};
</script>
