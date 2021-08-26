import React from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import R from 'ramda';

import { TextFieldAnimationProps } from '../types';
import sharedStyles from '../SharedStyles';

import Description, { descriptionProps } from './Description';
import ValidationDot from './ValidationDot';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        height: 40,
    },
    innerContainer: {
        flex: 1,
    },
    labelContainer: {
        justifyContent: 'center',
    },
    validationDot: {
        paddingRight: 10,
    },
});

function TextFieldAnimation(props: TextFieldAnimationProps) {
    const { children, label, isValid, isExpanded, onPress, onEndAnimation, disabled } = props;

    const animationValue = React.useRef(new Animated.Value(isExpanded ? 1 : 0));

    React.useEffect(() => {
        Animated.timing(animationValue.current, {
            toValue: isExpanded ? 1 : 0,
            duration: 100,
            useNativeDriver: false,
        }).start(onEndAnimation);
    }, [isExpanded, onEndAnimation]);

    const minFontSize = props.minFontSize || 11;
    const maxFontSize = props.maxFontSize || 13;

    return (
        <TouchableWithoutFeedback onPress={onPress} disabled={!onPress || disabled}>
            <View style={[sharedStyles.container, disabled && { shadowColor: '#fff' }, props.containerStyle]}>
                <Description {...R.pick(descriptionProps, props)} />

                <View style={[styles.inputContainer, props.inputContainerStyle]}>
                    {props.leftIcon && props.leftIcon(isExpanded)}

                    <View style={styles.innerContainer}>
                        <Animated.View
                            style={[
                                styles.labelContainer,
                                {
                                    height: animationValue.current.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['100%', '45%'],
                                    }),
                                },
                            ]}
                        >
                            <Animated.Text
                                numberOfLines={isExpanded ? 1 : 2}
                                style={[
                                    sharedStyles.labelText,
                                    props.labelStyle,
                                    {
                                        fontSize: animationValue.current.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [maxFontSize, minFontSize],
                                        }),
                                    },
                                ]}
                            >
                                {label}
                            </Animated.Text>
                        </Animated.View>

                        {isExpanded && (
                            <Animated.View
                                style={{
                                    height: animationValue.current.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '55%'],
                                    }),
                                }}
                            >
                                {children}
                            </Animated.View>
                        )}
                    </View>

                    {props.rightIcon && props.rightIcon(isExpanded)}

                    <ValidationDot
                        isValid={isValid}
                        colors={props.colors}
                        style={[styles.validationDot, props.validationDotStyle]}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default React.memo(TextFieldAnimation);
