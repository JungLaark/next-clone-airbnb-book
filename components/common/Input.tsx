import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div<{iconExist: boolean}>`
    input{
        
    }
`;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{
    icon? : JSX.Element;
}

const Input: React.FC<IProps> = ({icon, ...props}) => {
    return (
        <Container iconExist={!!icon}>
            <input {...props}/>
            <div className="input-icon-wrapper">{icon}</div>
        </Container>
    );
}

export default Input;