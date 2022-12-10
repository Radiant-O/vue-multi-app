<template>
    <Modal>
   <template v-slot:title>
        <h1 class="text-2xl"> Red Modal </h1>
    </template>
    <template v-slot:body>
        <p>Hello</p>
        <section>Modal 2 body</section>
                
    </template>
    </Modal>
</template>

<script>
import Modal from '@/Modal.vue'
export default {
components: {
    Modal
}
}
</script>

<style>

</style>