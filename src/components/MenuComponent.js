import React, {Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }
  
  renderDish(dish){
    if(dish != null){
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }
  render(){

    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
            {menu}          
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;


// import React, { Component } from 'react'; // 1. this will allow us to create REACT Components
// import { Media } from 'reactstrap';

// class Menu extends Component { // 2. new component MENU extends componenets
//     constructor(props) {      // 3. 1st define constructor for this component.
//                              // 4. this constructor will get a parameter called props
//         super(props); // 5. need to supply this props in a super classs. And this is required whenever you define a class component
//         this.state = {
//             dishes: [
//                 {
//                   id: 0,
//                   name:'Uthappizza',
//                   image: 'assets/images/uthappizza.png',
//                   category: 'mains',
//                   label:'Hot',
//                   price:'4.99',
//                   description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
//                {
//                   id: 1,
//                   name:'Zucchipakoda',
//                   image: 'assets/images/zucchipakoda.png',
//                   category: 'appetizer',
//                   label:'',
//                   price:'1.99',
//                   description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
//                {
//                   id: 2,
//                   name:'Vadonut',
//                   image: 'assets/images/vadonut.png',
//                   category: 'appetizer',
//                   label:'New',
//                   price:'1.99',
//                   description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
//                {
//                   id: 3,
//                   name:'ElaiCheese Cake',
//                   image: 'assets/images/elaicheesecake.png',
//                   category: 'dessert',
//                   label:'',
//                   price:'2.99',
//                   description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
//                ],
//         };
//     }

//     render() { // 6. a class component should implement this method called render() which will turn the corresponding view for this component.
//         const menu = this.state.dishes.map((dish) => {
//             return (
//               <div key={dish.id} className="col-12 mt-5">
//                 <Media tag="li" style={{listStyleType: "none"}}>
//                   <Media left middle>
//                       <Media object src={dish.image} alt={dish.name} />
//                   </Media>
//                   <Media body className="ml-5">
//                     <Media heading>{dish.name}</Media>
//                     <p>{dish.description}</p>
//                   </Media>
//                 </Media>
//               </div>
//             );
//         });

//         return ( // 7. So inside this render method, I need to return the view for this component.
//           <div className="container">
//             <div className="row">
//               <Media list>
//                   {menu}
//               </Media>
//             </div>
//           </div>
//         );
//     }
// }

// export default Menu; // 8. When you create the component don't forget to export that component from this file
//                     // 9.bcz we would need to import this component wherever we want to make use of it within our application...




// //  BASIC STRUCTURE OF CREATING A NEW CLASS COMPONENET  //
// /*

//         import React, { Component } from 'react';

//         class Menu extends Component{

//             constructor(props){
//                 super(props);
//             }

//             render(){
//                 return(

//                 );
//             }
//         }

// export default Menu;

// */