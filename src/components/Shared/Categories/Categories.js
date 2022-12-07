import React from 'react';
import '../Categories/Categories.css'
const Categories = () => {
    const category =["Home","UI/UX Design","Web Development","Typography","Freelancing","Lifestyle","About Page","More Layouts"]
    return (
        <div className='categories-wapper'>
            <div className='categori-parant'>
                {
                    category.map(items =>{
                        return <li><span>{items}</span></li>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;