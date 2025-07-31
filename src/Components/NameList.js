import React from 'react'

function NameList() {
    
        const persons = [
            {
                id: 1, 
                name: 'Ahamad',
                age: 20,
                email: 'ahamad@gamail.com'
            },
            {
                id: 2, 
                name: 'Mahamood',
                age: 25,
                email: 'mahmood@gamail.com'
            },
            {
                id: 3,
                name: 'Bashir',
                age: 30,
                email: 'bashir@gmail.com'
            }
        ];
        
        const personList = persons.map(person => (
            <h2>
                {person.id}. I am {person.name}, {person.age} years old and my email addrees is {person.email}
            </h2>
        ))
        return <div> {personList} </div>
        // const names = ['Ahamad', 'Mahmood', 'Bashir']
        // const namelists = names.map(name => <h2>{name}</h2>)
        // return <div>{nameLists}</div>
    
  
}

export default NameList
