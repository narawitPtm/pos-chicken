import type GetProduct from "./GetProduct";
import GetState from "./GetState";
import SelectModel from "./SelectModel";

class GetOrder {
    public queue: number = Number();
    public products: GetProduct[] = [];
    public state: GetState = new GetState;
    public selectState: SelectModel = new SelectModel
}

export default GetOrder