import { ButtonProps } from '@/types/props';
import Button from '@mui/material/Button';

export default function PrimaryButton ( props: ButtonProps )
{
    return <Button fullWidth={ props.fullWidth } disabled={ props.disable } variant={ props.variant } size={ props.size } >
        { props.text }
    </Button>
}