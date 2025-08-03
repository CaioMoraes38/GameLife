import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import DefaultPage from "@/src/components/DefautPage";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { typesTarefas} from '@/src/types/typesTarefas';


export default function Tarefas() {
  const [tarefas, setTarefas] = useState<typesTarefas[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

 
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
    }
  };

  const renderTarefa = ({ item }: { item: typesTarefas }) => (
    <View style={styles.tarefaItem}>
      <Text style={styles.descricaoTarefa}>{item.descricao}</Text>
      <Text style={styles.infoTarefa}>Dificuldade: {item.dificuldade}</Text>
      <Text style={styles.infoTarefa}>Status: {item.status}</Text>
      <Text style={styles.infoTarefa}>
        Data: {new Date(item.dataTarefa).toLocaleDateString()}
      </Text>
      <Text style={styles.infoTarefa}>
        Hora: {item.horaTarefa}:00
      </Text>
    </View>
  );

  return (
    <DefaultPage>
      <View style={styles.container}>
        <Text style={styles.title}>Minhas Tarefas</Text>
        
        {tarefas.length === 0 ? (
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada</Text>
        ) : (
          <FlatList
            data={tarefas}
            renderItem={renderTarefa}
            keyExtractor={(item) => item.id.toString()}
            style={styles.lista}
          />
        )}
      </View>
    </DefaultPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#55CBCD",
    marginBottom: 20,
    textAlign: "center",
  },
  lista: {
    flex: 1,
  },
  tarefaItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    borderLeftWidth: 5,
    borderLeftColor: "#55CBCD",
  },
  descricaoTarefa: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  infoTarefa: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 32,
  }
});
