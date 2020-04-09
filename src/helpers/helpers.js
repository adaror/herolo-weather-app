import { config } from '../config/config';

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function getIconUrl(iconNumber) {
    let iconStr = ''
    if (iconNumber<10) {
        iconStr = `0${iconNumber}`
    } else {
        iconStr = iconNumber
    }

    return `${config.weatherIconUrl}${iconStr}-s.png`;
}