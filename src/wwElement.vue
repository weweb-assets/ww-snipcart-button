<template>
    <div
        class="ww-snipcart-button"
        :data-item-id="content.id"
        :data-item-url="content.url"
        :data-item-price="content.price"
        :data-item-description="content.description"
        :data-item-image="content.image"
        :data-item-name="content.name"
        v-bind="properties"
        :class="{ editing: isEditing, selected: isSelected }"
    >
        <wwElement v-bind="content.button"></wwElement>
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
        properties() {
            if (!this.content.customProps) return {};
            let props = {};

            for (let item of this.content.customProps) {
                if (item && item.hasOwnProperty('property')) {
                    props = {
                        ...props,
                        [item.property]: item.value || '',
                    };
                }
            }

            return props;
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
