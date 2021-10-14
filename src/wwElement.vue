<template>
    <div class="ww-snipcart-button" :class="{ editing: isEditing, selected: isSelected }">
        <wwElement
            v-bind="content.button"
            class="snipcart-add-item"
            :data-item-id="content.id"
            :data-item-url="content.url"
            :data-item-price="content.price"
            :data-item-description="content.description"
            :data-item-image="content.image"
            :data-item-name="content.name"
        >
        </wwElement>

        <!-- wwEditor:start -->
        <div class="ww-snipcart-button__menu">
            <wwEditorIcon small name="fontawesome/solid/shopping-cart" />
        </div>
        <!-- wwEditor:end -->
    </div>
</template>

<script>
export default {
    props: {
        /* wwEditor:start */
        wwEditorState: { type: Object, required: true },
        /* wwEditor:end */
        content: { type: Object, required: true },
    },
    computed: {
        isEditing() {
            /* wwEditor:start */
            return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
        isSelected() {
            /* wwEditor:start */
            return this.wwEditorState.isSelected;
            /* wwEditor:end */
            // eslint-disable-next-line no-unreachable
            return false;
        },
    },
    watch: {
        'content.customProps'() {
            this.addAttribute();
        },
    },
    mounted() {
        this.addAttribute();
    },
    methods: {
        addAttribute() {
            if (!this.content.customProps || !this.content.customProps.length) return;
            let props = this.content.customProps.split('data-item');
            props.shift();
            for (let item of props) {
                item = 'data-item' + item;
                const prop = item.split(':');
                const attr = prop[0] ? prop[0].trim() : '';
                const value = prop[1] ? prop[1].trim() : '';

                if (this.$el.setAttribute) this.$el.setAttribute(attr, value);
                else if (this.$el.nextElementSibling) this.$el.nextElementSibling.setAttribute(attr, value);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-snipcart-button {
    /* wwEditor:start */
    &.selected {
        > .ww-snipcart-button__status {
            opacity: 1;
            pointer-events: all;
        }
    }
    &.editing:hover {
        & > .border {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 1px solid var(--ww-editor-color);
            pointer-events: none;
            z-index: 10;
        }
        > .ww-snipcart-button__menu {
            opacity: 1;
            pointer-events: all;
        }
    }
    &__menu {
        display: flex;
        position: absolute;
        top: 0px;
        left: 5px;
        transform: translate(-50%, -50%);
        border-radius: 100%;
        padding: var(--ww-spacing-01);
        transition: opacity 0.2s ease;
        z-index: 101;
        cursor: pointer;
        background-color: var(--ww-color-blue-500);
        color: var(--ww-color-white);
        justify-content: center;
        align-items: center;
        opacity: 0;
        pointer-events: none;
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
    /* wwEditor:end */
}
</style>
