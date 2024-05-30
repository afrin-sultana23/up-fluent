// eslint-disable-next-line no-unused-vars
import React from 'react';
import ClassCard from "./ClassCard.jsx";

// eslint-disable-next-line react/prop-types
const CategoryTab = ({items}) => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10">
                {
                    // eslint-disable-next-line react/prop-types
                    items.map(item => <ClassCard
                        key={item._id}
                        item={item}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default CategoryTab;