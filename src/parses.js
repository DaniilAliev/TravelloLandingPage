const parses = () => {
    const paths = ['/fixtures/Singhapore hotels.json', '/fixtures/China hotels.json', '/fixtures/India hotels.json', '/fixtures/Bhutan hotels.json', '/fixtures/Thailand hotels.json', '/fixtures/Nepal hotels.json'];
    return Promise.all(paths.map(path => fetch(path).then(response => response.json())))
}

export default parses;