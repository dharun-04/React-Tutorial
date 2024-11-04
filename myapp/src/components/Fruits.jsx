import Fruit from "./Fruit"
export default function Fruits() {
  // const Fruits=['Apple','Banana','water melon','strawberry','blueberry'];
  const Fruits=[
    {name:"apple",id:1,price:10},
    {name:"banana",id:2,price:20},
    {name:"water melon",id:3,price:30}
  ]
  return (
    <div>
      <ul>
      {Fruits.map(item=>
        <Fruit   key={item.id} name={item.name} id={item.id} price={item.price}/>
      )}
      </ul> 
    </div>
  )
}
