import { AppColors } from './src/common/theme/app_colors';
import { Home } from './src/screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider
      style={{ backgroundColor: AppColors.lightGray }}
    >
      <Home />
    </SafeAreaProvider>
  )
}

