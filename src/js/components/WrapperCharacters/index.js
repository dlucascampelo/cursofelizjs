const pathDv = "src/images/react-guy.png";
const dv = Character`
    width: 18%;
    ${pathDv}
`;

const WrapperCharacters = (css, children) => `
    <div style="${css}">${children}</div>
`;

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    ${dv + dv + dv}
`;
