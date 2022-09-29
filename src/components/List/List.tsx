import React, { useEffect } from "react"
import { faker } from '@faker-js/faker';

const List = () => {
    useEffect(() => {
        console.log(faker.name.fullName());
        
    }, [])

    return (
        <div>List</div>
    )
}

export default List