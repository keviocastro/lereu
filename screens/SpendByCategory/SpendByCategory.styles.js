import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    paddingBottom: 32,
    alignItems: 'center'
  },
  profileIconContainer: {
    marginTop: Constants.statusBarHeight + 24,
    marginBottom: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileIcon: {
    width: 24,
    height: 24,
    borderRadius: 24,
  },
  summaryContainer: {
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },  
  actionsSpacing: {
    width: 12,
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#121417',
  },
  subtitle: {
    fontSize: 16,
    color: '#637587',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#121417',
    marginBottom: 22,
    marginLeft: 16,
  }
});

export default styles;