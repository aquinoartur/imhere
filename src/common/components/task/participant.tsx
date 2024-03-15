import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './participant_style';
import { AppColors } from "../../theme/app_colors";

type TaskName = {
 name: string;
}

export function Participant(props: TaskName) {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>{props.name}</Text>
   <TouchableOpacity style={styles.buttonStyle} >
    <Text style={{ color: AppColors.purple }}>Remove</Text>
   </TouchableOpacity>
  </View >
 )
}
