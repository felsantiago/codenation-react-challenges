import React from 'react';

import { ButtonCustom } from './styles';

class Button extends React.Component {
  render() {
    const { isSelected, handleOnClick, content, classIcon } = this.props;
    return (
      <ButtonCustom 
        isSelected={isSelected}
        onClick={handleOnClick}>
        {content} <i className={classIcon} />
      </ButtonCustom>
    )
  }
}

export default Button;
