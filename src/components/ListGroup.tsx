import { Fragment } from "react/jsx-runtime";
function ListGroup(){
  const items=[
    'new york',
    'algeria',
    'sodia',
    'iraaq'
    
      ]
    
     
      return (
        <Fragment>
          <ul className="list-group">
         { items.map(item => (
         <li key={item}> {item}</li>
         ))}
          </ul>
        </Fragment>
      );
    
 
}
export default ListGroup;
