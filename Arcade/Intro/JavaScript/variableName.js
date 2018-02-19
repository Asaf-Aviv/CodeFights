const variableName = name => {
    let allowed = ['a', 'b', 'c', 'd', 'e', 'f',
                   'g', 'h', 'i', 'j', 'k', 'l',
                   'm', 'n', 'o', 'p', 'q', 'r',
                   's', 't', 'u', 'v', 'w', 'x',
                   'y', 'z', '1', '2', '3', '4',
                   '5', '6', '7', '8', '9', '0', '_'
                  ];
    if (/^\d/.test(name) || name.startsWith(' ')) {
        return false;
    }
    return [...name].every(e => allowed.indexOf(e.toLowerCase()) !== -1);
}