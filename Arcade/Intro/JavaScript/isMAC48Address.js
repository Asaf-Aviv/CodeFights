const isMAC48Address = s => {
    s = s.split('').filter((v, i) => Number.isInteger(+v) ||
                            v.charCodeAt(0) > 64 && v.charCodeAt(0) < 71 ||
                            v === '-' && !((i + 1) % 3));
    return s.length === 17;
}