import { getGenericArrowFunction } from "../genericos/genericos"
import { Hero } from '../interfaces/hero';



const DeadPool ={
    name:'DeadPool',
    realName:'Wade Winston Wilson',
    dangerLevel:130

}


 console.log(getGenericArrowFunction<Hero>(DeadPool).realName);   