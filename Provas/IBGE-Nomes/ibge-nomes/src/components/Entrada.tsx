import styled from "styled-components"; 

const Entrada = ({value, onchange,placeholder}: any) => {
    return (  
        <InputSld placeholder={placeholder} value={value} onChange={onchange} />
    );
}

const InputSld = styled.input`
    border-radius: 5px;
    border: none;
    padding: 6px 15px;
    `
    
export default Entrada;