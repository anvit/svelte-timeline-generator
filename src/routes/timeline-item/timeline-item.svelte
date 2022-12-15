<script>
    
    /**
     * @type {{ title: string; datetime: string; body: string; image?: { src: string; alt: string; }; categories: string[]; }}
     */
     export let item;
     /**
     * @type {number}
     */
      export let odd;
</script>

<article class={ odd % 2 === 0 ? "timeline__body" : "timeline__body timeline__body--odd"}>
    <h2>{item.title}</h2>
    <p>{item.datetime}</p>
    <p>{item.body}</p>
    {#if item.image}
        <img src={item.image.src} alt={item.image.alt}/>
    {/if}
    <p>{item.categories}</p>
    <i class="timeline__icon"></i>
</article>

<style lang="scss">
    @use '../../styles/partials/colours' as *;
    @use '../../styles/partials/mixins' as *;

    .timeline__icon {
        content: '';
        display: block;
        width: 3rem;
        height: 3rem;
        background-color: $primary;
        position: absolute;
        top: 3rem;
        left: calc(100% - 1.5rem + 2.5px);
        border: 3px solid gray;
        border-radius: 50%;
    }
    .timeline__body {
        background-color: gray;
        margin-right: 1rem;
        padding: 2rem;
        border-radius: 3px;
        &::after {
            display: block;
            content: '';
            width: 0;
            height: 0;
            border-top: 1rem solid transparent;
            border-bottom: 1rem solid transparent;
            border-left: 1rem solid gray;
            position: absolute;
            top: calc(3rem + 6px);
            right: 2rem;
        }
        &--odd {
            @include desktop {
                margin-top: -10rem;
                margin-right: 0;
                margin-left: 1rem;
                .timeline__icon {
                    top: -7rem; 
                    left: calc(-1.5rem + 2.5px);
                }
                &::after {
                    border: 0;
                    border-top: 1rem solid transparent;
                    border-bottom: 1rem solid transparent;
                    border-right: 1rem solid gray;
                    top: calc(9px - 7rem);
                    left: 2rem;
                }
            }
        }
    }
</style>