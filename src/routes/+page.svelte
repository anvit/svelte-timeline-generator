<script>
    import TimelineItem from './timeline-item/timeline-item.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="timeline">
    <ul class="timeline__container">
        {#each data.entries as item, i}
            <li class="timeline__items">
                <TimelineItem item={item} odd={i}/>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/colours' as *;
    .timeline {
        width: 100%;
        margin: 0 auto 2rem;
        position: relative;
        @include desktop {
            width: 90%;
        }
        &__items {
            width: 95%;
            padding: 2rem;
            position: relative;
            @include desktop {
                width: 50%;
            }
        }
        &__items:nth-child(2n) {
            @include desktop {
                float: right;
            }
        }
        &__container {
            &::before {
                display: block;
                content: '';
                height: 100ch;
                width: 5px;
                background-color: gray;
                border-radius: 5px;
                position: absolute;
                left: 95%;
                top: 1rem;
                z-index: -1;
                @include desktop {
                    left: 50%;
                }
            }
        }
    }
</style>