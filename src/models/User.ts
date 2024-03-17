export default class User {
    private _id: number;
    private _name: string;
    private _username: string;
    private _password: string;
    private _level: number;
    private _token: string;

    constructor(id: number, name: string, username: string, password: string, level: number, token: string){
        this._id = id;
        this._name = name;
        this._username = username;
        this._password = password;
        this._level = level;
        this._token = token;
    }

    
    public get id() : number {
        return this._id;
    }

    public set id(v : number) {
        this._id = v;
    }
    
    public get name() : string {
        return this._name;
    }

    public set name(v : string) {
        this._name = v;
    }

    public get username() : string {
        return this._username;
    }

    public set username(v : string) {
        this._username = v;
    }

    public get password() : string {
        return this._password;
    }

    public set password(v : string) {
        this._password = v;
    }

    public get level() : number {
        return this._level;
    }

    public set level(v : number) {
        this._level = v;
    }

    public get token() : string {
        return this._token;
    }

    public set token(v : string) {
        this._token = v;
    }
}