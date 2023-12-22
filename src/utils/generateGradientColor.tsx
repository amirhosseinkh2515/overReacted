
export const generateGradientColor = (position: number, startColor: string, endColor: string): string => {
    // console.log(position,"positionsdf")
    const r = Math.round(parseInt(startColor.slice(1, 3), 16) + position * (parseInt(endColor.slice(1, 3), 16) - parseInt(startColor.slice(1, 3), 16)));
    const g = Math.round(parseInt(startColor.slice(3, 5), 16) + position * (parseInt(endColor.slice(3, 5), 16) - parseInt(startColor.slice(3, 5), 16)));
    const b = Math.round(parseInt(startColor.slice(5, 7), 16) + position * (parseInt(endColor.slice(5, 7), 16) - parseInt(startColor.slice(5, 7), 16)));
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
};

