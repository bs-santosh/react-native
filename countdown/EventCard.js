import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {formatDate, getCountdownParts} from './api';


const styles = StyleSheet.create({

});

export default function EventCard({event}) {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = getCountdownParts(event.date);
    return (
        <View>
            <View style={styles.card}> 
                <View style={styles.cardHeader}> 
                    <Text>{formatDate(event.date)}</Text>
                    <Text>{event.title}</Text>
                </View>
            </View>

            <View style={styles.counterContainer}>
                <View tyle={style.counter}>
                    <View style={style.counter}>
                        <Text style={styles.counterText}>{days}</Text>
                        <Text style={styles.counterLabel}>DAYS</Text>
                    </View>
                    <View style={style.counter}>
                        <Text style={styles.counterText}>{hours}</Text>
                        <Text style={styles.counterLabel}>HOURS</Text>
                    </View>
                    <View style={style.counter}>
                        <Text style={styles.counterText}>{minutes}</Text>
                        <Text style={styles.counterLabel}>MINUTES</Text>
                    </View>
                    <View style={style.counter}>
                        <Text style={styles.counterText}>{seconds}</Text>
                        <Text style={styles.counterLabel}>SECONDS</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

Event.PropTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    }),
}
