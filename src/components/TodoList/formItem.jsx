import React, { useState } from 'react';
import PropTypes from 'prop-types';

FormItem.propTypes = {
    onSubmit : PropTypes.func,
};

FormItem.defaultProps = {
    onSubmit: null
}

function FormItem(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e){
        setValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!onSubmit) return;

        const formValues = {
            title : value
        };

        onSubmit(formValues);
        setValue(' ');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={handleValueChange}
            />
        </form>
    );
}

export default FormItem;