import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop=(props)=>
{
    return <div className={classes.backdrop} />
};

const ModalOverlay=(props)=>
{
    return(
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
   )
}
const portallocation=document.getElementById('overlay');
const Modal=(props)=>
{
    return<Fragment>
     {ReactDOM.createPortal(<Backdrop />,portallocation)}
     {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portallocation)}
     </Fragment>
 }
export default Modal;