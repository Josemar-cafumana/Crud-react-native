import { UsersProvider } from './src/context/UserContext';
import Routes from './src/routes';

export default function App() {
  return (
    <UsersProvider>
      <Routes />
    </UsersProvider>
  );
}


