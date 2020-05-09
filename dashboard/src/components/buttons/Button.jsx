import React from 'react'
import { buttonColors, buttonIcons, buttonSizes } from './theme'
import ReactLoading from 'react-loading'

import { cn } from '../../utils/format'

const Button = (props) => {
  let {
    children,
    disabled=false,
    color='primary',
    type='button',
    loading=false,
    icon,
    block,
    size='normal',
    ...rest
  } = props

  if (loading) disabled = true
  
  const styles = {
    button: {
      default: [
        icon && 'flex',
        'items-center',
        'justify-center',
        'rounded',
        'text-white',
        'border-2',
        'transition-all',
        size ? buttonSizes[size] : buttonSizes['normal'], 
        block ? 'w-full block' : 'w-auto',
        disabled ? 'opacity-50' : 'opacity-100',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        disabled ? `bg-${buttonColors[color].disabled}` : `bg-${buttonColors[color].default}`,
        disabled ? `border-${buttonColors[color].disabled}` : `border-${buttonColors[color].default}`,
      ],
      hover: [
        `bg-${buttonColors[color].hover}`,
        `border-${buttonColors[color].hover}`
      ]
    }
  }

  return(<button className={cn(styles.button)} disabled={disabled} type={type} {...rest}>
    {icon && !loading && <span className='mr-1'>{buttonIcons[icon]}</span>}
    { loading ? <ReactLoading width={24} height={24} type='bubbles' className='mx-auto'/>  : children }
  </button>)
}

export default Button