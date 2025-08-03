import { View,Text, StyleSheet,TextInput,TouchableOpacity, Alert,} from "react-native";
import React, { useState, useEffect } from "react";
import DefaultPage from "@/src/components/DefautPage";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from "@/src/components/ProgressBar";
import styles from "@/src/app/styles/stylesHomePage";
import { typesTarefas, DificuldadeType, StatusType } from '@/src/types/typesTarefas';

export default function HomeScreen() {
  const [tarefas, setTarefas] = useState<typesTarefas[]>([]);
  const [descricao, setDescricao] = useState("");
  const [dificuldade, setDificuldade] = useState<DificuldadeType>(DificuldadeType.FACIL);
  const [dataTarefa, setDataTarefa] = useState<Date>(new Date());
  const [horaTarefa, setHoraTarefa] = useState<Date>(new Date());
  const [DatePicker, setDatePicker] = useState(false);
  const [TimePicker, setTimerPicker] = useState(false);

  useEffect(() => {
    carregarTarefas();
  }, []);

  useEffect(() => {
    salvarTarefas();
  }, [tarefas]);

  const carregarTarefas = async () => {
    try {
      const tarefasSalvas = await AsyncStorage.getItem('@tarefas');
      if (tarefasSalvas) {
        const tarefasParseadas = JSON.parse(tarefasSalvas);
        const tarefasFormatadas = tarefasParseadas.map((t: any) => ({
          ...t,
          dataTarefa: new Date(t.dataTarefa)
        }));
        setTarefas(tarefasFormatadas);
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      Alert.alert('Erro', 'Não foi possível carregar as tarefas');
    }
  };

  const salvarTarefas = async () => {
    try {
      await AsyncStorage.setItem('@tarefas', JSON.stringify(tarefas));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
      Alert.alert('Erro', 'Não foi possível salvar as tarefas');
    }
  };

  const adicionarTarefa = async () => {
    if (!descricao.trim()) {
      Alert.alert('Erro', 'Por favor, adicione uma descrição');
      return;
    }

    try {
      const newTarefa: typesTarefas = {
        id: Date.now(),
        descricao,
        dificuldade,
        status: StatusType.PENDENTE,
        dataTarefa: dataTarefa.toISOString(),
        horaTarefa: horaTarefa.getHours(),
      };
      
      setTarefas([...tarefas, newTarefa]);
      limparCampos();
    } catch (error) { 
      console.error('Erro ao adicionar tarefa:', error);
      Alert.alert('Erro', 'Não foi possível adicionar a tarefa');
    }
  };

  const limparCampos = () => {
    setDescricao("");
    setDificuldade(DificuldadeType.FACIL);
    setDataTarefa(new Date());
    setHoraTarefa(new Date());
  };

 const calcularProgresso = () => {
    const totalTarefas = tarefas.length;
    const tarefasConcluidas = tarefas.filter(t => t.status === StatusType.CONCLUIDO).length;
    return totalTarefas > 0 ? tarefasConcluidas / totalTarefas : 0;
  };

  return (
    <DefaultPage>
      <View style={styles.container}>
        <View style={styles.viewtitle}>
          <Text style={styles.title}>LifeQuest!</Text>
        </View>

        <View style={styles.viewXP}>
          <ProgressBar progress={0} color="#55CBCD" XP={20}  />
          <Text style={styles.xpText}>
            Faltam 100 XP para o próximo nível!
          </Text>
         
        </View>

        <View style={styles.viewinfo}>
          <TextInput
            style={styles.input}
            placeholder="Descrição da tarefa"
            value={descricao}
            onChangeText={setDescricao}
          />

          <Picker
            selectedValue={dificuldade}
            onValueChange={(itemValue) => setDificuldade(itemValue as DificuldadeType)}
            style={styles.picker}
          >
            <Picker.Item label="Fácil" value={DificuldadeType.FACIL} />
            <Picker.Item label="Médio" value={DificuldadeType.MEDIO} />
            <Picker.Item label="Difícil" value={DificuldadeType.DIFICIL} />
          </Picker>

          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setDatePicker(true)}
          >
            <Text style={styles.buttonText}>
              Selecionar Data: {dataTarefa.toLocaleDateString()}
            </Text>
          </TouchableOpacity>

          {DatePicker && (
            <DateTimePicker
              value={dataTarefa}
              mode="date"
              onChange={(event, selectedDate) => {
                setDatePicker(false);
                if (selectedDate) setDataTarefa(selectedDate);
              }}
            />
          )}

           <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setTimerPicker(true)}
          >
            <Text style={styles.buttonText}>
              Horario: {dataTarefa.toLocaleTimeString()}
            </Text>
          </TouchableOpacity>

          {TimePicker && (
            <DateTimePicker
              value={horaTarefa}
              mode="time"
              onChange={(event, selectHora) => {
                setTimerPicker(false);
                if (selectHora) setHoraTarefa(selectHora);
              }}
            />
          )}

          <TouchableOpacity
            style={styles.addButton}
            onPress={adicionarTarefa}
          >
            <Text style={styles.buttonText}>Adicionar Tarefa</Text>
          </TouchableOpacity>

        </View>
      </View>
    </DefaultPage>
  );
}

