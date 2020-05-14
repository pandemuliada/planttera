import { PseudoBox, PseudoBoxProps } from '@chakra-ui/core'

const primaryButtonStyles = {
  bg: 'teal.400',
  color: 'white',
  padding: '10px 20px',
  borderColor: 'teal.400',
  borderWidth: '1px',
  borderStyle: 'solid',
  cursor: 'pointer',
  _hover: {
    bg: 'teal.500',
    borderColor: 'teal.500',
  },
  _active: {
    bg: 'teal.500',
    borderColor: 'teal.500',
  },
  _focus: {
    bg: 'teal.400',
    borderColor: 'teal.400',
    borderWidth: '1px',
    borderStyle: 'solid',
  },
}

const PrimaryButton: React.FC<PseudoBoxProps> = (props) => {
  const { ...rest } = props

  return (
    <PseudoBox as="button" {...primaryButtonStyles} {...rest}>
      {props.children}
    </PseudoBox>
  )
}

export { PrimaryButton }
