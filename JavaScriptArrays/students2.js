const students=[
{
    id:1,
    name:'Hector Strong',
    age: 17,
    subjects:[
        {
            id:1,
            name:'Maths',
            score:98
        },
        {
            id:2,
            name:'English',
            score:87
        }
            
    ]
},
{
    id:2,
    name:'Sean Muster',
    age: 18,
    subjects:[
        {
            id:1,
            name:'Maths',
            score:76,
        },
        {
            id:2,
            name:'English',
            score:91,
        }
            
    ]
},
{
    id:3,
    name:'Essie Garent',
    age: 17,
    subjects:[
        {
            id:1,
            name:'Maths',
            score:75,
        },
        {
            id:2,
            name:'English',
            score:88,
        }
    ]
},
{
    id:4,
    name:'Essie Garent',
    age: 17,
    subjects:[
        {
            id:1,
            name:'Maths',
            score:75,
        },
        {
            id:2,
            name:'English',
            score:88,
        }
    ]
}
]


for(let student of students){
    const column=document.createElement("div");
    column.classList.add("column");
$(column).append(student.name+"<br>"+student.age+"<br>");
for(let subject of student.subjects){
    $(column).append(subject.name+"<br>"+subject.score+"<br>");
    $("#student-list").append(column)
}
//     const card=document.createElement("div");
//     card.classList.add("card");
//     const cardBody=document.createElement("div");
//     cardBody.classList.add("card-body");
//     cardBody.innerHTML=student.name;
//     card.appendChild(card);
//     studentDiv.appendChild(card);
//     studentDiv.appendChild(colunm);
}
