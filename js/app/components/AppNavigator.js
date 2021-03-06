import { TabNavigator, StackNavigator } from 'react-navigation'
import GoalsScreen from './GoalsScreen'
import AddNewGoal from './AddNewGoal'
import AddNewMemory from './AddNewMemory'
import MemoriesScreen from './MemoriesScreen'

const AppNavigator = StackNavigator({
  Tabs: {
    screen: TabNavigator({
      Goals: {
        screen: GoalsScreen,
        navigationOptions: { title: 'Goals List' },
      },
      Reminders: {
        screen: MemoriesScreen,
        navigationOptions: { title: 'Memories List' },
      },
    }),
  },
  AddNewGoal: {
    screen: AddNewGoal,
    navigationOptions: { title: 'Add New Goal' },
  },
  AddNewMemory: {
    screen: AddNewMemory,
    navigationOptions: { title: 'Add New Memory' },
  },
})

export default AppNavigator
