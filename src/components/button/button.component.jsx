import './button.styles.scss';


const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
} // this allows us to create a class name based on the type of button we want to render

const Button = ({children, buttonType, ...otherProps}) => {
    return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>
           {children} </button>   
};

export default Button;
/*
Buttons: 
1. Default
2. Inverted 
3. Google Sign In
*/