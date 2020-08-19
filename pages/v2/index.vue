<template>
    <div class='h-screen w-screen overflow-y-auto'>
        <LandingContent />
        <StateContent>
            <template v-slot:stats>
                <State
                    title="unique users"
                    :count="10"
                >
                    <template v-slot:icon>
                        <i class="fas fa-users text-2xl text-focus-yellow"></i>
                    </template>
                </State>
                <State
                    title="tasks created"
                    :count="1000"
                >
                    <template v-slot:icon>
                        <i class="fas fa-tasks text-2xl text-focus-yellow"></i>
                    </template>
                </State>
                <State
                    title="on-going tasks"
                    :count="500"
                >
                    <template v-slot:icon>
                        <i class="fas fa-list text-2xl text-focus-yellow"></i>
                    </template>
                </State>
            </template>
        </StateContent>
        <AboutContent/>
        <SiteMapContent>
            <template v-slot:sitemaps>
                <Contact />
            </template>
        </SiteMapContent>
    </div>
</template>
<script>
export default {
    layout: 'landing_page'
}
</script>