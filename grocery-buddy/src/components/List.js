import React, { useEffect, useState } from "react";

function ListComponent({items}) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
         return <article key={id}>
          <h5>{title}</h5>
         </article>
      })}
    </div>
  )
}

export default ListComponent;