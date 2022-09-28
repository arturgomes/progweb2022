import { InputHTMLAttributes } from 'react'
import './styles.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps) {
  return <input className="form"
    {...props} />
}