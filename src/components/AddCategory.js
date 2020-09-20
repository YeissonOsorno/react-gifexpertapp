import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {
    const [inputvalue, setIputvalue] = useState('')

    const handleInputchange = (e)=>{
        setIputvalue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputvalue.trim().length>2){
            setCategories(cats=>[inputvalue,...cats]);
            setIputvalue('')
        }
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputvalue}
                    onChange={handleInputchange}
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}