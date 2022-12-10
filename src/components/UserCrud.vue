<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <Create @new-user-added="addUser" />
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
              <th class="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <button
                  class="px-2 py-1 bg-red-600 rounded text-white"
                  @click="destroy(user.id)"
                >
                  Delete</button
                ><Update @new-user-updated="updatedUser"/>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="px-3 py-2 rounded mt-2"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-200' : 'hover:shadow'"
          >
            Prev
          </button>

          <button
            class="px-3 py-2 rounded hover:shadow mt-2"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-200'
                : 'hover:shadow'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../utilities/composition/axios";
import { onMounted, reactive, ref } from "vue";
import Modal from "@/Modal.vue";
import Create from "./UserCrud/Create.vue";
import Update from "./UserCrud/Update.vue";
export default {
  components: {
    Modal,
    Create,
    Update,
  },
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get(`/users`);

      state.users = data;
      // console.log(state.users[0].name)
    });

    async function next() {
      const { data } = await axios.get(`/users?page=2`);

      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);

      state.users = data;
    }

    async function destroy(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter((user) => user.id !== id);
    }

    function addUser(data) {
      state.users.push(data);
    }

    function updatedUser(){
      state.users.push(data)
    }

    return { state, next, prev, destroy, addUser };
  },
};
</script>
