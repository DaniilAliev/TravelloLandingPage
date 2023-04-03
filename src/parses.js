const parses = async () => {
    let response = await fetch('/fixtures/Singhapore hotels.json');
    return response.json();
}

export default parses;