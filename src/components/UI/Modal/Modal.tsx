import { createPortal } from "react-dom"
import CircleBtn from "../buttons/CircleBtn";
import { IconClose } from "../icons";
interface IModalProps {
	active: boolean;
	closeModal: () => void;
	children: JSX.Element
}
const Modal: React.FC<IModalProps> = ({ active, closeModal, children }) => {
	const handlerClose = () => {
		closeModal()
	}
	return createPortal(
		<div className={`modal ${active && 'active'}`} onClick={() => { closeModal() }}>

			<div className='modal__content' onClick={(e) => { e.stopPropagation() }}>
				<CircleBtn
					handlerClick={handlerClose}
					icon={<IconClose />}
					classes="button--close modal__close"
				/>
				{children}
			</div>
		</div>
		, document.body)

}

export default Modal;