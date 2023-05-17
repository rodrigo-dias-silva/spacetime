import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-zinc-200">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="inverted" />
    </View>
  )
}
