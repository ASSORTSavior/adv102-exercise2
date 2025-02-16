import { Stack } from "expo-router";

export default function Layout () {

    return (
        <Stack>
            <Stack.Screen 
                name="exercise3"
                options={{
                    title: "Loginpage",

                        headerTitleStyle: {
                            color: '#002147 ',
                            fontWeight: "bold",
                        }
                }}
            />
            <Stack.Screen 
                name="exercise4"
                options={{
                    title: "Stopwatch",
                   
                        headerTitleStyle: {
                            color: '#002147 ',
                            fontWeight: "bold",
                        }
                }}
            />
        </Stack>
    )
}