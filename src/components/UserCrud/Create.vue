<template>
  <button class="px-2 py-1 border rounded mb-2" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent="submitForm">
          <div class="p-2">
            <label for="">Username</label>
            <input
              type="text"
              class="w-full p-2 rounded border"
              v-model="state.form.name"
              placeholder="Username"
            />
          </div>
          <div class="p-2">
            <label for="">Email</label>
            <input
              type="email"
              class="w-full p-2 rounded border"
              v-model="state.form.email"
              placeholder="User Email"
            />
          </div>
          <div class="p-2">
            <label for="">Image Url</label>
            <input
              type="text"
              class="w-full p-2 rounded border"
              v-model="state.form.avatar"
              placeholder="Avatar Url"
            />
          </div>
          <div class="p-2">
            <input
              type="submit"
              value="Create"
              class="w-full p-2 rounded border hover:bg-gray-300"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { ref, reactive } from "vue";
import Modal from "@/Modal.vue";
import axios from "../../utilities/composition/axios";
export default {
  components: {
    Modal,
  },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submitForm() {
      const { data } = await axios.post("/users", state.form);
      emit("new-user-added", data);
      state.form.email = "";
      state.form.name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { isModalOpen, submitForm, state };
  },
};
</script>

<style></style>
