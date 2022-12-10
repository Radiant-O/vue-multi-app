<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Calculator</h1>
      <div class="border shadow w-48 p-2 rounded-lg">
      <div class="border rounded-lg p-2 mb-4">
      <p class="text-3xl text-right mt-4 w-40 overflow-x-hidden h-11" style="direction:rtl">{{currentNum}}</p>
      <div class="h-11">
        <small v-if="selectedOperation ">
          {{ prevNum }} {{ selectedOperation }} {{ currentNum }}
        </small>
      </div>
    </div>
      <div class="grid grid-cols-4 gap-1">
        <button @click="pressed('1')"  class="p-2 w-10 h-10 border rounded shadow">1</button>
        <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded shadow">2</button>
        <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded shadow">3</button>
        <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
        <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded shadow">4</button>  
        <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded shadow">5</button>
        <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded shadow">6</button>
        <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
        <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded shadow">7</button>
        <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded shadow">8</button>
        <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded shadow">9</button>
        <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
        <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded shadow">0</button>
        <button @click="pressed('C')" class="p-2 w-10 h-10 border rounded shadow">C</button>
        <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
        <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import useWindowEvent from '@/utilities/composition/useWindowEvent';
export default {
    setup(){
        const operations = ['+', '-','*','/'];
        const number = ["1","2","3","4","5","6","7","8","9","0"];
        const currentNum = ref(""); 
        const prevNum = ref("");
        const selectedOperation = ref("");  

        function pressed(value){
            if (value === "=" || value === "Enter" ) calculate();
            else if(value === "C") clear();
            else if (operations.includes(value)) applyOperation(value);
            else if (number.includes(value)) appendNumber(value);
        }

        function appendNumber(value){
            currentNum.value = currentNum.value + value;
        }

        function applyOperation(value){
          calculate();
          prevNum.value = currentNum.value;
          currentNum.value = '';
          selectedOperation.value = value
        }

        function calculate(){
          if (selectedOperation.value === "*") multiply();
          else if (selectedOperation.value === "/") divide();
          else if (selectedOperation.value === "-") subtract();
          else if (selectedOperation.value === "+") add(); 

          prevNum.value = "";
          selectedOperation.value = "";
        }
        function multiply(){
          currentNum.value = prevNum.value * currentNum.value 
        }
        function divide(){
          currentNum.value = prevNum.value / currentNum.value 
        }
        function subtract(){
          currentNum.value = prevNum.value - currentNum.value 
        }
        function add(){
          currentNum.value = +prevNum.value + +currentNum.value 
        }

        function clear(){
          currentNum.value = "";
        }

        function handleKeyDown(e){
          pressed(e.key)
          // console.log(e.key);
        }

        useWindowEvent("keydown", handleKeyDown)

        return {currentNum, pressed, prevNum, selectedOperation}
    }
};
</script>

<style></style>
