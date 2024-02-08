<template>
    <div class="">
        <div
            class="bg-white w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 h-screen fixed left-0 top-0 flex flex-col justify-between border-r border-gray-300">
            <div class="mr-auto">
                <div class="text-black py-4 px-2 text-center font-bold text-2xl">heylink.</div>
                <button
                    class="flex items-center justify-start bg-white hover:bg-blue-200 text-gray-800 py-1 px-8 rounded mt-1 ml-5 text-sm">
                    <Icon class="mr-1" icon="ic:twotone-add-chart" height="auto" />
                    Dashboard
                </button>
                <button
                    class="flex items-center justify-start bg-white hover:bg-blue-200 text-gray-800 py-1 px-8 rounded mt-1 ml-5 text-sm">
                    <Icon class="mr-1" icon="material-symbols:chart-data-rounded" height="auto" />
                    Overview
                </button>
            </div>
        </div>
    </div>
    <div class="sm:ml-24 md:ml-32 lg:ml-48 xl:ml-64 p-4 bg-white border-b border-gray-300">
        Conversion
    </div>
    <div class="sm:ml-24 md:ml-32 lg:ml-48 xl:ml-64 p-4">
        <Card />
    </div>
    <div class="sm:ml-24 md:ml-32 lg:ml-48 xl:ml-64 p-4">
        <Table :dataUser="dataUser" />
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue'
import Card from './Card.vue'
import Table from './Table.vue';

export default {
    components: {
        Icon,
        Card,
        Table
    },
    props: {
        dataUser: Object
    }
}
</script>
  
<style scoped>
/* You can add scoped styles here if needed */
</style>
  