import { Checkbox, Col, Rate, Row } from 'antd'
import React from 'react'
import { WrapperContent, WrapperLableText, WrapperTextPrice, WrapperTextValue } from './style'

<<<<<<< HEAD
const NavBarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
                            )
                        })}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ dispaly: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`tu ${option}  sao`}</span>
                        </div>
                    )
                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice>{option}</WrapperTextPrice>
                    )
                })
            default:
                return {}
        }
=======
      case "CheckBox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
          >
            {option.map((item) => {
              return (<Checkbox key={item} value={item.value}>{item.name}</Checkbox>)
            })}
          </Checkbox.Group>
        );
      default:
        return {};
>>>>>>> parent of b5938b8 (Merge branch 'main' of https://github.com/nhtt01/Mern-Ecommerce)
    }

    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                {renderContent('text', ['Tu lanh', 'TV', 'MAYGIAT'])}
            </WrapperContent>
            {renderContent('star', [3,4,5])}

        </div>
    )
}

export default NavBarComponent