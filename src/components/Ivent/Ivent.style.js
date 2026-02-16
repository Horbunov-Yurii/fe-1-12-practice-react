import styled from "styled-components";
export const Text = styled.p `
font-size:20px;
font-style:italic;
font-weight:900;
color:${(prop)=>(prop.status==="Online" ? "green" :"red")} ;
`