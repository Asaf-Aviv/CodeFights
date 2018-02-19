const isIPv4Address = str => {
    let breakIp = str.split('.').map(v => v.match(/^[0-9]+$/) != null ? parseInt(v, 10) : NaN);
    return breakIp.length === 4 && breakIp.every(d => d >= 0 && d <= 255);
}