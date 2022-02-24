export declare class Requester {
    private requester;
    constructor(url: string);
    get(path?: string): Promise<unknown>;
    post(payload: Record<string, any>): Promise<unknown>;
}
