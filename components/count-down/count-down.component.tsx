import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TIME_LEFT_IN_SECONDS = 5;

interface ICountDownComponentProps<T> {
  onFinished?: T;
}

export default function CountDownComponent<T>(
  props: ICountDownComponentProps<T>,
) {
  const [timeLeft, setTimeLeft] = useState(TIME_LEFT_IN_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(interval);
        if (props.onFinished && typeof props.onFinished === 'function') {
          props.onFinished();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <View>
      <Text style={styles.textTimer}>{timeLeft}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTimer: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
