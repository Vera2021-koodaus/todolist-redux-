export const addItems=(data)=>{return ({type: 'AddItems', data}) } 
export const RemoveItems=(id)=>{return ({type:'DeleteItems',id})} 
export const updateItems=(id,data)=>{return ({type:'UpdateItems',id,data})} 
export const SelectedAll=(data)=>{return ({type:'SelectAll',data})} 