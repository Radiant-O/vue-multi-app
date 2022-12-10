<template>
  <section class="flex flex-wrap w-full" >
    <div class="m-auto">
        <h1 class="text-2xl my-5">Re-useable modal</h1>
        <Modal v-if="isModal1Open" @close="isModal1Open=false">
            <template v-slot:title>
               <h1 class="text-2xl"> Green Modal</h1>
            </template>
            <template v-slot:body>
                <p>Hello</p>
                <section>Modal 1 body</section>
            </template>
        </Modal>
        <button class="bg-blue-300 border-none text-white shadow mx-2 p-1 rounded" @click="isModal1Open=true">Modal 1</button>
        <button class="bg-blue-300 border-none text-white shadow mx-2 p-1 rounded" @click="isModal2Open=true">Modal 2</button>

        <!-- <Modal v-if="isModal2Open" @close="isModal2Open=false">
           
        </Modal> -->
        <example v-if="isModal2Open" @close="isModal2Open=false" />
        
    </div>
  </section>
</template>

<script>
    import Modal from '../Modal.vue'
    import {ref} from 'vue'
    import Example from './example.vue'
export default {
    components:{Modal, Example},
    setup(){
        const isModal1Open = ref(false)
        const isModal2Open = ref(false)

        return {isModal1Open, isModal2Open}; 
    }
}
</script>

<style>

</style>