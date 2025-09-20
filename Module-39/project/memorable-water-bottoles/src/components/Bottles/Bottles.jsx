import { use } from "react"
import Bottle from "../Bottle/Bottle";

export default function Bottles ({bottlesPromise}){
    const bottles = use(bottlesPromise);
    // console.log(bottle)

    return(
        <div>
        <h2>Bottles : {bottles.length}</h2>
        {
            bottles.map(bottle => <Bottle key={bottle.id} bottle = {bottle}></Bottle>)
        }
        </div>
    )
}