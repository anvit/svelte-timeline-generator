<script>
    
    /**
     * @type {{ title: string; faicon: string; datetime: Date; body: string; image?: { src: string; alt: string; }; }}
     */
     export let item;
     /**
     * @type {number}
     */
      export let odd;
</script>

<article class={ odd % 2 === 0 ? "timeline-body" : "timeline-body timeline-body--odd"}>
    <h2 class="timeline-body__title">{item.title}</h2>
    <p class="timeline-body__date">{item.datetime.toDateString()}</p>
    <p class="timeline-body__content">{item.body}</p>
    {#if item.image}
        <img class="timeline-body__img" src={item.image.src} alt={item.image.alt}/>
    {/if}
    <i class={`timeline-body__icon fa-solid fas fa-${item.faicon}`}></i>
</article>

<style lang="scss">
    @use '../../styles/partials/variables' as *;
    @use '../../styles/partials/colours' as *;
    @use '../../styles/partials/mixins' as *;

    .timeline-body {
        background-color: $timeline-main-colour;
        margin-right: $timeline-container-offset;
        padding: $timeline-content-padding;
        border-radius: $timeline-content-radius;
        color: $timeline-text-colour;
        box-shadow: 4px 4px black;
        &__title {
            font-size: 1.5rem;
            margin: 0.5rem 0 0.25rem;
        }
        &__date {
            font-style: italic;
            margin: 0.5rem 0 1rem;
            font-size: 0.85rem;
            color: $timeline-date-colour;
        }
        &__content {
            margin: 1rem 0;
        }
        &__img {
            margin: 1rem auto;
            object-fit: contain;
            display: block;
            max-width: 100%;
            border-radius: $timeline-content-radius;
        }
        &__icon {
            content: '';
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            color: $timeline-icon-colour;
            width: $timeline-icon-size;
            height: $timeline-icon-size;
            background-color: $primary;
            position: absolute;
            top: $timeline-top-offset;
            left: calc(100% - ($timeline-icon-size/2) + ($timeline-bar-width / 2));
            border: $timeline-icon-border solid $timeline-main-colour;
            border-radius: 50%;
        }
        &::after {
            display: block;
            content: '';
            width: 0;
            height: 0;
            border-top: $triangle-edge solid transparent;
            border-bottom: $triangle-edge solid transparent;
            border-left: $triangle-edge solid $timeline-main-colour;
            position: absolute;
            top: calc((2 * $triangle-edge) + ($timeline-icon-size / 2) - ($timeline-icon-border));
            right: (2 * $triangle-edge);
        }
        &--odd {
            @include desktop {
                margin-top: calc(0rem - $timeline-stagger-offset);
                margin-right: 0;
                margin-left: $timeline-container-offset;
                .timeline-body__icon {
                    top: $timeline-top-offset - $timeline-stagger-offset; 
                    left: calc( ($timeline-bar-width / 2) - ($timeline-icon-size / 2));
                }
                &::after {
                    border: 0;
                    border-top: $triangle-edge solid transparent;
                    border-bottom: $triangle-edge solid transparent;
                    border-right: $triangle-edge solid $timeline-main-colour;
                    top: calc((2 * $triangle-edge) + ($timeline-icon-size / 2) + ($timeline-icon-border) - $timeline-stagger-offset );
                    left: (2 * $triangle-edge);
                }
            }
        }
    }
</style>