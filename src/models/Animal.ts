import Mother from "./Mother";

export default class Animal {
    private _id: number;
    private _tag: number;
    private _Mother: Mother;
    constructor() {
        
    }

    public get id(): number {
        return this._id;
    }

    public set id(v: number) {
        this._id = v;
    }

    public get tag(): number {
        return this._tag
    }

    public set tag(v: number) {
        this._tag = v;
    }


}