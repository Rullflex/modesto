import { Dictionary } from 'lodash';

export default interface IModalEvent<_Ty = Dictionary<any>> {
    name: string;
    state: string;
    ref: Element | null;
    cancel: () => void;
    params: _Ty;
}

export interface IModalEventFinished {
    name: string;
    ref: Element | null;
    state: string;
}
