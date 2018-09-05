import * as React from 'react'
import View from '../View'
import Text from '../Text'

interface IProps {
  color? : string,
  children : JSX.Element[] | JSX.Element | string,
}

const Pill : React.SFC<IProps> = ({
  color = 'faded',
  children
} : IProps) => {
  return (
    <View
      display='inline-flex'
      backgroundColor={color}
      backgroundOpacity={color !== 'faded' && 'pill'}
      borderRadius={1}
      paddingX={2}
      paddingY={1}>
      <Text size={1}>{children}</Text>
    </View>
  )
}

Pill.displayName = 'Pill'

export default Pill
