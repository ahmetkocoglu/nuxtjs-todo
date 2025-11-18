<script setup>
import { ref, onMounted } from "vue";

const todos = ref([]);
const newTodo = ref("");

const fetchTodos = async () => {
  todos.value = await $fetch("/api/todos");
};

const addTodo = async () => {
  if (!newTodo.value) return;

  await $fetch("/api/todos", {
    method: "POST",
    body: { title: newTodo.value }
  });

  newTodo.value = "";
  fetchTodos();
};

const toggleTodo = async (todo) => {
  await $fetch(`/api/todos/${todo._id}`, {
    method: "PUT",
    body: { completed: !todo.completed }
  });

  fetchTodos();
};

const deleteTodo = async (todo) => {
  await $fetch(`/api/todos/${todo._id}`, {
    method: "DELETE"
  });

  fetchTodos();
};

onMounted(fetchTodos);
</script>

<template>
  <div class="p-5">
    <h1>Todo App</h1>

    <input v-model="newTodo" placeholder="Yeni todo" />
    <button @click="addTodo">Ekle</button>

    <ul>
      <li v-for="todo in todos" :key="todo._id">
        <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)" />
        {{ todo.title }}
        <button @click="deleteTodo(todo)">Sil</button>
      </li>
    </ul>
  </div>
</template>
