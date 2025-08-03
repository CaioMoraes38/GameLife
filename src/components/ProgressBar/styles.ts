import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff38',
    borderRadius: 30,
    overflow: 'hidden',
    borderColor:'rgba(85, 203, 189, 0.5)',
    borderWidth: 1,   
    
    
  },
  progress: {
    height: '100%',
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    
  },
  XP:{
    color: '#000000ff',
    fontWeight: 'bold',  
    fontSize: 20,
    position: 'absolute',
    paddingHorizontal: 45,
    paddingVertical: 5,
   
  }
  
});
export default styles;