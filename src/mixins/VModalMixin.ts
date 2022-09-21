import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import IModalEvent, { IModalEventFinished } from '@/ship/Models/IModalEvent';
import { isPlainObject, Dictionary } from 'lodash';

@Component
export default class VModalMixin extends Vue {
    @Prop({ type: Boolean, default: false })
    public hideCloseIcon!: boolean;

    @Prop({ type: String, required: true })
    public name!: string;

    @Prop({ type: Boolean, default: false })
    public resizable!: boolean;

    @Prop({ type: Boolean, default: true })
    public adaptive!: boolean;

    @Prop({ type: [Boolean, String], default: false })
    public draggable!: boolean | string;

    @Prop({ type: Boolean, default: true })
    public scrollable!: boolean;

    @Prop({ type: Boolean, default: true })
    public focusTrap!: boolean;

    @Prop({ type: Boolean, default: true })
    public reset!: boolean;

    @Prop({ type: Boolean, default: true })
    public clickToClose!: boolean;

    @Prop({ type: [String, Number], default: '94%' })
    public width!: string | number;

    @Prop({ type: [String, Number], default: 'auto' })
    public height!: string | number;

    @Prop({ type: Number, default: 0 })
    public minWidth!: number;

    @Prop({ type: Number, default: 0 })
    public minHeight!: number;

    @Prop({ type: Number, default: Infinity })
    public maxWidth!: number;

    @Prop({ type: Number, default: Infinity })
    public maxHeight!: number;

    get modalListeners() {
        return {
            'before-open': this.beforeOpenHandler,
            'opened': this.openedHandler,
            'before-close': this.beforeCloseHandler,
            'closed': this.closedHandler,
        };
    }

    get modalProps() {
        return {
            name: this.name,
            resizable: this.resizable,
            adaptive: this.adaptive,
            draggable: this.draggable,
            scrollable: this.scrollable,
            focusTrap: this.focusTrap,
            reset: this.reset,
            clickToClose: this.clickToClose,
            width: this.width,
            height: this.height,
            minWidth: this.minWidth,
            minHeight: this.minHeight,
            maxWidth: this.maxWidth,
            maxHeight: this.maxHeight,
        };
    }

    @Emit('before-open')
    public beforeOpenHandler(event: IModalEvent) {
        return event;
    }

    @Emit('opened')
    public openedHandler(event: IModalEventFinished) {
        return event;
    }

    @Emit('before-close')
    public beforeCloseHandler(event: IModalEvent) {
        return event;
    }

    @Emit('closed')
    public closedHandler(event: IModalEventFinished) {
        return event;
    }

    public hideModal(params?: Dictionary<any>) {
        if (!isPlainObject(params)) {
            params = undefined;
        }

        this.$modal.hide(this.name, params);
    }

    public showModal(params?: Dictionary<any>) {
        if (!isPlainObject(params)) {
            params = undefined;
        }

        this.$modal.show(this.name, params);
    }
}
