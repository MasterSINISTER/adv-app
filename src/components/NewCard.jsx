import React from 'react'
import './newCardStyle.css'

function NewCard(props) {
  return (
    <>
           
        <div class="cord">
            <h1>
                <span class="text-num">
{props.num}

</span>
            </h1>
            <h3>
                <span class="text">
{props.desc}

</span>
            </h3>
        </div>

    </>
  )
}

export default NewCard
