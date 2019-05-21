
/** Maps position tuples to state values */
export default class GridState {
    private _state: Map<string, number>;

    constructor() {
        this._state = new Map<string, number>();
    }

    /** Returns the state of the grid at the specified position, 
     * or zero if that position is undefined  */
    get(position: [number, number]): number {
        const key = this.getKey(position);
        const state = this._state.get(key);
        return state === undefined ? 0 : state;
    }

    /** Sets the state at the specified position  */
    set(position: [number, number], state: number) {
        const key = this.getKey(position);
        this._state.set(key, state);
    }

    /** Returns the key we use for the specified position */
    private getKey(position: [number, number]): string {
        const [row, column] = position;
        return `${row},${column}`;
    }
}