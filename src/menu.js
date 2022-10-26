import React from 'react';


function Menu(props){
    return(
        <div className='container'>
            <div className='subcontainer'>
                <div className='logo'>
                  {props.title}  
                </div>

                <div className='actions'>
                    <button className='button btn-blue'> +Añadir proyecto </button>
                </div>
            </div>
        </div>
    );
}
export default Menu;