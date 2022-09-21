import { ValidationFlags } from 'vee-validate/dist/types/types';
import { InteractionModeFactory } from 'vee-validate/dist/types/modes';

interface ModeContextExtended {
    errors: string[];
    value: any;
    initialValue: any;
    flags: ValidationFlags;
}

const customEager: InteractionModeFactory = (ctx) => {
    const ctxExtend = ctx as ModeContextExtended;
    if (ctxExtend.errors.length && ctxExtend.initialValue !== ctxExtend.value) {
        // clear list of errors when last value not equal to new value
        ctxExtend.errors = [];
    }
    ctxExtend.initialValue = ctxExtend.value;

    // validate immediately after leaving the field.
    return { on: ['blur'], debounce: 0 };
};

export { customEager };
