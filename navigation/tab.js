import Home from '../components/Home';
import Chat from '../components/Chat';
import FavoriteJob from '../components/FavoriteJob';
import Job from '../components/Job';
import Profile from '../components/Profile';
import Icon from 'react-native-remix-icon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobDetail from '../Job/JobDetail';
import Header from '../components/HeaderThanh'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import LoginForm from '../src/LoginForm';
import FormSignup from '../src/FormSignup';
import { Form } from 'react-hook-form';
import { useFonts } from "expo-font"


const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator()

const Tabs = () => {

    const [fontLoaded] = useFonts({
        'Rubik': require("../assets/fonts/Rubik/static/Rubik-Bold.ttf"),
        'RukbikNormal': require("../assets/fonts/Rubik/static/Rubik-Regular.ttf")
    })
    if (!fontLoaded) {
        return (
            <View>
                <Text>Loading..........</Text>
            </View>
        )
    }

    var sizeIcon = 26   
    const navigation = useNavigation();


    const HomeStack = () => (
        <Stack.Navigator initialRouteName='FormSignup' options={{
        }}>
            <Stack.Screen name='LoginForm' component={LoginForm} options={{ headerShown: false, headerLeft: null }}></Stack.Screen>
            <Stack.Screen name='FormSignup' component={FormSignup} options={{ headerShown: false, headerLeft: null }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerLeft: null }} />
            <Stack.Screen
                name='JobDetail'
                component={JobDetail}
                options={{
                    headerTitle: () => (
                        <Header name="JobDetail"></Header>
                    ),
                    headerBackVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{}}
                            onPress={() => navigation.goBack()}
                        >
                            <Icon name='arrow-left-s-line' size={34} color='#000' />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={styles.wrapHeaderLeft}>
                            <Image
                                source={require('../assets/diamond_pro.png')}
                                style={{ width: 22, height: 22 }}
                            />
                            <Text style={styles.quantityDiamond}>499</Text>
                            <TouchableOpacity>
                                <Icon name='add-fill' style={{ fontWeight: "700" }} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        height: 150,
                        backgroundColor: '#fff',
                        elevation: 0,
                    },
                }}
            ></Stack.Screen>

        </Stack.Navigator>
    );

    const JobStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Job" component={Job} options={{}} />
        </Stack.Navigator>
    );

    const ChatStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={Chat} options={{}} />

        </Stack.Navigator>
    );


    const FavoriteJobStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Notification" component={FavoriteJob} options={{}} />

        </Stack.Navigator>
    );

    const ProfileJobStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="ProfileJob" component={Profile} options={{}} />

        </Stack.Navigator>
    );


    return (

        
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 15,
                left: 20,
                right: 20,
                elevation: 5,
                backgroundColor: '#232323',
                borderRadius: 30,
                height: 60,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

            },

        }}>


            <Tab.Screen
                name='HomeTab'
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? 'home-fill' : 'home-line'}
                            color={focused ? '#E2F367' : '#ffff'}
                            size={sizeIcon}
                        />
                    ),
                    headerLeft: null
                }}
            ></Tab.Screen>
            <Tab.Screen name='JobTab' component={JobStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? 'briefcase-4-fill' : 'briefcase-4-line'}
                            color={focused ? '#E2F367' : '#ffff'}
                            size={sizeIcon}
                        />
                    ),
                }}></Tab.Screen>

            <Tab.Screen name='ChatTab' component={ChatStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? 'chat-3-fill' : 'chat-3-line'}
                            color={focused ? '#E2F367' : '#ffff'}
                            size={sizeIcon}
                        />
                    ),
                }}></Tab.Screen>
            <Tab.Screen name='FavoriteJobTab' component={FavoriteJobStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? 'heart-fill' : 'heart-line'}
                            color={focused ? '#E2F367' : '#ffff'}
                            size={sizeIcon}
                        />
                    ),
                }}></Tab.Screen>

            <Tab.Screen name='ProfileTab' component={ProfileJobStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? 'user-fill' : 'user-line'}
                            color={focused ? '#E2F367' : '#ffff'}
                            size={sizeIcon}
                        />
                    ),
                }}></Tab.Screen>
        </Tab.Navigator>
    )
}



export default Tabs

const styles = StyleSheet.create({
    wrapHeaderLeft: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    quantityDiamond: {
        fontSize: 24,
        color: '#000',
        fontFamily: "Rubik"
    }
})