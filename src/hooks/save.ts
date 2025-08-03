import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";
import HomeScreen from '../app/(tabs)';


export default async function salvarTarefas(tarefas: any): Promise<void> {
    try {
      await AsyncStorage.setItem('@tarefas', JSON.stringify(tarefas));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
      Alert.alert('Erro', 'Não foi possível salvar as tarefas');
    }
}