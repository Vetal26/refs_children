import React, {Children} from "react";

export default function MenuList({children}) {
    const changedChildren = Children.map(children , (child, index) => {
        return React.cloneElement(child, { index })
    });
    
    return <ul>{changedChildren}</ul>;
}