import React from 'react';
import list from '../list';
import Card from './Card';
const Shop = () => {
  return (
   <section>
    {list.map((item)=>{
      return <Card item={item} key={item.id}/>
    })}
   </section>
  )
}

export default Shop