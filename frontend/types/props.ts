export interface CardComponentProps {
    bgColor: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    pointer:boolean
    onClick: () => void;
}


export interface ButtonProps {
    variant: 'contained' | 'outlined'| 'text',
    text:string,
    disable?:boolean,
    fullWidth?:boolean,
    loading?:boolean,
    size?:'small' | 'medium' | 'large'
    color?:'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | string
}