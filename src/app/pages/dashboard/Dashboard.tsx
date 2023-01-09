import { useRef } from 'react';
import { Link }from 'react-router-dom';

export const Dashboard = () => {
    const counterRef = useRef({counter: 0});

    return (
        <div>
            <p>Dashboard</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Somar</button>

            <Link to="/entrar"> Login</Link>
        </div>
    );
}