
const courses=[
    {id:'001', name:'Java', done:false}, 
    {id:'002', name:'JavaScript', done:false}, 
    {id:'003', name:'C++', done:false} 
]



export const myReducer=(state=courses, action)=>{
    const {type,data}=action
    switch (type) {
        case 'AddItems':
            return [data,...state]
        case 'DeleteItems':
            return state.filter(
                (course)=>{return course.id !== action.id}
            )
        case 'UpdateItems': 
        return state.map((course)=>{
                if(course.id === action.id){
                    return {...course, done:data}
                }else{return course}
            }
        )
        case 'SelectAll':
            return state.map(
                (course)=>{return {...course,done:data}}
            )
        default:
            return state;
    }

}