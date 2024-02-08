<template>
    <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="border rounded-lg overflow-hidden dark:border-gray-300">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-300">
                        <caption class="px-6 py-4 text-lg font-semibold text-gray-700 text-left">User List</caption>
                        <thead>
                            <tr>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                    ID</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                    User
                                </th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                    Date Of Birth</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                    Email</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                    Job</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                    Country</th>
                                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-300">
                            <tr v-for="user in dataUser" :key="user.id">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{{ user.id }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                    <div class="flex items-center">
                                        <img :src="user.profile_picture" alt="Profile Picture"
                                            class="h-8 w-8 rounded-full mr-2">
                                        {{ user.first_name }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{
                                    formatDate(user.date_of_birth) }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ user.email }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ user.job }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{{ user.country }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                    <button type="button"
                                        class="inline-flex items-center gap-x-2 text-sm font-semibold bg-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 mx-1 my-1 rounded-md">Select</button>
                                    <button type="button"
                                        class="inline-flex items-center gap-x-2 text-sm font-semibold bg-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none px-4 py-2 mx-1 my-1 rounded-md">View
                                        Detail</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
    props: {
        dataUser: Object
    },
    methods: {
        formatDate(dateOfBirth) {
            return dayjs(dateOfBirth).format('YYYY-MM-DD')
        }
    },
}
</script>

<style lang="scss" scoped></style>