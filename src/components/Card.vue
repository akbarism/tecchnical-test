<template>
    <div class="flex justify-center space-x-4">
        <div class=" bg-white rounded overflow-hidden shadow-lg mb-4 mx-auto border border-gray-200 w-1/3">
            <div class="px-6 py-2 flex justify-between items-center">
                <div class="text-sm">Pending</div>
                <div class="bg-gray-200 w-8 h-8 flex items-center justify-center rounded">
                    <Icon icon="mi:switch" class="text-gray-500 w-6 h-6" />
                </div>
            </div>
            <div class="px-6 py-2 mb-1 flex items-end">
                <p class="text-gray-700 text-2xl font-bold">2.480,</p>
                <p class="text-gray-400 text-2xl font-bold">30</p>
            </div>
            <div class="px-6 py-2 flex justify-between items-center bg-gray-200">
                <Icon icon="uil:arrow-growth" :style="{ color: 'green' }" />
                <div class="text-sm text-green-700 ml-1">2,4%</div>
                <div class="flex-1 text-sm text-gray-700 ml-1">Last Month</div>
                <a href="#" class="text-gray-700 text-sm hover:text-gray-700 ml-9">View More</a>
            </div>
        </div>
        <div class=" bg-white rounded overflow-hidden shadow-lg mb-4 mx-auto border border-gray-200 w-1/3">
            <div class="px-6 py-2 flex justify-between items-center">
                <div class="text-sm">Paid</div>
                <div class="bg-gray-200 w-8 h-8 flex items-center justify-center rounded">
                    <Icon icon="mi:switch" class="text-gray-500 w-6 h-6" />
                </div>
            </div>
            <div class="px-6 py-2 mb-1 flex items-end">
                <p class="text-gray-700 text-2xl font-bold">84.310</p>
            </div>
            <div class="px-6 py-2 flex justify-between items-center bg-gray-200">
                <Icon icon="ph:arrow-down-left-bold" :style="{ color: 'red' }" />
                <div class="text-sm text-red-700 ml-1">24%</div>
                <div class="flex-1 text-sm text-gray-700 ml-1">Last Month</div>
                <a href="#" class="text-gray-700 text-sm hover:text-gray-700 ml-9">View More</a>
            </div>
        </div>
        <div class=" bg-white rounded overflow-hidden shadow-lg mb-4 mx-auto border border-gray-200 w-1/3">
            <div class="px-6 py-2 flex justify-between items-center">
                <div class="text-sm">Rejected</div>
                <div class="bg-gray-200 w-8 h-8 flex items-center justify-center rounded">
                    <Icon icon="mi:switch" class="text-gray-500 w-6 h-6" />
                </div>
            </div>
            <div class="px-6 py-2 mb-1 flex items-end">
                <p class="text-gray-700 text-2xl font-bold">12.155</p>
            </div>
            <div class="px-6 py-2 flex justify-between items-center bg-gray-200">
                <Icon icon="uil:arrow-growth" :style="{ color: 'green' }" />
                <div class="text-sm text-green-700 ml-1">2,4%</div>
                <div class="flex-1 text-sm text-gray-700 ml-1">Last Month</div>
                <a href="#" class="text-gray-700 text-sm hover:text-gray-700 ml-9">View More</a>
            </div>
        </div>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue'
export default {
    components: {
        Icon
    }
}
</script>
  
<style></style>
  