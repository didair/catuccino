import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useId } from '../../libs/id';
import { typography } from '../../constants/colors';

import './_checkbox.css';

export const CheckboxColorVariations = {
	...typography.base,
	...typography.highlights,
};

export const Checkbox = ({ color, label, ...props }) => {
	const id = useId('cb');

	return (
		<>
			<input
				type="checkbox"
				id={id}
				className={cx(
					CheckboxColorVariations[color],
					'checkbox-after',
					'appearance-none',
					'transition-colors',
					'h-7 w-7',
					'rounded-md',
					'bg-surface0/40',
					'border-2',
					'border-surface2',
					'checked:border-current',
					'checked:bg-surface1/70',
					'inline-flex',
					'items-center',
					'justify-center',
					'cursor-pointer',
					'outline-lavender',
					'disabled:cursor-not-allowed',
					'disabled:opacity-60',
				)}

				{...props}
			/>

			{label != null ?
				<label
					htmlFor={id}
					children={label}
					className={cx(
						'ml-2',
					)}
				/>
				: null}
		</>
	);

};

Checkbox.defaultProps = {
	color: 'lavender',
	label: null,
	disabled: false,
};

Checkbox.propTypes = {
	label: PropTypes.string,
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(Object.keys(CheckboxColorVariations)),
};
