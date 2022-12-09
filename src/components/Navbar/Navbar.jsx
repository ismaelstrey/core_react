import * as I from "./styled"
const Navbar = ({ data }) => {
    const RenderMenu = () => data.map(L =>
        <I.Li key={L.id} className={L.class}><I.A href={L.link}>{L.name}</I.A></I.Li>
    )
    return (
        <I.Nav>
            
            <I.Ul>  
                <I.Li><I.LogoNav height="20" fill="#fff"/></I.Li>              
                {data ? RenderMenu() : 'Sem dados menu'}               
            </I.Ul>
        </I.Nav>
    )
}
export { Navbar }