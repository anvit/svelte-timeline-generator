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

<article class={ odd % 2 === 0 ? "timeline-body" : "timeline-body timeline-body--odd"}>
    <h2>{item.title}</h2>
    <p>{item.datetime}</p>
    <p>{item.body}</p>
    {#if item.image}
        <img src={item.image.src} alt={item.image.alt}/>
    {/if}
    <p>{item.categories}</p>
    <i class="timeline-icon"></i>
</article>

<style lang="scss">
    @use '../../styles/partials/variables' as *;
    @use '../../styles/partials/colours' as *;
    @use '../../styles/partials/mixins' as *;

    .timeline-icon {
        content: '';
        display: block;
        width: $timeline-icon-size;
        height: $timeline-icon-size;
        background-color: $primary;
        position: absolute;
        top: $timeline-top-offset;
        left: calc(100% - ($timeline-icon-size/2) + ($timeline-bar-width / 2));
        border: $timeline-icon-border solid $timeline-main-colour;
        border-radius: 50%;
    }
    .timeline-body {
        background-color: $timeline-main-colour;
        margin-right: $timeline-container-offset;
        padding: $timeline-content-padding;
        border-radius: $timeline-content-radius;
        color: $timeline-text-colour;
        box-shadow: 4px 4px black;
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
                .timeline-icon {
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