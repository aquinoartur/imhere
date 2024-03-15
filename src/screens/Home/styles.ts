import { StyleSheet } from 'react-native';
import { AppColors } from '../../common/theme/app_colors';

export const styles = StyleSheet.create(
 {
  container: {
   flex: 1,
   backgroundColor: AppColors.lightGray,
   justifyContent: "flex-start",
   paddingTop: 80,
  },
  title: {
   fontSize: 30,
   color: AppColors.purple,
   fontWeight: 'bold',
   textTransform: 'uppercase',
   textAlign: 'center',
  },
  subtitle: {
   fontSize: 12,
   color: AppColors.darkBlue,
   textAlign: 'center',
  },
  formField: {
   height: 48,
   flex: 1,
   marginRight: 10,
   borderWidth: 1,
   borderRadius: 10,
   backgroundColor: AppColors.lightGray,
   borderColor: AppColors.purple,
   padding: 10,
  },
  buttonStyle: {
   backgroundColor: AppColors.purple,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 10,
   width: 48,
   height: 48,
  },
  formView: {
   flexDirection: 'row', justifyContent: 'center',
   alignItems: 'center',
   marginTop: 20,
   marginHorizontal: 20,
  },
 }
);