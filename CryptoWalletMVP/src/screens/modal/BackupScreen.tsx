import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../shared/theme/ThemeProvider';
import { Typography } from '../../shared/components/Typography';
import { Card } from '../../shared/components/Card';

// Имитация seed-фразы (в реальном приложении должна генерироваться криптографически)
const MOCK_SEED_PHRASE = [
  'apple', 'banana', 'castle', 'diamond', 'elephant', 'favorite',
  'garden', 'harvest', 'island', 'journey', 'kingdom', 'legend'
];

export const BackupScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isVerified, setIsVerified] = useState(false);

  // Шаг 1: Предупреждение
  // Шаг 2: Отображение seed-фразы
  // Шаг 3: Проверка seed-фразы
  // Шаг 4: Подтверждение

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Завершено, возвращаемся на предыдущий экран
      navigation.goBack();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleSelectWord = (word: string) => {
    if (currentStep === 3) {
      setSelectedWords([...selectedWords, word]);
      
      // Простая проверка для демонстрации
      if (selectedWords.length === 11) { // Если выбрано уже 11 слов и добавляется 12-е
        setIsVerified(true);
      }
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      padding: 16,
    },
    header: {
      marginBottom: 24,
    },
    card: {
      padding: 16,
      marginBottom: 16,
    },
    warningCard: {
      backgroundColor: 'rgba(255, 204, 0, 0.1)',
      borderWidth: 1,
      borderColor: theme.colors.yellow,
    },
    seedPhraseContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginVertical: 16,
    },
    wordChip: {
      backgroundColor: theme.colors.card,
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      margin: 4,
      width: '30%',
      alignItems: 'center',
    },
    selectedWordChip: {
      backgroundColor: theme.colors.yellow,
    },
    wordText: {
      color: theme.colors.text,
    },
    selectedWordText: {
      color: theme.colors.black,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButton: {
      backgroundColor: theme.colors.yellow,
      flex: 1,
      marginLeft: 8,
    },
    secondaryButton: {
      backgroundColor: theme.colors.card,
      flex: 1,
      marginRight: 8,
    },
    disabledButton: {
      opacity: 0.5,
    },
    buttonText: {
      fontWeight: 'bold',
    },
    primaryButtonText: {
      color: theme.colors.black,
    },
    secondaryButtonText: {
      color: theme.colors.text,
    },
    stepIndicator: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 16,
    },
    step: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.card,
      marginHorizontal: 4,
    },
    activeStep: {
      backgroundColor: theme.colors.yellow,
      width: 24,
    },
  });

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card style={[styles.card, styles.warningCard]}>
            <Typography variant="h3" color={theme.colors.yellow}>
              <Text>Важное предупреждение</Text>
            </Typography>
            <Typography variant="bodyText" color={theme.colors.white} style={{ marginTop: 8 }}>
              <Text>
                • Никогда не делитесь своей секретной фразой ни с кем{'\n'}
                • Не делайте скриншотов{'\n'}
                • Храните резервную копию в безопасном месте{'\n'}
                • При потере доступа к этой фразе вы потеряете доступ к своим средствам
              </Text>
            </Typography>
          </Card>
        );
      case 2:
        return (
          <>
            <Card style={styles.card}>
              <Typography variant="h3" color={theme.colors.white}>
                <Text>Ваша секретная фраза</Text>
              </Typography>
              <Typography variant="bodyText" color={theme.colors.graySmallText} style={{ marginTop: 8 }}>
                <Text>Запишите эти 12 слов в правильном порядке и храните в надежном месте</Text>
              </Typography>
              <View style={styles.seedPhraseContainer}>
                {MOCK_SEED_PHRASE.map((word, index) => (
                  <View key={index} style={styles.wordChip}>
                    <Typography variant="bodyText" color={theme.colors.white}>
                      <Text>{`${index + 1}. ${word}`}</Text>
                    </Typography>
                  </View>
                ))}
              </View>
            </Card>
          </>
        );
      case 3:
        return (
          <>
            <Card style={styles.card}>
              <Typography variant="h3" color={theme.colors.white}>
                <Text>Подтвердите вашу фразу</Text>
              </Typography>
              <Typography variant="bodyText" color={theme.colors.graySmallText} style={{ marginTop: 8 }}>
                <Text>Выберите слова в правильном порядке</Text>
              </Typography>
              
              <View style={{ marginVertical: 16, minHeight: 50 }}>
                <View style={styles.seedPhraseContainer}>
                  {selectedWords.map((word, index) => (
                    <View key={index} style={[styles.wordChip, styles.selectedWordChip]}>
                      <Typography variant="bodyText" color={theme.colors.black}>
                        <Text>{`${index + 1}. ${word}`}</Text>
                      </Typography>
                    </View>
                  ))}
                </View>
              </View>
              
              <View style={styles.seedPhraseContainer}>
                {MOCK_SEED_PHRASE
                  .sort(() => Math.random() - 0.5) // Перемешиваем слова для проверки
                  .map((word, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.wordChip}
                      onPress={() => handleSelectWord(word)}
                      disabled={selectedWords.includes(word)}
                    >
                      <Typography 
                        variant="bodyText" 
                        color={selectedWords.includes(word) ? 'transparent' : theme.colors.white}
                      >
                        <Text>{word}</Text>
                      </Typography>
                    </TouchableOpacity>
                  ))}
              </View>
            </Card>
          </>
        );
      case 4:
        return (
          <Card style={styles.card}>
            <Typography variant="h3" color={theme.colors.green}>
              <Text>Резервное копирование завершено!</Text>
            </Typography>
            <Typography variant="bodyText" color={theme.colors.white} style={{ marginTop: 8 }}>
              <Text>
                Вы успешно создали резервную копию своего кошелька. Храните вашу секретную фразу в надежном месте.
              </Text>
            </Typography>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Typography variant="h2" color={theme.colors.white}>
            <Text>Резервное копирование</Text>
          </Typography>
          <Typography variant="bodyText" color={theme.colors.graySmallText} style={{ marginTop: 4 }}>
            <Text>Шаг {currentStep} из 4</Text>
          </Typography>
        </View>

        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4].map(step => (
            <View key={step} style={[styles.step, currentStep === step && styles.activeStep]} />
          ))}
        </View>

        {renderStepContent()}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={handlePrevStep}
        >
          <Typography variant="buttonText" style={styles.secondaryButtonText}>
            <Text>{currentStep === 1 ? 'Отмена' : 'Назад'}</Text>
          </Typography>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.button, 
            styles.primaryButton,
            (currentStep === 3 && !isVerified) && styles.disabledButton
          ]}
          onPress={handleNextStep}
          disabled={currentStep === 3 && !isVerified}
        >
          <Typography variant="buttonText" style={styles.primaryButtonText}>
            <Text>{currentStep === 4 ? 'Завершить' : 'Далее'}</Text>
          </Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}; 