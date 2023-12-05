import { createStackNavigator } from '@react-navigation/stack'
import UserList from '../views/UserList';
import UserForm from '../views/UserForm';
import { Button, Icon } from '@rneui/themed';

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
      <Stack.Navigator screenOptions={screenOptions} initialRouteName='UserList'>
        <Stack.Screen 
            name='UserList'
            component={UserList}
            options={({ navigation }) => {
                return {
                    title: 'Lista de Usuários',
                    headerRight: () => (
                        <Button
                            type='clear'
                            onPress={() => navigation.navigate('UserForm')}
                            icon={<Icon type='material' name='add' size={25} color='white' />}
                        />
                    )
                }
            }}
        />

        <Stack.Screen 
            name='UserForm'
            component={UserForm}
            options={{
                title: 'Formulário de Usuários'
            }}
        />  
      </Stack.Navigator>
    );
  }

  const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff'
  }
  