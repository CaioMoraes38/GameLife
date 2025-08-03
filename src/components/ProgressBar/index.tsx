import React from 'react';
import styles from './styles';
import { View , Text} from 'react-native';

interface ProgressBarProps {
  progress: number; 
  color?: string;
  height?: number;
  XP?: number; 
}

export default function ProgressBar({ 
  progress, 
  color = "#55CBCD", 
  height = 40,
  XP = 0,
}: ProgressBarProps) {
  return (
    <View style={[styles.container, { height }]}>
      <View
     
        style={[
          styles.progress,
          {
            width: `${Math.min(Math.max(progress * 100, 0), 100)}%`,
            backgroundColor: color,
          },
        ]}
      />
              <Text style={styles.title}>XP:</Text>
              <Text style={styles.XP}>{XP}</Text>

    </View>
  );
}
