<template>
    <div>
        <MinimalistHeader/>

        <MinimalistMenu />

        <main class="mt-10 w-3/4 mx-auto">
            <div class="mt-4">
                {{ description }}
            </div>

            <div class="mt-10">
                <MinimalistListing title="Last Posts" />

                <div class="mt-4">
                    <NuxtLink class="underline " to="/archives">
                        Read all posts
                    </NuxtLink>
                </div>
            </div>
        </main>
        <MinimalistFooter />
    </div>
</template>
<script setup lang="ts">
import MinimalistMenu from '~/components/MinimalistMenu.vue'
import MinimalistFooter from '~/components/MinimalistFooter.vue'
import MinimalistHeader from '~/components/MinimalistHeader.vue'
import MinimalistListing from '~/components/content/MinimalistListing.vue'

defineProps<{
    doc: unknown;
}>()

const config = useAppConfig()
const description = config.description || 'A minimalist theme for Bloggrify'
</script>
<style>
body {
    @apply bg-white dark:bg-slate-900 dark:text-white;
}
</style>
