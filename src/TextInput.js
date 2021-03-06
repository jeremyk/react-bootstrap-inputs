import React, { PropTypes } from 'react';
import {
    Col,
    ControlLabel,
    FormControl,
    FormGroup
} from 'react-bootstrap';

const propTypes = {
    // the placeholder
    placeholder: PropTypes.string.isRequired,
    // the name
    name: PropTypes.string.isRequired,
    // the label
    label: PropTypes.string.isRequired,
    // what happens when you change this thing
    onChange: PropTypes.func.isRequired,
    // obj
    obj: PropTypes.object.isRequired,
    // apply default value?
    defaultValue: PropTypes.string,
};

class TextInput extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(fieldName, e) {
        this.props.onChange(fieldName, e.target.value);
    }

    render() {

        var value = this.props.obj[this.props.name] || (this.props.defaultValue || '');

        return (<div>
            <FormGroup>
              <Col componentClass={ControlLabel} sm={4}>
                {this.props.label}
              </Col>
              <Col sm={8}>
                <FormControl type="text" name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={value}
                    onChange={this.onHandleChange.bind(this, this.props.name)}/>
              </Col>
            </FormGroup>
        </div>);
    }
}

TextInput.propTypes = propTypes;

export default TextInput;
