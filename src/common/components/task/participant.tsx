import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './participant_style';
import { AppColors } from "../../theme/app_colors";

type TaskName = {
 task: string;
 onRemove: () => void;
}

export function Participant(props: TaskName) {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>{props.task}</Text>
   <TouchableOpacity
    style={styles.buttonStyle}
    onPress={props.onRemove}
   >
    <Text style={{ color: AppColors.purple }}>Remove</Text>
   </TouchableOpacity>
  </View >
 )
}
