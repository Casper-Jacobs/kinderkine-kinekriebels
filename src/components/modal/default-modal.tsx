import { useEffect, useRef } from 'react'

interface Props {
	show: boolean
	handleClose?: () => void
	children: React.ReactNode
	className?: string
}

export const DefaultModal = (props: Props) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				event.target &&
				modalRef.current &&
				!modalRef.current.contains(event.target as any)
			) {
				if (props.show && props.handleClose) props.handleClose()
			}
		}
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				if (props.show && props.handleClose) props.handleClose()
			}
		}

		document.addEventListener('mousedown', handleClickOutside, true)
		document.addEventListener('keydown', handleKeydown, true)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside, true)
			document.removeEventListener('keydown', handleKeydown, true)
		}
	}, [modalRef, props])

	if (!props.show) {
		return <></>
	}

	return (
		<div
			className="modal-backdrop"
			data-dialog-backdrop="modal"
			data-dialog-backdrop-close="true"
		>
			<div
				data-dialog="modal"
				className={'modal-default ' + props.className}
				aria-modal="true"
				ref={modalRef}
			>
				{props.children}
			</div>
		</div>
	)
}
