import {
    BaseButton, 
    GoogleSignInButton, 
    InvertedButton} from './button.styles';


export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}; // this allows us to create a class name based on the type of button we want to render

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton 
        {...otherProps}
        >
        {children} 
        </CustomButton>  
    ) 
};

export default Button;


/*
Buttons: 
1. Default
2. Inverted 
3. Google Sign In
*/