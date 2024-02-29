import { StyleSheet} from 'react-native';

const style = StyleSheet.create ({

  container: {
    padding: 30,
    alignItems: 'center'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 500,
    marginBottom: 30, 
    marginTop: 90,
  },

  input: {
    width:300,
    backgroundColor: 'dedede',
    borderColor: 'cecece',
    padding: 8,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 4,
  },

  button: {
    alignItems: 'center',
    textTransform: 'uppercase',
    width:200,
    backgroundColor: '#bdffff',
    borderColor: '#4ce9de',
    padding: 8,
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 4,
  },

  resultado: {
    padding: 15,
    fontSize: 15,
    fontWeight: 500,
  },

});

export default style;