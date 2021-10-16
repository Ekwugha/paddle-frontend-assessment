import React from 'react';
import CardBody from '../card/card.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CustomButton from '../button/button.component';

export class PricingData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {   
                    id: 1, 
                    title: 'Free Plan', 
                    image: "assest/landingpage.jpg", 
                    price: 'Free', 
                    btn: <CustomButton> Select </CustomButton>, 
                    icon: <FontAwesomeIcon icon={faCheck}/>,
                    content1: 'Lorem ipsum consenu',
                    content2: 'Lorem ipsum consenu', 
                    content3: 'Lorem ipsum consenu' 
            
                },
                {   
                    id: 2, 
                    title: 'Standard Plan', 
                    image: "assest/landingpage.jpg", 
                    price: '$9 / mo', 
                    btn: <CustomButton> Select </CustomButton>, 
                    icon: <FontAwesomeIcon icon={faCheck} />,
                    content1: 'Lorem ipsum consenu', 
                    content2: 'Lorem ipsum consenu', 
                    content3: 'Lorem ipsum consenu', 
                    content4: 'Lorem ipsum consenu'
                },
                { 
                    id: 3, 
                    title: 'Premium Plan', 
                    image: "assest/landingpage.jpg", 
                    price: '$12 / mo', 
                    btn: <CustomButton> Select </CustomButton>, 
                    icon: <FontAwesomeIcon icon={faCheck}/>,
                    content1: 'Lorem ipsum consenu', 
                    content2: 'Lorem ipsum consenu', 
                    content3: 'Lorem ipsum consenu', 
                    content4: 'Lorem ipsum consenu', 
                    content5: 'Lorem ipsum consenu'
                }
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, image, price, btn, icon, content1, content2, content3, content4, content5 }) => (
                    <CardBody key={id} title={ title } image={image} icon={icon} content1={content1} content2={content2} content3={content3} content4={content4} content5={content5} price={price} btn={btn} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default PricingData;