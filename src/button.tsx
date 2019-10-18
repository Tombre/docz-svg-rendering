import * as React from 'react';

interface Props {
	onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void
	children: React.ReactNode
	innerRef?: React.RefObject<HTMLButtonElement>
	className?: string
}

export const Button: React.FC<Props> = props => {
	const { children, innerRef,  ...rest } = props;
	return (
		<button type="button" ref={innerRef} {...rest}>{ children || 'button' }</button>
	);
}