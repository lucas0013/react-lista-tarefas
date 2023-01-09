import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const emailLength = useMemo(() => {
        console.log('Executou')
        return email.length * 1000;
    }, [email.length]);

    useEffect(() => {
        console.log('email: ' + email)
    }, [email]);
    useEffect(() => {
        console.log('senha: ' + password)
    }, [password]);

    const handleEntrar = useCallback(() => {
        console.log('email: ' + email)
        console.log('senha: ' + password)

        if (inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus()
        }
    }, [email, password]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                    />
                
                <InputLogin
                    type="password"
                    label="Senha"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}