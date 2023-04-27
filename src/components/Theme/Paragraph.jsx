import { useContext } from 'react'
import { ThemeContext  } from "./ThemeContext"

function Paragraph() {
    const context = useContext(ThemeContext)
    return (
        <div>
            <p className={context.theme}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores blanditiis nobis temporibus nemo. Nihil, exercitationem laborum. Voluptates ipsa explicabo accusantium.</p>
        </div>
    )
}
export default Paragraph