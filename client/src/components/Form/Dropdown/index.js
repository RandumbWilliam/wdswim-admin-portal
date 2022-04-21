import {
    Form
} from "semantic-ui-react";

const Dropdown = ({options, text, value, name, label, onChange, defaultValue}) => {
    const newOptions = [];

    const handleOptions = (opt) => {
        opt.forEach(e => {
            newOptions.push({text: e[text], value: e[value]})
        });
    }
    
    handleOptions(options);

    return (
        <Form.Select
            fluid
            name={name}
            label={label}
            onChange={onChange}
            options={newOptions}
            defaultValue={defaultValue}
        />
    )
}

export default Dropdown