import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className='home-page'>
            <p className='welcome-message'>"Good Movies" forum</p>
            <p><i className="fas fa-exclamation-triangle"></i> This is an application made for demonstration purposes.</p>
            <h3 className='home-title'><i className="fas fa-code"></i> Build with:</h3>
            <p><Link to='https://www.back4app.com/' target='_blank'>Back4App</Link></p>
            <p><Link to='https://react.dev/' target='_blank'>React</Link></p>
            <p><Link to='https://vitejs.dev/' target='_blank'>Vite</Link></p>
        </div>
    )
}
