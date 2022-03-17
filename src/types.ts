import { ImageStyle, StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import React, { FC } from 'react';

export type Nullable<T> = T | null;

export interface CancelablePromise<T> {
    promise: Promise<T>;
    cancel: () => void;
}

interface FormUrl {
    readonly src: string;
    readonly thumbnail?: string;
    readonly full_size_picture?: string;
    readonly name?: string;
    readonly size?: number;
    readonly dimensions?: {
        width: number;
        height: number;
    };
}

interface CommonStyles {
    containerStyle?: StyleProp<ViewStyle>;
    labelAndValidationContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    validationDotStyle?: StyleProp<ViewStyle>;
}

/* Description */
export interface ImageViewerProps {
    isVisible: boolean;
    pictureUris: string[];
    startingIndex: number;
    goBack: () => void;
}
export interface DescriptionPicturesProps {
    pictures: FormUrl[];
    onPressPicture?: (index: number) => void;
    ImageViewer?: FC<ImageViewerProps>;
    containerStyle?: StyleProp<ViewStyle>;
    pictureStyle?: StyleProp<ImageStyle>;
}
export interface DescriptionProps {
    descriptionText?: string;
    descriptionPictures?: FormUrl[];
    descriptionImageViewer?: FC<ImageViewerProps>;
    onPressDescriptionPicture?: (index: number) => void;
    descriptionContainerStyle?: StyleProp<ViewStyle>;
    descriptionTextStyle?: StyleProp<TextStyle>;
    descriptionPicturesContainerStyle?: StyleProp<ViewStyle>;
    descriptionPictureStyle?: StyleProp<ImageStyle>;
}

/* TextFieldAnimation */
export interface TextFieldAnimationStyles extends CommonStyles {
    inputContainerStyle?: StyleProp<ViewStyle>;
    colors?: {
        valid?: string;
        error?: string;
    };
}
export interface TextFieldAnimationProps extends DescriptionProps, TextFieldAnimationStyles {
    children: React.ReactNode;
    label: string;
    isValid?: Nullable<boolean>;
    isExpanded: boolean;
    onPress?: () => void;
    onEndAnimation?: () => void;
    leftIcon?: (isExpanded: boolean) => React.ReactNode;
    rightIcon?: (isExpanded: boolean) => React.ReactNode;
    minFontSize?: number;
    maxFontSize?: number;
    disabled?: boolean;
}

/* MCQField */
export interface MCQAnswerProps {
    text: string;
    onPress: (index: number) => void;
    isSelected: boolean;
    index: number;
    icon?: (isSelected: boolean) => React.ReactNode;
    containerStyle?: (isSelected: boolean, index: number) => StyleProp<ViewStyle>;
    textStyle?: (isSelected: boolean) => StyleProp<TextStyle>;
    disabled?: boolean;
}
export interface MCQFieldStyles extends CommonStyles {
    answerContainerStyle?: StyleProp<ViewStyle>;
    answerTextStyle?: StyleProp<TextStyle>;
    openFoldableBoxStyle?: StyleProp<ViewStyle>;
    openFoldableLabelStyle?: StyleProp<TextStyle>;
    closeFoldableBoxStyle?: StyleProp<ViewStyle>;
    closeFoldableLabelStyle?: StyleProp<TextStyle>;
    colors?: {
        valid?: string;
        error?: string;
        active?: string;
        inactive?: string;
        activeBackground?: string;
        inactiveBackground?: string;
    };
}
export interface MCQFieldProps extends DescriptionProps, MCQFieldStyles {
    label?: string;
    possibleAnswers: string[];
    selectedAnswersIndices: number[];
    isValid?: Nullable<boolean>;
    onSelectAnswer: (answerIndex: number) => void;
    foldable?: boolean;
    openFoldableLabel?: string;
    closeFoldableLabel?: string;
    activeAnswerIcon?: React.ReactNode;
    inactiveAnswerIcon?: React.ReactNode;
    activeOpenFoldableIcon?: React.ReactNode;
    inactiveOpenFoldableIcon?: React.ReactNode;
    activeCloseFoldableIcon?: React.ReactNode;
    inactiveCloseFoldableIcon?: React.ReactNode;
    shouldAnimateOpenFoldableIcon?: boolean;
    disabled?: boolean;
}

/* MultiLineTextField */
export interface MultiLineTextFieldStyles extends CommonStyles {
    inputStyle?: StyleProp<TextStyle>;
    colors?: {
        valid?: string;
        error?: string;
        placeholder?: string;
    };
}
export interface MultiLineTextFieldProps extends DescriptionProps, MultiLineTextFieldStyles {
    label?: string;
    value: string;
    isValid?: Nullable<boolean>;
    onChangeText: (text: string) => void;
    placeholder?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    textInputProps?: TextInputProps;
}

/* PhotoField */
export interface ImageComponentProps {
    thumbnailWidth?: number;
    thumbnailHeight?: number;
}
export interface PhotoFieldStyles extends CommonStyles {
    imagesContainerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    colors?: {
        valid?: string;
        error?: string;
    };
}
export interface PhotoFieldProps extends DescriptionProps, PhotoFieldStyles {
    label?: string;
    pictureUris: string[];
    isValid?: Nullable<boolean>;
    onPressPicture?: (index: number) => void;
    openCameraButton: React.ReactNode;
    imageComponent?: (uri: string, style?: StyleProp<any>) => React.ReactNode;
}

/* PickerField */
export interface PickerFieldStyles extends CommonStyles {
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    colors?: {
        valid?: string;
        error?: string;
    };
}
export interface PickerFieldProps extends DescriptionProps, PickerFieldStyles {
    label: string;
    value: string;
    isValid?: Nullable<boolean>;
    disabled?: boolean;
    openPicker: () => void;
    leftIcon?: (isExpanded: boolean) => React.ReactNode;
    rightIcon?: (isExpanded: boolean) => React.ReactNode;
}

/* SingleLineTextField */
export interface SingleLineTextFieldStyles extends CommonStyles {
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    colors?: {
        valid?: string;
        error?: string;
    };
}
export interface SingleLineTextFieldProps extends DescriptionProps, SingleLineTextFieldStyles {
    label: string;
    value: string;
    isValid?: Nullable<boolean>;
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    leftIcon?: (isExpanded: boolean) => React.ReactNode;
    rightIcon?: (isExpanded: boolean) => React.ReactNode;
    minFontSize?: number;
    maxFontSize?: number;
    disabled?: boolean;
    textInputProps?: TextInputProps;
}

export interface DatePickerStyles {
    // iOS only
    modalStyle?: StyleProp<ViewStyle>;
    datePickerIOSContainerStyle?: StyleProp<ViewStyle>;
    datePickerIOSHeaderStyle?: StyleProp<ViewStyle>;
}
export interface DatePickerProps extends DatePickerStyles {
    isVisible: boolean;
    value?: Date;
    onClosePicker: (date?: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;

    // iOS only
    iosClearButtonText?: string;
    iosValidateButtonText?: string;
}

/* DatePickerField */
export interface DatePickerFieldStyles extends CommonStyles, DatePickerStyles {
    pickerFieldContainerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    colors?: {
        valid?: string;
        error?: string;
    };
}
export interface DatePickerFieldProps extends DescriptionProps, DatePickerFieldStyles {
    label: string;
    value?: Date;
    isValid?: Nullable<boolean>;
    onChange: (date?: Date) => void;
    leftIcon?: (isExpanded: boolean) => React.ReactNode;
    rightIcon?: (isExpanded: boolean) => React.ReactNode;
    dateStringFormat?: string;
    minimumDate?: Date;
    maximumDate?: Date;
    disabled?: boolean;

    // iOS only
    iosClearButtonText?: string;
    iosValidateButtonText?: string;
}
