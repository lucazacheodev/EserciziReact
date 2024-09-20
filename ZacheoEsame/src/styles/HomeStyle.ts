import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  palazzo: {
    width: 200,
    height: 200,
  },
  containerRow: {
    flexDirection: 'row',
  },
  containerMeteo: {
    marginRight: 25,
    marginLeft: 25,
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  icon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 300,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    lineHeight: 22,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default styles;
