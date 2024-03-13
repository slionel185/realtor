import { CheckCircledIcon } from '@radix-ui/react-icons'

interface FormSuccessProps {
    message?: string
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if(!message) return null

    return (
        <div>
            <CheckCircledIcon className='h-4 w-4'/>
            <p>{message}</p>
        </div>
    )
}