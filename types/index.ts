import { MouseEventHandler } from "react";

// Interface specifies how a specific structure should look like
export interface CustomButtonProps{
    title: string,
    containerStyles?:string,
    handleClick:MouseEventHandler<HTMLButtonElement>,
    btnType?: 'button'|'submit'
}