import './Veille.css'
import { useThemeContext } from '../../hooks/useThemeContext'


export function Veille() {
    const {theme} = useThemeContext()
    return <div style={{ backgroundColor: theme.backgroundEven }} className="veille">
        <h1>Veille
            
        </h1>
    </div>
}