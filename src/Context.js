import { createContext } from "react";

export const LoginContext = createContext({});

// export const LoginContextProvider = ({children}) => {
//     const [username, setUsername] = useState('');
//     const [isLogged, setIsLogged] = useState(false);

//     const userDetails = 
//     {
//         user: 'Singla',
//         username,
//         setUsername,
//         isLogged,
//         setIsLogged 
//     }

//     return (
//         <LoginContext.Provider value={userDetails}>{ children }</LoginContext.Provider>
//     );
// };

