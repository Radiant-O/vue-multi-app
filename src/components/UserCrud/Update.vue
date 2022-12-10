<template>
    <button class="px-2 py-1 ml-1 bg-green-600 rounded text-white" @click="updateUserModal=true">Update</button>
    <teleport to="body">
      <Modal v-if="updateUserModal" @close="updateUserModal=false">
          <template #title>
              Update Your Details
          </template>
          <template #body>
              <form @submit.prevent="updateForm ">
                  <div class="p-2">
                      <label for="">Username</label>
                      <input type="text" class="w-full p-2 rounded border"
                      v-model="state.form.name"
                      placeholder="Enter New Username"
                      />
                  </div>
                  <div class="p-2">
                      <label for="">Email</label>
                      <input type="email" class="w-full p-2 rounded border" 
                      v-model="state.form.email"
                      placeholder="Enter New Email"
                      />
                  </div>
                  <div class="p-2">
                      <label for="">Image Url</label>
                      <input type="text" class="w-full p-2 rounded border"
                      v-model="state.form.avatar"
                      placeholder="Change Avatar Url"
                      />
                  </div>
                  <div class="p-2">
                      <input type="submit"
                      value="Update" class="w-full p-2 rounded border hover:bg-gray-300"/>
                  </div>
              </form>
          </template>
      </Modal>
    </teleport>
  </template>
  
  <script>
    import axios from '@/utilities/composition/axios'
  import Modal from '@/Modal.vue'
  import { ref, reactive } from "vue"
  export default {
      components:{
          Modal
      },
      setup(_, {emit}){
          const updateUserModal = ref(false);
          const state = reactive({
            form: {
                name:"",
                email:"",
                avatar:"",
            }
        });

        // onMounted(async () => {
        //     const prefill = await axios.get(`/users/${id}`)

        //     console.log(prefill.state.form)
        // })

    async function updateForm() {
      await axios.put(`/users/${id}`, state.users);
      emit("new-user-updated", data);
      state.form.email = state.users.email;
      state.form.name = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }
  
    return{updateUserModal, state, updateForm}
}
  }
  </script>
  
  <style>
  
  </style>