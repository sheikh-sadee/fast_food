import React from "react";
import Select, { components } from "react-select";
import { StyledFormGroup } from "../../../styles/common";
import { Error } from "../InputField/Field.styles";

import InputIcon from "../InputIcon";
import Label from "../Label";
import { StyledSelect } from "./Select.styles";

function DropdownIndicator(props) {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <InputIcon>
          <i className="plastk-icons">chevron_down</i>
        </InputIcon>
      </components.DropdownIndicator>
    )
  );
}

function Component({
  options,
  label,
  noMargin,
  error,
  rules,
  disabled,
  lg,
  ...props
}) {
  return (
    <StyledFormGroup $invalid={error} noMargin={noMargin}>
      {label && (
        <Label required={rules?.filter(({ required }) => required).length}>
          {label}
        </Label>
      )}
      <StyledSelect error={error} lg={lg}>
        <Select
          {...props}
          options={options}
          isDisabled={disabled}
          classNamePrefix="react-select"
          error={error}
          components={{ DropdownIndicator, IndicatorSeparator: () => null }}
          onChange={(_) => {
            props.onChange({ target: { value: _, name: props.name } });
          }}
        />
      </StyledSelect>

      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

export default Component;
